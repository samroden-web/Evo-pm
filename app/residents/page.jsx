import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ClosingCta from '@/components/ClosingCta';
import SectionHead from '@/components/SectionHead';
import { IconBadge } from '@/components/Icon';
import AppBadges from '@/components/AppBadges';
import Tbc, { TbcValue } from '@/components/Tbc';
import Photo from '@/components/Photo';
import Quote from '@/components/Quote';
import { contact, apps } from '@/data/site';
import { testimonials } from '@/data/testimonials';

export const metadata = {
  title: 'Residents: report a repair | EVO',
  description:
    'Report a repair or an emergency in the EVO Living App, find step-by-step guides and answers to common questions.',
  alternates: { canonical: '/residents' },
};

// This page is written plainer and set larger than the rest of the site: shorter
// sentences, no jargon, and nothing about plans, thresholds or compliance, because
// none of that is a resident's problem.

// Sam, 27 September: "are we missing UX for the app images? ... the UX and the steps could be
// combined better". They were fighting each other - four written steps, and then a separate row
// of two screenshots further down, so you read the instruction and then went hunting for the
// picture of it. Each step now carries its own screen, which is how a person actually follows
// instructions: word and picture together.
// Three of the four have a real screenshot. The fourth does not, and an invented screen would be
// worse than none, so it runs as a step with no picture rather than borrowing one that shows
// something else.
const STEPS = [
  {
    title: 'Tell us what is wrong',
    body: 'Open the app, tap "Report a Problem", choose what it is and add a photo. You get a reference number straight away.',
    shot: '/images/app/living-app-report-a-problem.webp',
    alt: 'Reporting a problem in the EVO Living App, choosing from plumbing, heating, drainage, electrics and other categories',
  },
  {
    title: 'Pick a time that suits you',
    body: 'Choose from the appointment slots offered, rather than waiting in all day. You can change it later if something comes up.',
    shot: '/images/app/living-app-appointments.webp',
    alt: 'The appointments screen in the EVO Living App, showing the times available to choose from',
  },
  {
    title: 'See who is coming',
    body: 'You will know the name of the person attending and be able to follow them on the way, so you are not guessing.',
    shot: '/images/app/living-app-home.webp',
    alt: 'The EVO Living App home screen, showing the repair in progress alongside appointments and documents',
  },
  {
    title: 'Tell us how it went',
    body: 'Rate the job when it is finished. If it is not right, say so in the app and we will come back.',
    shot: null,
    alt: null,
  },
];

