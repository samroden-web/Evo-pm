'use client';

import { useState } from 'react';
import Link from 'next/link';

// Mailing list sign-up (replaces the old Mailchimp page at /download-sign-up).
// To connect it, copy the form "action" URL from your Mailchimp embedded form code into
// NEXT_PUBLIC_MAILCHIMP_ACTION in Vercel > Settings > Environment Variables, then redeploy.
// Field names below (EMAIL, FNAME, LNAME) are Mailchimp's defaults. If your audience uses
// GDPR marketing permissions, replace MARKETING_EMAIL with the gdpr[...] name from the embed code.
const ACTION = process.env.NEXT_PUBLIC_MAILCHIMP_ACTION;

export default function MailingListForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="form-status" role="status">
        <p className="mb-0">
          <strong>Thank you.</strong> The sign-up form is not connected to Mailchimp yet, so nothing has been sent.
        </p>
      </div>
    );
  }

  return (
    <form
      className="form"
      action={ACTION || undefined}
      method="post"
      target={ACTION ? '_blank' : undefined}
      onSubmit={(e) => {
        if (!ACTION) {
          e.preventDefault();
          setDone(true);
        }
      }}
    >
      <p className="muted mb-0" style={{ fontSize: '0.9rem' }}>
        <span className="req" style={{ color: 'var(--orange-ink)' }}>*</span> indicates required
      </p>
      <div className="field">
        <label htmlFor="ml-email">
          Email address <span className="req">*</span>
        </label>
        <input className="input" id="ml-email" name="EMAIL" type="email" autoComplete="email" required />
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="ml-first">First name</label>
          <input className="input" id="ml-first" name="FNAME" autoComplete="given-name" />
        </div>
        <div className="field">
          <label htmlFor="ml-last">Last name</label>
          <input className="input" id="ml-last" name="LNAME" autoComplete="family-name" />
        </div>
      </div>
      <div className="field">
        <fieldset>
          <legend>Marketing permissions</legend>
          <p className="hint">Please select all the ways you would like to hear from us:</p>
          <label className="choice" style={{ maxWidth: 240 }}>
            <input type="checkbox" name="MARKETING_EMAIL" value="Y" />
            Email
          </label>
        </fieldset>
      </div>
      <p className="muted" style={{ fontSize: '0.88rem' }}>
        You can unsubscribe at any time by clicking the link in the footer of our emails. For information about our privacy
        practices, see our <Link href="/privacy-policy">privacy policy</Link>.
      </p>
      <p className="muted" style={{ fontSize: '0.88rem' }}>
        We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be
        transferred to Mailchimp for processing.{' '}
        <a href="https://mailchimp.com/legal/terms" target="_blank" rel="noopener noreferrer">
          Learn more about Mailchimp&apos;s privacy practices
        </a>
        .
      </p>
      <div>
        <button type="submit" className="btn btn-primary">
          Subscribe and get the guide
        </button>
      </div>
    </form>
  );
}
