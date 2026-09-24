'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { banner } from '@/data/site';

// Brief 6.12: site-wide banner. The wording changes automatically on 30 November 2026.
export default function Banner() {
  const [after, setAfter] = useState(false);
  useEffect(() => {
    setAfter(Date.now() >= new Date(banner.switchDate).getTime());
  }, []);
  const text = after ? banner.after.text : banner.before.text;
  return (
    <div className="banner">
      <Link href={banner.href}>
        <span>{text}</span>
      </Link>
    </div>
  );
}
