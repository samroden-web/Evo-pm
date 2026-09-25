import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import { IconBadge } from '@/components/Icon';
import AppBadges from '@/components/AppBadges';
import Photo from '@/components/Photo';
import Tbc from '@/components/Tbc';

export const metadata = {
  title: 'Join the EVO trades network | EVO',
  description:
    'Guaranteed reactive work for housing associations, councils and Build to Rent. Paid in 14 days, no quoting for standard work, and no invoices to raise.',
  alternates: { canonical: '/trades' },
};

const WHY = [
  ['wallet', 'Paid in 14 days', 'Not 30, not 60, and not when the client finally settles. Fourteen days, every time.'],
  [
    'warranty',
    'Guaranteed work, not leads',
    'You are not bidding against five other firms for the same job. Work is offered to you because it is yours to do.',
  ],
  [
    'calendar',
    'You set your own availability',
    'Your diary stays yours. Tell the app when you are working and we offer jobs into the time you have made available, not around it.',
  ],
  [
    'pin',
    'Only your trade, only your area',
    'No plumbing jobs sent to an electrician, and nothing forty miles away. You stop declining work that was never suitable.',
  ],
  ['route', 'No admin at all', 'No quotes for standard work, no invoices to raise, no month-end chasing. We self-bill and pay.'],
  [
    'phoneApp',
    'You see it before you go',
    "The resident's photographs and the property's repair history, in the app, before you accept. So you arrive with the right parts and do it in one visit.",
  ],
];

const RULES = [
  ['R', 'AMS', 'A risk assessment before work commences. Every time, not just on the big ones.'],
  ['R', 'epair works', 'Repairs are instructed by the EVO office. Nothing starts on a nod.'],
  ['R', 'equired works', 'Anything further must link directly to the original repair, and needs our approval before you do it.'],
  [
    'R',
    'eport an observation',
    'Spot something that will cause trouble later — a tired bathroom, a failing seal — and flag it. It is an observation for the client to consider, not a quote.',
  ],
  ['R', 'evisit', 'If the same issue comes back within three months, you re-attend free of charge.'],
  ['R', 'enew', 'If an item you renewed fails within twelve months, you re-attend free of charge.'],
  ['R', 'esident request', 'Never take instruction from the resident. If they need something else, it comes through us.'],
];

const PRACTICAL = [
  [
    'file',
    'We invoice ourselves',
    'Self-billing, set up when you join. You never raise an invoice to EVO, and payment runs to 14 days.',
  ],
  [
    'van',
    'Parking sorted',
    "Your vehicle registrations go on the client's exemption list before you attend, so you are not collecting tickets on their estates.",
  ],
  [
    'wallet',
    'Materials covered',
    'Materials are paid on top of labour with an uplift, and we will compare against the main merchants if a price needs checking.',
  ],
  [
    'users',
    'You meet Mark',
    'Every firm sits down with our director before the first job. You hear how EVO works from the person who built it, and we hear about your trade.',
  ],
];

