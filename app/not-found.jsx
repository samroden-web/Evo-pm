import Link from 'next/link';

export const metadata = { title: 'Page not found | EVO' };

export default function NotFound() {
  return (
    <section className="section">
      <div className="container container--narrow">
        <p className="eyebrow">Page not found</p>
        <h1>We could not find that page.</h1>
        <p className="lead">It may have moved when we updated the site.</p>
        <div className="btn-row">
          <Link href="/" className="btn btn-primary">
            Go to the homepage
          </Link>
          <Link href="/residents" className="btn btn-secondary">
            Residents: report a repair
          </Link>
        </div>
      </div>
    </section>
  );
}
