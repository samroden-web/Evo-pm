import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import AppBadges from '@/components/AppBadges';
import Tbc, { TbcValue } from '@/components/Tbc';
import Photo from '@/components/Photo';
import { contact, apps } from '@/data/site';

export const metadata = {
  title: 'Residents: report a repair | EVO',
  description:
    'Report a repair or an emergency in the EVO Living App, find step-by-step guides and answers to common questions.',
  alternates: { canonical: '/residents' },
};

// This page is written plainer and set larger than the rest of the site: shorter
// sentences, no jargon, and nothing about plans, thresholds or compliance, because
// none of that is a resident's problem.

const STEPS = [
  ['Tell us what is wrong', 'Open the app, tap "Report a Problem", choose what it is and add a photo. You get a reference number straight away.'],
  ['Pick a time that suits you', 'Choose from the appointment slots offered, rather than waiting in all day. You can change it later if something comes up.'],
  ['See who is coming', 'You will know the name of the person attending and be able to follow them on the way, so you are not guessing.'],
  ['Tell us how it went', 'Rate the job when it is finished. If it is not right, say so in the app and we will come back.'],
];

const HELP = [
  { title: 'How to use the app', body: 'A step-by-step guide with pictures, from registering to reporting and tracking a repair.', href: '/how-to-guides/using-the-evo-living-app', link: 'Read the guide' },
  { title: 'How to report an emergency', body: 'What counts as an emergency, what to do first, and what happens once you have reported it.', href: '/how-to-guides/reporting-an-emergency', link: 'Read the guide' },
  { title: 'Damp and mould', body: 'How to report it, what we check when we visit, and what we do about it. Please report it early — it is easier to treat.', href: '/damp-and-mould', link: 'Damp and mould' },
  { title: 'Questions', body: 'How long repairs take, what is and is not covered, appointments, access, and what to do if something goes wrong.', href: '/faqs/residents', link: 'Resident questions' },
];

export default function ResidentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Residents"
        title="Something needs fixing?"
        lead="Report it in the EVO Living App in about thirty seconds — any time of day or night, from wherever you are."
        crumbs={[{ label: 'Residents' }]}
      >
        <div className="ev2-getapp mt-3">
          <div>
            <h2>Get the EVO Living App</h2>
            <p>Free, and the quickest way to report a repair, book a time and see what is happening.</p>
          </div>
          <AppBadges app="living" />
        </div>

        <div className="ev2-emergency mt-3">
          <p className="eyebrow">Emergencies</p>
          <h2>Report an emergency in the app, the same as anything else.</h2>
          <p>
            Tap <strong>Emergency</strong> when you report it. It goes straight through and is actioned immediately, day or night — you do not need to wait for a
            reply, and you do not need to ring anyone first.
          </p>
          <ul>
            <li>A burst pipe or serious flooding</li>
            <li>No heating or hot water in cold weather</li>
            <li>Total loss of power</li>
            <li>A door or window you cannot secure</li>
          </ul>
          <div className="ev2-emergency-alt">
            <span className="eyebrow mb-0">No phone to hand?</span>
            <span className="ev2-num">
              <TbcValue
                value={contact.residentPhone}
                label="resident phone number"
                render={(v) => <a href={`tel:${v.replace(/\s/g, '')}`}>{v}</a>}
              />
            </span>
            <span className="muted">Answered 24 hours a day.</span>
          </div>
          <p className="mt-2 mb-0">
            <strong>Two things to call before you call us.</strong> If you can smell gas, phone the National Gas Emergency Service on <strong>0800 111 999</strong>.
            If there is a fire, phone <strong>999</strong>. Report it in the app afterwards.
          </p>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Reporting a repair" title="Four steps, and no phone call." />
          <div className="steps-row mt-3">
            {STEPS.map(([t, d], i) => (
              <div className="step-card" key={t}>
                <span className="num">{i + 1}</span>
                <h3>{t}</h3>
                <p className="mb-0">{d}</p>
              </div>
            ))}
          </div>
          <div className="ev3-screens mt-3" style={{ maxWidth: '420px' }}>
            <figure>
              <img
                src="/images/app/living-app-home.webp"
                alt="The EVO Living App home screen, with Report a problem, Emergency, Appointments, Documents, FAQs and My profile"
                width="420"
                height="884"
                loading="lazy"
                decoding="async"
              />
              <figcaption>The home screen</figcaption>
            </figure>
            <figure>
              <img
                src="/images/app/living-app-report-a-problem.webp"
                alt="Reporting a problem in the EVO Living App, choosing from plumbing, heating, drainage, electrics and other categories"
                width="420"
                height="884"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Pick what is wrong</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <SectionHead
            eyebrow="First time here?"
            title="You need to register before you can report."
            lead="It takes a couple of minutes and you only do it once. You will need your address and the name of your landlord or managing agent."
          />
          <div className="ev3-split mt-3">
            <div>
              <div className="btn-row">
                <a href={apps.living.registration} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Register for the app
                </a>
              </div>
              <p className="mt-2 mb-0">
                If you would rather someone walked you through it, say so when you register and we will. Our team is often on
                site, and helping people set the app up is part of the job.
              </p>
            </div>
            <Photo
              src="/images/photos/evo-team-member-helping-resident.webp"
              alt="A resident using the EVO Living App with help from a member of the EVO team"
              caption="Setting the app up together, on a visit."
              width={1400}
              height={787}
              sizes="(min-width: 880px) 46vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Other things you might need" title="Guides, questions and damp." />
          <div className="grid grid-2 mt-3">
            {HELP.map((h) => (
              <div className="card" key={h.title}>
                <h3>{h.title}</h3>
                <p>{h.body}</p>
                <p className="mb-0">
                  <Link href={h.href} className="text-link">
                    {h.link}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <SectionHead
            eyebrow="Getting hold of us"
            title="If the app is not an option."
            lead="The app is the quickest way, but it is not the only way. You can phone or email and we will log the repair for you."
          />
          <div className="grid grid-2 mt-3">
            <div className="card">
              <h3>Phone</h3>
              <p className="mb-0">
                <TbcValue
                  value={contact.residentPhone}
                  label="resident phone number"
                  render={(v) => <a href={`tel:${v.replace(/\s/g, '')}`}>{v}</a>}
                />
                <br />
                24 hours a day for emergencies.
              </p>
            </div>
            <div className="card">
              <h3>Email</h3>
              <p className="mb-0">
                <a href={`mailto:${contact.residentEmail}`}>{contact.residentEmail}</a>{' '}
                {!contact.residentEmailConfirmed && <Tbc>helpdesk@ or living@evo-pm.com</Tbc>}
              </p>
            </div>
            <div className="card">
              <h3>Helpdesk hours</h3>
              <p className="mb-0">
                <TbcValue value={contact.helpdeskHours} label="Monday to Friday, 8am or 9am to 5pm" />
                <br />
                Emergencies are answered at any hour.
              </p>
            </div>
            <div className="card">
              <h3>Not for repairs</h3>
              <p className="mb-0">
                <strong>Please do not use the contact form on this website to report a repair.</strong> It does not reach the repairs team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
