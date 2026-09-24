export default function SectionHead({ eyebrow, title, lead, center = false, as: H = 'h2', children }) {
  return (
    <div className={`section-head ${center ? 'section-head--center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <H>{title}</H>}
      {lead && <p className="lead">{lead}</p>}
      {children}
    </div>
  );
}