const HELP = [
  {
    icon: 'phoneApp',
    title: 'How to use the app',
    body: 'A step-by-step guide with pictures, from registering to reporting and tracking a repair.',
    href: '/how-to-guides/using-the-evo-living-app',
    link: 'Read the guide',
  },
  {
    icon: 'alert',
    title: 'How to report an emergency',
    body: 'What counts as an emergency, what to do first, and what happens once you have reported it.',
    href: '/how-to-guides/reporting-an-emergency',
    link: 'Read the guide',
  },
  {
    icon: 'droplet',
    title: 'Damp and mould',
    body: 'How to report it, what we check when we visit, and what we do about it. Please report it early — it is easier to treat.',
    href: '/damp-and-mould',
    link: 'Damp and mould',
  },
  {
    icon: 'help',
    title: 'Questions',
    body: 'How long repairs take, what is and is not covered, appointments, access, and what to do if something goes wrong.',
    href: '/faqs/residents',
    link: 'Resident questions',
  },
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
        {/* Sam, 27 September: "I like the First time here? bit. would that be better right at the
            top, and also the 2 links to download the apps embedded into it?" and "Should we make
            the top box bright organse instead of blue?"
            Both, and together they fix an order problem. Registration was four sections down the
            page while "Get the app" was at the top - backwards, because you cannot use the app
            until you have registered. One box now: register, then download, in that order.
            ORANGE, WITH NAVY TEXT. White on EVO orange measures 2.94:1, which fails WCAG AA, and
            this is the page where legibility matters most - it is read by older residents, by
            people with low vision, and by anyone in the middle of something going wrong at home.
            Navy on orange is 5.11:1 and passes. The box is brighter than the navy one it
            replaces, and readable. */}
        <div className="ev2-getapp ev2-getapp--orange mt-3">
          <div className="ev2-getapp__text">
            <p className="eyebrow">First time here?</p>
            <h2>Register once, then report anything in about thirty seconds.</h2>
            <p>
              You only do this once. You will need your address and the name of your landlord or managing agent. If you
              would rather someone walked you through it, say so when you register and we will.
            </p>
            <div className="btn-row mt-2">
              <a href={apps.living.registration} className="btn btn-dark" target="_blank" rel="noopener noreferrer">
                Register for the app
              </a>
            </div>
          </div>
          <div className="ev2-getapp__apps">
            <p className="eyebrow mb-0">Then download it, free</p>
            <AppBadges app="living" />
          </div>
        </div>

        {/* Sam: "is the emergencies bit needed to be so big?" No. It was carrying a four-item
            list of what counts as an emergency, which is also the opening section of
            /how-to-guides/reporting-an-emergency - the same content twice, and the longer it ran
            the less likely it was to be read by somebody standing in water.
            What survives is the three things that matter when you are panicking: tap Emergency,
            the number if you have no phone signal for the app, and the two things to ring before
            you ring us. The list moves to the guide, which is now linked. */}
        <div className="ev2-emergency ev2-emergency--tight mt-3">
          <p className="eyebrow mb-0">Emergencies</p>
          <p className="ev2-emergency__lead">
            Tap <strong>Emergency</strong> when you report it. It goes straight through and is actioned immediately, day
            or night.{' '}
            <Link href="/how-to-guides/reporting-an-emergency" className="text-link">
              What counts as an emergency
            </Link>
          </p>
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
            <strong>Ring these first, not us.</strong> Smell of gas: National Gas Emergency Service{' '}
            <strong>0800 111 999</strong>. Fire: <strong>999</strong>. Report it in the app afterwards.
          </p>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Reporting a repair" title="Four steps, and no phone call." />
          <ol className="app-steps mt-3">
            {STEPS.map((st, i) => (
              <li className="app-step" key={st.title}>
                <div className="app-step__text">
                  <span className="num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3>{st.title}</h3>
                  <p className="mb-0">{st.body}</p>
                </div>
                {st.shot ? (
                  <div className="app-step__shot">
                    <img src={st.shot} alt={st.alt} width="420" height="884" loading="lazy" decoding="async" />
                  </div>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="app-steps__more">
            <Link href="/how-to-guides/using-the-evo-living-app" className="text-link">
              The full step-by-step guide, with pictures
            </Link>
          </p>
        </div>
      </section>

      {/* "First time here?" has moved to the orange box at the top of the page, where it belongs -
          you cannot use the app until you have registered. What was worth keeping from this
          section is the photograph and the promise that goes with it: somebody will sit with you
          and set it up. That is the part a nervous resident needs to see, so it stays, next to
          the quote from someone who has used it. */}
      <section className="section section--grey">
        <div className="container">
          <div className="ev3-split">
            <div>
              <p className="eyebrow">Not sure about apps?</p>
              <h2>Somebody will sit down and set it up with you.</h2>
              <p>
                Say so when you register and we will arrange it. Our team is on site most weeks, and helping people set
                the app up is part of the job, not a favour.
              </p>
              <div className="mt-3 mb-0">
                <Quote t={testimonials.residentApp} />
              </div>
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
                <IconBadge name={h.icon} />
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
              <IconBadge name="phone" />
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
              <IconBadge name="mail" />
              <h3>Email</h3>
              <p className="mb-0">
                <a href={`mailto:${contact.residentEmail}`}>{contact.residentEmail}</a>{' '}
                {!contact.residentEmailConfirmed && <Tbc>helpdesk@ or living@evo-pm.com</Tbc>}
              </p>
            </div>
            <div className="card">
              <IconBadge name="clock" />
              <h3>Helpdesk hours</h3>
              <p className="mb-0">
                <TbcValue value={contact.helpdeskHours} label="Monday to Friday, 8am or 9am to 5pm" />
                <br />
                Emergencies are answered at any hour.
              </p>
            </div>
            <div className="card">
              <IconBadge name="bell" />
              <h3>Not for repairs</h3>
              <p className="mb-0">
                <strong>Please do not use the contact form on this website to report a repair.</strong> It does not
                reach the repairs team.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
