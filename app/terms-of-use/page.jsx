import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Blocks from '@/components/Blocks';
import Tbc from '@/components/Tbc';
import { termsOfUse } from '@/data/legal';

export const metadata = {
  title: 'Terms of use | EVO',
  description:
    'The terms on which you may use the EVO website and platform: access, intellectual property, liability, uploading material and applicable law.',
  alternates: { canonical: '/terms-of-use' },
  robots: { index: true, follow: true },
};

// Migrated 25 September 2026, replacing a "content to be migrated" placeholder.
//
// These are website terms only. They are not the service contract: the repairs service,
// the Living App, the Services App and the 24/7 emergency response each have their own
// terms, which live on /faqs/terms-conditions.

export default function TermsOfUsePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of use"
        lead="The terms on which you may use the EVO website and platform."
        crumbs={[{ label: 'Terms of use' }]}
      />
      <section className="section">
        <div className="container container--narrow">
          <article className="prose">
            <p className="note mb-3">
              These are website terms. Service terms &mdash; the repairs service, the Living App, the Services App and
              24/7 emergency response &mdash; are separate.{' '}
              <Link href="/faqs/terms-conditions">See service terms and conditions</Link>. How we handle personal data
              is set out in our <Link href="/privacy-policy">privacy policy</Link>.
            </p>
            <Blocks body={termsOfUse.body} />
            <Tbc block>
              These terms carry no &ldquo;last updated&rdquo; date on the current site and one should not be invented.
              Confirm the date they were last reviewed and it will be shown here, as it is on the privacy policy.
            </Tbc>
          </article>
        </div>
      </section>
    </>
  );
}
