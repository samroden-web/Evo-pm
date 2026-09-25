import PageHero from '@/components/PageHero';
import Blocks from '@/components/Blocks';
import { privacyPolicy } from '@/data/legal';

export const metadata = {
  title: 'Privacy policy | EVO',
  description:
    'How EVO collects, uses and stores personal data for residents, clients and contractors, and the rights you have over it.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true },
};

// Migrated 25 September 2026. This page had been standing on production as a yellow
// "content to be migrated" box, which for a company selling compliance is the worst
// possible page to leave empty: a privacy notice is a UK GDPR requirement for a site
// with a contact form, a newsletter sign-up and a resident helpdesk, and it is one of
// the first things a housing association's procurement team opens.
//
// See data/legal.js for the three classes of change made to the live wording.

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        lead="How EVO collects, uses and stores personal data, and the rights you have over it."
        crumbs={[{ label: 'Privacy policy' }]}
      />
      <section className="section">
        <div className="container container--narrow">
          <article className="prose">
            {privacyPolicy.updated && (
              <p className="note mb-3">
                Last updated {privacyPolicy.updated}. Evo Digital Technologies Limited is the data controller.
                Registered with the Information Commissioner&rsquo;s Office under number ZB172988.
              </p>
            )}
            <Blocks body={privacyPolicy.body} />
          </article>
        </div>
      </section>
    </>
  );
}
