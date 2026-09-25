'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Tbc from './Tbc';
import { orgTypes, plans, addons } from '@/data/plans';

// Brief 6.10. HubSpot is the intended form handler.
// To switch it on, add these to Vercel > Settings > Environment Variables and redeploy:
//   NEXT_PUBLIC_HUBSPOT_PORTAL_ID, NEXT_PUBLIC_HUBSPOT_FORM_ID (and NEXT_PUBLIC_HUBSPOT_REGION, e.g. "eu1", if needed)
// Until then, the form below is shown as a working layout that does not send anything.
const HS_PORTAL = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
const HS_FORM = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;
const HS_REGION = process.env.NEXT_PUBLIC_HUBSPOT_REGION || 'eu1';

export const enquiryOptions = [
  { id: 'review', label: 'Book a portfolio review' },
  { id: 'pilot', label: 'Talk about a 12-month pilot' },
  { id: 'demo', label: 'Book a demo' },
  { id: 'other', label: 'Something else' },
];

const sectorOptions = [
  'Housing association',
  'Local authority or council housing company',
  'Build to Rent',
  'Private rented sector (landlord or agent)',
  'Other',
];

const unitOptions = ['1', '2-5', '6-10', '11-50', '51-100', '101-1,000', '1,001-10,000', '10,000+'];

const locationOptions = [
  'London',
  'South East',
  'South West',
  'East Anglia',
  'East Midlands',
  'West Midlands',
  'Yorkshire and the Humber',
  'North West',
  'North East',
  'England',
  'Wales',
  'Scotland',
  'UK wide',
];

function readQuery() {
  const q = new URLSearchParams(window.location.search);
  const enquiry = enquiryOptions.some((o) => o.id === q.get('enquiry')) ? q.get('enquiry') : '';
  const type = orgTypes.find((t) => t.id === q.get('type'));
  const plan = plans.find((p) => p.id === q.get('plan'));
  const addonList = (q.get('addons') || '')
    .split(',')
    .map((id) => addons.find((a) => a.id === id))
    .filter(Boolean);
  return {
    enquiry,
    orgType: type ? type.label : '',
    plan: plan ? plan.name : '',
    addons: addonList.map((a) => a.name).join(', '),
  };
}

function HubSpotEmbed({ selections }) {
  const ref = useRef(null);
  useEffect(() => {
    const create = () => {
      if (!window.hbspt || !ref.current) return;
      ref.current.innerHTML = '';
      window.hbspt.forms.create({
        region: HS_REGION,
        portalId: HS_PORTAL,
        formId: HS_FORM,
        target: '#hubspot-form',
        onFormReady: ($form) => {
          // Map these to hidden HubSpot properties with the same internal names.
          const form = $form[0] || $form;
          const set = (name, value) => {
            const el = form.querySelector(`[name="${name}"]`);
            if (el && value) el.value = value;
          };
          set('enquiry_type', selections.enquiry);
          set('organisation_type', selections.orgType);
          set('plan', selections.plan);
          set('add_ons', selections.addons);
        },
      });
    };
    if (window.hbspt) return create();
    const s = document.createElement('script');
    s.src = 'https://js.hsforms.net/forms/embed/v2.js';
    s.async = true;
    s.onload = create;
    document.body.appendChild(s);
  }, [selections]);
  return <div id="hubspot-form" ref={ref} />;
}

export default function ContactForm() {
  const [selections, setSelections] = useState({ enquiry: '', orgType: '', plan: '', addons: '' });
  const [enquiry, setEnquiry] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const s = readQuery();
    setSelections(s);
    if (s.enquiry) setEnquiry(s.enquiry);
  }, []);

  const hasPlan = selections.orgType || selections.plan || selections.addons;

  if (HS_PORTAL && HS_FORM) {
    return (
      <HubSpotEmbed
        selections={{ ...selections, enquiry: enquiryOptions.find((o) => o.id === enquiry)?.label || '' }}
      />
    );
  }

  if (submitted) {
    return (
      <div className="form-status" role="status">
        <p>
          <strong>Thank you.</strong> <Tbc>form not connected yet: HubSpot portal and form IDs to be added</Tbc>
        </p>
        <p className="mb-0">
          Nothing has been sent. Once HubSpot is connected, this message will confirm the enquiry has been received.
        </p>
      </div>
    );
  }

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="note">
        This form is not to be used for reporting repair or maintenance issues. Residents,{' '}
        <Link href="/residents">please go to the residents page</Link>.
      </div>

      <div className="field">
        <fieldset>
          <legend>
            What would you like? <span className="req">*</span>
          </legend>
          <div className="choice-grid">
            {enquiryOptions.map((o) => (
              <label className="choice" key={o.id}>
                <input
                  type="radio"
                  name="enquiry_type"
                  value={o.label}
                  required
                  checked={enquiry === o.id}
                  onChange={() => setEnquiry(o.id)}
                />
                {o.label}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      {hasPlan && (
        <div className="selection-summary">
          <strong>Your plan explorer selection:</strong>{' '}
          {[selections.orgType, selections.plan, selections.addons].filter(Boolean).join(', ')}
        </div>
      )}
      <input type="hidden" name="organisation_type" value={selections.orgType} />
      <input type="hidden" name="plan" value={selections.plan} />
      <input type="hidden" name="add_ons" value={selections.addons} />

      <div className="form-row">
        <div className="field">
          <label htmlFor="cf-name">
            Your name <span className="req">*</span>
          </label>
          <input className="input" id="cf-name" name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="cf-org">Organisation</label>
          <input className="input" id="cf-org" name="organisation" autoComplete="organization" />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="cf-email">
            Your email address <span className="req">*</span>
          </label>
          <input className="input" id="cf-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="cf-phone">
            Contact number <span className="req">*</span>
          </label>
          <input className="input" id="cf-phone" name="phone" type="tel" autoComplete="tel" required />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="cf-sector">What sector do you operate in?</label>
          <select className="select" id="cf-sector" name="sector" defaultValue="">
            <option value="" disabled>
              Choose one
            </option>
            {sectorOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="cf-units">
            How many homes do you own or manage? <span className="req">*</span>
          </label>
          <select className="select" id="cf-units" name="units" defaultValue="" required>
            <option value="" disabled>
              Choose one
            </option>
            {unitOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <fieldset>
          <legend>Where are your properties located?</legend>
          <div className="choice-grid choice-grid--3">
            {locationOptions.map((o) => (
              <label className="choice" key={o}>
                <input type="checkbox" name="locations" value={o} />
                {o}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="field">
        <label htmlFor="cf-pain">
          What is the biggest pain point for you? <span className="req">*</span>
        </label>
        <input className="input" id="cf-pain" name="pain_point" required />
      </div>

      <div className="field">
        <label htmlFor="cf-found">How did you find out about EVO? (optional)</label>
        <input className="input" id="cf-found" name="source" />
      </div>

      <div className="field">
        <label htmlFor="cf-comments">Anything else you would like to tell us? (optional)</label>
        <textarea className="textarea" id="cf-comments" name="comments" />
      </div>

      <div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </div>
    </form>
  );
}