export default function TradesPage() {
  return (
    <>
      <PageHero
        eyebrow="Trades"
        title="Turn up, fix it, get paid in 14 days."
        lead="Guaranteed reactive work for housing associations, councils and Build to Rent — in your area, for your trade, in the hours you make available. Priced before you set off, and no invoice to raise."
        crumbs={[{ label: 'Trades' }]}
        image="/images/photos/evo-trades-two-operatives-van.webp"
        imageAlt="Two tradesmen at the back of their own van on a residential street"
        imageWidth={1500}
        imageHeight={843}
        priority
        captionLabel="Your firm, your van"
        caption="Small regional firms, by design"
      >
        <div className="btn-row mt-3">
          <Link href="/contact?enquiry=trades" className="btn btn-primary">
            Apply to join
          </Link>
        </div>
      </PageHero>

      <section className="ev2-band" aria-label="Why firms join">
        <div className="container">
          <p className="eyebrow">Why firms join</p>
          <h2>Six things that are different from the work you are doing now.</h2>
          <div className="ev2-band-grid">
            {WHY.map(([icon, t, d]) => (
              <div className="ev2-band-item" key={t}>
                <IconBadge name={icon} />
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="How the work arrives"
            title="Matched to you, with the history attached."
            lead="Jobs come through the EVO Trades App, matched to your trade and your area. You accept or you do not. What arrives with it is the part most firms never get: the property's service history, the access details, and what was done last time by whoever was there."
          />
          <ul className="tick-list mt-3">
            <li>
              <strong>You choose when you are available.</strong> Set your working hours in the app and change them whenever you need to. Jobs are only offered into
              the time you have opened up.
            </li>
            <li>
              <strong>You see the job before you accept it.</strong> Address, trade, priority, the resident&rsquo;s description and their photographs.
            </li>
            <li>
              <strong>Emergencies are flagged as emergencies.</strong> Accept only if you can genuinely attend in the window.
            </li>
            <li>
              <strong>The resident knows you are coming.</strong> They picked the slot and can see you on the way, so the door gets answered.
            </li>
            <li>
              <strong>The history tells you what to bring.</strong> What was done last time, by whom, and what was replaced — so you load the van once rather than
              driving back to the merchant.
            </li>
            <li>
              <strong>Completion notes and photographs in the app.</strong> No paperwork afterwards.
            </li>
          </ul>
          <div className="ev3-split ev3-split--narrow mt-3">
            <Photo
              src="/images/photos/evo-trades-accepting-job-in-van.webp"
              alt="A contractor accepting a job in the EVO Trades App from his van"
              caption="Accepting a job before setting off."
              width={900}
              height={675}
              sizes="(min-width: 880px) 40vw, 100vw"
            />
            <div>
              <h3>No quoting, and no chasing</h3>
              <p>
                The price is agreed before you travel, against a rate card you have already seen. There is no estimate to write,
                no client to chase for approval, and no invoice to raise afterwards.
              </p>
              <p className="mb-0">
                Good firms tell us they were spending more time quoting than working. That is the part this removes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <SectionHead eyebrow="The practical things" title="The bits that cost you a day a month." />
          <div className="grid grid-2 mt-3">
            {PRACTICAL.map(([icon, t, d]) => (
              <div className="card" key={t}>
                <IconBadge name={icon} />
                <h3>{t}</h3>
                <p className="mb-0">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="What we ask of you"
            title="Seven rules, and we are straight about them."
            lead="The reason landlords hand us their portfolios is that the network is controlled rather than assembled. That only works if everyone knows the rules before they start, so here they are."
          />
          <div className="ev2-rules mt-3">
            {RULES.map(([r, rest, d]) => (
              <div className="ev2-rule" key={rest}>
                <h3>
                  <span>{r}</span>
                  {rest}
                </h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 mb-0">
            Payment follows a quality assurance review after each job, done remotely in the system. If something needs verifying on site, our QA surveyor attends —
            you are not asked to prove it twice.
          </p>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <SectionHead
            eyebrow="Getting on the network"
            title="Checked before the first job, and every year after."
            lead="Insurance, accreditation and competence are verified before you are switched on, and re-checked annually. It is the same standard for a sole trader and a twenty-van firm, and it is what lets us put our name to the work."
          />
          <ul className="tick-list mt-3">
            <li>
              <strong>A pre-qualification questionnaire</strong> covering your trade, your cover and how you work.
            </li>
            <li>
              <strong>Public liability and employer&rsquo;s liability insurance</strong>, current and evidenced.
            </li>
            <li>
              <strong>Trade accreditations</strong> — Gas Safe, NICEIC or equivalent, wherever the work requires them.
            </li>
            <li>
              <strong>DBS checks</strong>, because you are going into people&rsquo;s homes. <Tbc>confirm scope</Tbc>
            </li>
            <li>
              <strong>A quality assurance agreement</strong> to sign, so the standard is written down rather than implied.
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Apply"
            title="Tell us about your firm."
            lead="A short form, not the sales enquiry form. We will come back to you either way, and if it looks like a fit the next step is a conversation with Mark."
          />
          <Tbc block>
            The Trades application form is its own short form: company name, contact and phone, trades carried out, areas covered, team size, accreditations,
            insurance in place, VAT registered. It should not post into the sales enquiry form. Also outstanding: which regions are currently open, so the right
            firms apply and the wrong ones do not.
          </Tbc>
          <div className="btn-row mt-3">
            <Link href="/contact?enquiry=trades" className="btn btn-primary">
              Apply to join the network
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <SectionHead
            eyebrow="The app"
            title="Get the EVO Trades App."
            lead="Free. You will need an account from us before you can log in, which comes with your welcome email."
          />
          <div className="ev3-split ev3-split--reverse mt-3">
            <div className="ev3-screens">
              <figure>
                <img
                  src="/images/app/trades-app-home.webp"
                  alt="The EVO Trades App home screen, showing new jobs, upcoming jobs, completed jobs and pending quotes"
                  width="420"
                  height="884"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>Your jobs, in one place</figcaption>
              </figure>
              <figure>
                <img
                  src="/images/app/trades-app-emergency-job.webp"
                  alt="A new emergency job in the EVO Trades App, with a two-hour attendance window"
                  width="420"
                  height="747"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>Accept, or decline. Nothing happens if you decline.</figcaption>
              </figure>
            </div>
            <div>
              <AppBadges app="trades" />
              <p className="mt-2 mb-0 muted">
                Everything runs through the app: the offer, the access details, the service history, the photographs and the
                completion notes. There is no separate portal and no paperwork to post.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
