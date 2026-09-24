import { SHOW_TBC } from '@/data/site';

// Marks something EVO still has to confirm (brief section 9).
// Visible while SHOW_TBC is true (preview), hidden when it is false (launch).
export default function Tbc({ children, block = false, className = '' }) {
  if (!SHOW_TBC) return null;
  if (block) {
    return (
      <div className={`tbc-block ${className}`} role="note">
        <span className="tbc">To be confirmed</span>
        <span>{children}</span>
      </div>
    );
  }
  return (
    <span className={`tbc ${className}`} role="note">
      {children}
    </span>
  );
}

// Renders a value if it is confirmed, otherwise a TBC tag describing what is missing.
export function TbcValue({ value, label, render }) {
  if (value) return render ? render(value) : value;
  return <Tbc>{label}</Tbc>;
}
