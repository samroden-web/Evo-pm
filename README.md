# EVO website (evo-pm.com)

Next.js 15 (App Router), plain JavaScript and one global stylesheet. Built from the EVO Website Update Brief (September 2026).

## Deploy

1. Push this folder to a GitHub repo (the repo root should contain `package.json`).
2. In Vercel: **Add New > Project**, import the repo. Vercel detects Next.js. No settings to change.
3. Every push to `main` deploys. Other branches get preview URLs, which are handy for EVO to review.

Run locally (optional): `npm install` then `npm run dev`, and open http://localhost:3000.

## Before launch

- **TBC tags.** Anything EVO still has to confirm shows as a yellow "TBC" tag so it can be reviewed on a preview deploy. When everything is confirmed, set `SHOW_TBC = false` in `data/site.js`. Every tag then disappears. See `CHANGES-AND-TBC.md` for the full list.
- **HubSpot.** The contact form is laid out and pre-fills from the buttons and the plan explorer, but does not send yet. To connect it, add `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` and `NEXT_PUBLIC_HUBSPOT_FORM_ID` (and `NEXT_PUBLIC_HUBSPOT_REGION` if not `eu1`) in Vercel > Settings > Environment Variables, then redeploy. The HubSpot form should have hidden fields named `enquiry_type`, `organisation_type`, `plan` and `add_ons`.
- **Mailchimp.** The Renters Rights guide sign-up at `/renters-rights-guide` is ready but not connected. Copy the form `action` URL from Mailchimp's embedded form code into `NEXT_PUBLIC_MAILCHIMP_ACTION` in Vercel, then redeploy. See the note at the top of `components/MailingListForm.jsx`.
- **Domain.** Point evo-pm.com at Vercel (Vercel > Settings > Domains).

## Where to change things

| To change | Edit |
|---|---|
| Prices, plans, add-ons, plan scope, pricing FAQs | `data/plans.js` (the only place prices live) |
| Phone numbers, emails, helpdesk hours, nav, footer, awards, banner, headline figures | `data/site.js` |
| Testimonials and video testimonials | `data/testimonials.js` |
| Client, framework and accreditation logos | `data/logos.js` (drop files into `public/images/logos/`) |
| Insights articles | `data/insights.js` |
| FAQs | `data/faqs.js` |
| Resident guides and the process steps | `data/guides.js` |
| Colours, fonts, spacing | `app/globals.css` (tokens at the top) |

### Adding a video testimonial
Fill in every field for a slot in `videoTestimonials` in `data/testimonials.js` (Vimeo ID, name, title, organisation, pull quote, poster image path, transcript link). A slot appears on the homepage only when every field is filled.

### Adding a phone number
Set `salesPhone`, `residentPhone` and `sales.phone` in `data/site.js`.

## Structure

```
app/                 Pages (one folder per URL) and the root layout
  layout.jsx         Banner, header, footer, font, Organization structured data
  page.jsx           Homepage
  pricing/           Plan explorer page
  damp-and-mould/    ...and so on for every route
components/          Shared building blocks
data/                All content that changes (prices, contacts, testimonials, logos...)
public/images/       Photos, logos, app screens
public/downloads/    PDF downloads (guides and the damp and mould procedure)
tools/               Source for the damp and mould PDF
next.config.mjs      301 redirects for moved URLs
```

## Redirects (next.config.mjs)

| Old URL | New URL |
|---|---|
| /about/how-we-do-it | /how-it-works |
| /newsletters | /insights/newsletters |
| /faqs | /faqs/residents |
| /faqs/landlords, /faqs/property-managers | /faqs/landlords-and-property-managers |
| /download-sign-up | /renters-rights-guide |

`/how-to-guides` and `/faqs/residents` stay at the same URLs (they are linked from the app and the PDFs).

## Damp and mould PDF
`public/downloads/evo-damp-and-mould-procedure.pdf` is generated from `tools/damp-and-mould-pdf/source.html`. To change it, edit the HTML, open it in Chrome and print to PDF (A4, background graphics on, margins none).
