// Outputs structured data (brief section 7).
export default function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function faqJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      // An answer is either a single string (`a`) or a block array (`body`). Blocks are
      // flattened to plain sentences: Google wants the answer text, not our markup keys.
      acceptedAnswer: {
        '@type': 'Answer',
        text: [f.a, ...(f.body || []).map((b) => b.replace(/^(#{2,3} |- |\d+\.\s)/, '')), ...(f.list || [])]
          .filter(Boolean)
          .join(' '),
      },
    })),
  };
}
