'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import Icon from './Icon';
import {
  orgTypes,
  defaultOrgType,
  plans,
  addons,
  managedTechnologyFeatures,
  planScope,
  commonToAllPlans,
  formatPrice,
  priceCaveat,
  clientStandingCharge,
  communalBlockCharge,
  visitCharges,
  priceReview,
} from '@/data/plans';
import Tbc from './Tbc';

// Brief 6.2: the interactive plan explorer, rebuilt natively.
// Server-rendered so every price is crawlable text.
//
// 25 September 2026: one price list. The organisation-type step is gone (see the note
// at the top of data/plans.js), and the summary now shows the client account charge
// beside the per-home figure, because a per-home number on its own is not the bill.

function Drawer({ open, onClose, title, children }) {
  const ref = useRef(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);
  return (
    <dialog
      ref={ref}
      className="drawer-dialog"
      aria-labelledby="drawer-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      <div className="drawer">
        <div className="drawer__head">
          <h2 id="drawer-title" style={{ fontSize: '1.5rem', margin: 0 }}>
            {title}
          </h2>
          <button type="button" className="drawer__close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        {children}
      </div>
    </dialog>
  );
}

function ScopeDetail({ plan }) {
  return (
    <>
      <p>{plan.description}</p>
      <p className="note">
        <strong>Common to all plans:</strong> {commonToAllPlans}
      </p>
      <p className="muted mt-2">
        The trade categories are the same on every plan. Only the threshold changes: {plan.thresholdLabel.toLowerCase()}
        .
      </p>
      <div className="accordion">
        {planScope.map((c) => (
          <details key={c.category}>
            <summary>{c.category}</summary>
            <div className="accordion__body">
              <ul className="tick-list tick-list--compact">
                {c.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}

function AddonDetail({ addon }) {
  return (
    <>
      <p>{addon.intro}</p>
      <h3 style={{ fontSize: '1.1rem' }}>Includes</h3>
      <ul className="tick-list tick-list--compact">
        {addon.includes.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <div className="accordion mt-2">
        {addon.detail.map((d, idx) => (
          <details key={d.title}>
            <summary>
              {idx + 1}. {d.title}
            </summary>
            <div className="accordion__body">
              {d.body && <p>{d.body}</p>}
              {d.items && (
                <ul className="tick-list tick-list--compact">
                  {d.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              )}
            </div>
          </details>
        ))}
      </div>
    </>
  );
}

export default function PlanExplorer() {
  const [typeId, setTypeId] = useState(defaultOrgType);
  const [planId, setPlanId] = useState('home1000');
  const [addonOn, setAddonOn] = useState({ electrical: false, gasBoiler: false, communal: false });
  const [drawer, setDrawer] = useState(null); // { kind: 'plan'|'addon', id }
  const [linesOpen, setLinesOpen] = useState(false);

  // Pre-select the organisation type from the query string (/pricing?type=btr).
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get('type');
    if (q && orgTypes.some((t) => t.id === q)) setTypeId(q);
  }, []);

  const type = orgTypes.find((t) => t.id === typeId);
  const plan = plans.find((p) => p.id === planId);
  const planPrice = type.plans[planId];
  const selectedAddons = addons.filter((a) => addonOn[a.id]);
  const addonTotal = selectedAddons.reduce((sum, a) => sum + type.addons[a.id], 0);
  const total = planPrice == null ? null : type.managedTechnology + planPrice + addonTotal;

  // Monthly charges that are NOT per home, so they can never be added to the figure above.
  // The client standing charge always applies - it is in Schedule 4 and is not optional, so
  // it is shown as a fact rather than as a switch. The block charge appears only if communal
  // reporting is selected, because it is the other half of that add-on.
  const separateCharges = [
    clientStandingCharge,
    ...(addonOn.communal ? [communalBlockCharge] : []),
  ];

  const contactHref = useMemo(() => {
    const p = new URLSearchParams({ enquiry: 'review', type: typeId, plan: planId });
    if (selectedAddons.length) p.set('addons', selectedAddons.map((a) => a.id).join(','));
    return `/contact?${p.toString()}`;
  }, [typeId, planId, selectedAddons]);

  const drawerPlan = drawer?.kind === 'plan' ? plans.find((p) => p.id === drawer.id) : null;
  const drawerAddon = drawer?.kind === 'addon' ? addons.find((a) => a.id === drawer.id) : null;

  return (
    <div className="explorer">
      {/* The organisation-type step is gone: there is one price list now, and what
          actually moves a price is the stock review rather than the kind of landlord.
          The caveat that replaces it is doing real work, so it leads. */}
      <p className="explorer-caveat">{priceCaveat}</p>

      {/* PRICE-03 Step 1 */}
      <section className="explorer-step" aria-labelledby="step1">
        <div className="step-label">
          <span className="num" aria-hidden="true">
            1
          </span>
          <h2 id="step1">Managed Technology</h2>
        </div>
        <div className="mt-panel">
          <div>
            <span className="included-badge">Included with every plan</span>
            <div className="mt-price">
              {formatPrice(type.managedTechnology)} <small>per home per month, plus VAT</small>
            </div>
          </div>
          <div className="accordion" style={{ borderTop: 0 }}>
            <details>
              <summary>What Managed Technology includes</summary>
              <div className="accordion__body">
                <div className="grid-3" style={{ gap: 20 }}>
                  {managedTechnologyFeatures.map((g) => (
                    <div key={g.group}>
                      <h3 style={{ fontSize: '1rem' }}>{g.group}</h3>
                      <ul className="tick-list tick-list--compact">
                        {g.items.map((i) =>
                          typeof i === 'string' ? (
                            <li key={i}>{i}</li>
                          ) : (
                            <li key={i.text}>
                              {i.text} <Tbc>{i.tbc}</Tbc>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* PRICE-04 Step 2 */}
      <section className="explorer-step" aria-labelledby="step2">
        <div className="step-label">
          <span className="num" aria-hidden="true">
            2
          </span>
          <h2 id="step2">Add your repair plan</h2>
        </div>
        <div className="plan-cards">
          {plans.map((p) => {
            const price = type.plans[p.id];
            const combined = price == null ? null : type.managedTechnology + price;
            const selected = planId === p.id;
            return (
              <div key={p.id} className={`plan-card ${selected ? 'plan-card--selected' : ''}`}>
                <span className="plan-card__tag">{p.tag}</span>
                <h3>{p.name}</h3>
                <p className="plan-card__threshold mb-0">{p.thresholdLabel}</p>
                <p className="plan-card__coverage mb-0">{p.coverage}</p>
                <p className="plan-card__short">{p.short}</p>
                <div className="plan-card__price">
                  {combined == null ? (
                    <>
                      <div className="plan-card__poa">{p.priceLabel}</div>
                      <p className="plan-card__breakdown">
                        Managed Technology {formatPrice(type.managedTechnology)} plus a Home Trust plan priced for your
                        portfolio.
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="plan-card__big">
                        {formatPrice(combined)} <small>per home per month, plus VAT</small>
                      </div>
                      <p className="plan-card__breakdown">
                        Managed Technology {formatPrice(type.managedTechnology)} + {p.name} plan {formatPrice(price)}
                      </p>
                    </>
                  )}
                </div>
                <div className="plan-card__actions">
                  <button
                    type="button"
                    aria-pressed={selected}
                    className={`btn btn-small ${selected ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setPlanId(p.id)}
                  >
                    {selected ? 'Selected' : `Choose ${p.name}`}
                  </button>
                  <button
                    type="button"
                    className="btn btn-small btn-secondary"
                    onClick={() => setDrawer({ kind: 'plan', id: p.id })}
                  >
                    What&apos;s included
                  </button>
                  {combined == null && (
                    <Link
                      href={`/contact?enquiry=review&type=${typeId}&plan=${p.id}`}
                      className="btn btn-small btn-secondary"
                    >
                      Talk to us
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-2 max-640">
          One fixed monthly fee per property, with no limit on the number of repairs in your plan, so your costs stay
          fixed even when repair volumes rise. The plans differ only by the repair value threshold. The trade categories
          covered are the same, and a higher threshold means fewer jobs fall outside the plan.
        </p>
      </section>

      {/* PRICE-05 Step 3 */}
      <section className="explorer-step" aria-labelledby="step3">
        <div className="step-label">
          <span className="num" aria-hidden="true">
            3
          </span>
          <h2 id="step3">Optional compliance cover</h2>
        </div>
        {/* THREE addons in a TWO-column grid left the third alone on its own row beside a
            566px hole - the largest piece of empty space on the pricing page, and a good
            part of why Sam called it bland. The count here follows the data: it lays out as
            one row whatever number of add-ons data/plans.js happens to hold. */}
        <div className="addon-grid">
          {addons.map((a) => {
            const on = addonOn[a.id];
            return (
              <div key={a.id} className={`addon-card ${on ? 'addon-card--on' : ''}`}>
                <div className="addon-head">
                  <h3 className="mb-0">
                    <Icon name={a.icon} size={20} className="addon-icon" />
                    {a.name}
                  </h3>
                  <div className="addon-price">
                    {formatPrice(type.addons[a.id])}
                    <br />
                    <small>per home per month, plus VAT</small>
                    {a.id === 'communal' && (
                      <>
                        <br />
                        <small>
                          plus {formatPrice(communalBlockCharge.amount)} {communalBlockCharge.per}
                        </small>
                      </>
                    )}
                  </div>
                </div>
                <p className="mb-0">{a.intro}</p>
                {a.note && (
                  <p className="mb-0">
                    <strong>Note:</strong> {a.note}
                  </p>
                )}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', marginTop: 8 }}>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={on}
                    className="switch"
                    onClick={() => setAddonOn((s) => ({ ...s, [a.id]: !s[a.id] }))}
                  >
                    <span className="switch__track" aria-hidden="true" />
                    Add {a.name}
                  </button>
                  <button
                    type="button"
                    className="btn btn-small btn-secondary"
                    onClick={() => setDrawer({ kind: 'addon', id: a.id })}
                  >
                    What&apos;s included
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PRICE-06 Summary bar */}
      <div className="summary-bar" role="region" aria-label="Your price">
        <div className="summary-bar__inner">
          <div>
            <div className="summary-bar__total" aria-live="polite">
              Your price per home per month:{' '}
              {total == null ? <strong>Price on application</strong> : <strong>{formatPrice(total)}</strong>}{' '}
              {total != null && 'plus VAT'}
            </div>
            <div className="summary-bar__plus">
              Plus a {formatPrice(clientStandingCharge.amount)} {clientStandingCharge.label.toLowerCase()} &mdash; once
              for the whole contract, not per home
            </div>
            <div className={`summary-bar__lines ${linesOpen ? '' : 'summary-bar__lines--collapsed'}`} id="summary-lines">
              <ul className="summary-bar__group">
                <li>Managed Technology {formatPrice(type.managedTechnology)}</li>
                <li>
                  {plan.name} {planPrice == null ? plan.priceLabel : formatPrice(planPrice)}
                </li>
                {selectedAddons.map((a) => (
                  <li key={a.id}>
                    {a.name} {formatPrice(type.addons[a.id])}
                  </li>
                ))}
              </ul>

              {/* Charges that are NOT per home live in their own block, with their own
                  heading, below the per-home breakdown. This used to be a bare
                  "plus GBP400" line directly under the per-home figure, which reads as
                  though every property costs GBP400 more. It does not: it is charged once
                  for the whole client. */}
              <div className="summary-bar__separate">
                <p className="summary-bar__separate-head">
                  Charged once for the contract, not per home
                </p>
                <ul className="summary-bar__group">
                  {separateCharges.map((c) => (
                    <li key={c.label}>
                      <span>{c.label}</span>
                      <strong>
                        {formatPrice(c.amount)} {c.per}
                      </strong>
                    </li>
                  ))}
                </ul>
                <p className="summary-bar__separate-head">Charged only when they happen</p>
                <ul className="summary-bar__group">
                  {visitCharges.map((v) => (
                    <li key={v.label}>
                      <span>{v.label}</span>
                      <strong>{formatPrice(v.amount)} per visit</strong>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="summary-bar__note">{priceReview}</p>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="summary-bar__toggle"
              aria-expanded={linesOpen}
              aria-controls="summary-lines"
              onClick={() => setLinesOpen((o) => !o)}
            >
              {linesOpen ? 'Hide breakdown' : 'Show breakdown'}
            </button>
            <Link href={contactHref} className="btn btn-primary">
              Book a portfolio review
            </Link>
          </div>
        </div>
      </div>

      <Drawer
        open={!!drawer}
        onClose={() => setDrawer(null)}
        title={drawerPlan ? `${drawerPlan.name}: what's included` : drawerAddon ? drawerAddon.name : ''}
      >
        {drawerPlan && <ScopeDetail plan={drawerPlan} />}
        {drawerAddon && <AddonDetail addon={drawerAddon} />}
      </Drawer>
    </div>
  );
}
