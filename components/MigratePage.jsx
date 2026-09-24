import PageHero from './PageHero';
import Tbc from './Tbc';

// Placeholder for pages that exist on the current site but are not covered by the brief.
// Their content needs to be copied across from the current CMS.
export default function MigratePage({ title, crumbs, currentUrl, children }) {
  return (
    <>
      <PageHero title={title} crumbs={crumbs} />
      <section className="section">
        <div className="container container--narrow">
          {children}
          <Tbc block>
            Content to be migrated from the current page
            {currentUrl ? ` (${currentUrl})` : ''}. Not covered by the September 2026 brief.
          </Tbc>
        </div>
      </section>
    </>
  );
}
