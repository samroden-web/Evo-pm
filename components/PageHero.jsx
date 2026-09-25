import Link from 'next/link';
import Image from 'next/image';

// Every interior page hero. `image` turns it into the same two-column shape as the
// homepage hero: copy on the left, a photograph on the right, with an optional caption
// chip over the corner. Without an image it stays single-column, which is deliberate
// rather than an empty half-screen.
export default function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  children,
  navy = false,
  image,
  imageAlt,
  imageWidth = 1400,
  imageHeight = 787,
  caption,
  captionLabel,
  priority = false,
}) {
  const inner = (
    <>
      {crumbs && (
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.href || c.label}>
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
      )}
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {lead && <p className="lead">{lead}</p>}
      {children}
    </>
  );

  if (!image) {
    return (
      <section className={`page-hero ${navy ? 'page-hero--navy' : ''}`}>
        <div className="container">{inner}</div>
      </section>
    );
  }

  return (
    <section className={`page-hero page-hero--split ${navy ? 'page-hero--navy' : ''}`}>
      <div className="container page-hero__grid">
        <div className="page-hero__copy">{inner}</div>
        <div className="page-hero__visual">
          <figure className="ev2-heroimg">
            <Image
              src={image}
              alt={imageAlt || ''}
              width={imageWidth}
              height={imageHeight}
              priority={priority}
              sizes="(min-width: 960px) 44vw, 92vw"
            />
            {caption && (
              <figcaption>
                {captionLabel && <span>{captionLabel}</span>}
                <strong>{caption}</strong>
              </figcaption>
            )}
          </figure>
        </div>
      </div>
    </section>
  );
}
