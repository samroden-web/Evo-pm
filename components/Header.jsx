'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { mainNav, utilityNav, cta } from '@/data/site';
import { CaretIcon, MenuIcon } from './Icons';

function isActive(pathname, href) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}

function groupChildren(children) {
  // Adds a small group heading before the first child of each group
  // ("Private landlords and agents" under Who we help).
  let lastGroup = null;
  const out = [];
  children.forEach((c) => {
    if (c.group && c.group !== lastGroup) out.push({ heading: c.group });
    lastGroup = c.group || null;
    out.push(c);
  });
  return out;
}

export default function Header() {
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);

  // Closing the menu on a route change is the BACKSTOP, not the mechanism. Sam, 28 September:
  // "on the phone, when i clicked compliance, it didnt open the page straight away (i had to
  // click close)". The menu is a tall in-flow panel, so while it is open the page sits below it:
  // the navigation had happened, but the panel was still covering the screen until this effect
  // ran, which reads as a dead link.
  // Worse, and definitely broken: tapping the link for the page you are ALREADY on never changes
  // pathname, so this effect never fires and the menu stays open with no way out but the X.
  // Both are fixed by closing on the tap itself - see closeMenu below. This stays as a second
  // line of defence for navigations that start somewhere else.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo" aria-label="EVO home">
          <img src="/images/brand/evo-logo-horizontal.svg" alt="EVO" width="75" height="34" />
        </Link>

        <nav className="main-nav" aria-label="Main">
          <ul>
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isActive(pathname, item.href) ? 'page' : undefined}>
                  {item.label}
                  {item.children && <CaretIcon />}
                </Link>
                {item.children && (
                  <ul className="submenu">
                    {groupChildren(item.children).map((c, i) =>
                      c.heading ? (
                        <li key={`h-${i}`} className="submenu-group" aria-hidden="true">
                          {c.heading}
                        </li>
                      ) : (
                        <li key={c.href}>
                          <Link href={c.href} aria-current={pathname === c.href ? 'page' : undefined}>
                            {c.label}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Site map: Residents, Trades and Client login sit off the buying nav, top
            right. Client login goes out to app.evo-pm.com. */}
        <div className="ev3-util">
          {utilityNav.map((u) =>
            u.external ? (
              <a key={u.href} href={u.href} className="ev3-util-login" rel="noopener">
                {u.label}
              </a>
            ) : (
              <Link key={u.href} href={u.href} aria-current={isActive(pathname, u.href) ? 'page' : undefined}>
                {u.label}
              </Link>
            )
          )}
        </div>

        <Link href={cta.review.href} className="btn btn-primary btn-small header-cta">
          {cta.review.label}
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <MenuIcon open={open} />
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Main">
          <ul>
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActive(pathname, item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul>
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} onClick={closeMenu}>
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="ev3-util-mobile">
            {utilityNav.map((u) =>
              u.external ? (
                <a key={u.href} href={u.href} rel="noopener" onClick={closeMenu}>
                  {u.label}
                </a>
              ) : (
                <Link key={u.href} href={u.href} onClick={closeMenu}>
                  {u.label}
                </Link>
              )
            )}
          </div>
          <Link href={cta.review.href} className="btn btn-primary" onClick={closeMenu}>
            {cta.review.label}
          </Link>
        </nav>
      )}
    </header>
  );
}
