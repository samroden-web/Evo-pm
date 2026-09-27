// Guard against a checker passing because the stylesheet never arrived.
//
// WHY THIS EXISTS. 27 September. Two `next start` processes were alive on port 3999 at once.
// The one answering requests was serving HTML from an older build, whose <link> pointed at a
// CSS hash that no longer existed in .next/static - so every page loaded with the 89KB
// stylesheet MISSING and only a 2KB fragment applied.
//
// What that did to the checks is the point. check:mobile reported 175 failures on 27 pages,
// including the homepage, because unstyled images render at their intrinsic width - findings
// that looked exactly like a real site-wide regression and would have cost an afternoon.
// check:photos reported the opposite: a clean pass, because with no `object-fit: cover` rule
// there is nothing to crop. A green result from a page with no stylesheet is worse than a
// red one. It is the same class of fault as the contrast checker reporting 1.00:1, or
// `img.complete` being true for an image that had not started loading: the tool answered
// confidently about something it had not actually measured.
//
// THE CHECK. Load one page and confirm globals.css has taken effect. It deliberately does
// NOT assert a pixel number: the first version of this file expected .container to be 1160px
// wide, the token is actually 1200px, and a guard that fails when a design token changes is a
// guard that gets deleted. What it asserts instead is structural and cannot drift:
//
//   - `--container` is defined on :root. That custom property exists nowhere but globals.css,
//     so if it has a value the stylesheet parsed and applied.
//   - `.container` has a max-width at all. That catches a stylesheet that loaded but was
//     truncated or emptied.
//
// If either fails the run is aborted rather than reported.

// A SECOND, STRONGER GUARD, added later the same day after the stylesheet guard let a stale
// server through.
//
// The Codespace deploy failed twice with a byte-identical error - a missing image that had
// demonstrably been copied into place before the build. The cause was the same stale server,
// with one difference that made it invisible: `kill $SRV` in the deploy block killed the `npx`
// wrapper but left its `next-server` CHILD bound to the port. The next run's `next start`
// could not bind, said so only in a log nobody reads, and the checkers cheerfully tested the
// PREVIOUS build - which predated the image. The stylesheet guard passed because both builds
// had the same CSS, so it had nothing to notice.
//
// Checking a symptom (is the CSS there?) will always be one step behind. This checks identity:
// Next.js mints a fresh BUILD_ID on every build and stamps it into the asset paths of every
// page it serves. If the served page does not carry the BUILD_ID sitting in .next on disk,
// the server is not this build and nothing it says means anything.
export async function assertServingThisBuild(base) {
  const { readFile } = await import('node:fs/promises');
  let id;
  try {
    id = (await readFile('.next/BUILD_ID', 'utf8')).trim();
  } catch {
    return; // Run from somewhere without a build beside it; the other guards still apply.
  }
  if (!id) return;

  const html = await (await fetch(`${base}/`)).text();
  if (html.includes(id)) return;

  const served = (html.match(/\/_next\/static\/([A-Za-z0-9_-]{8,})\//) || [, '(none found)'])[1];
  throw new Error(
    [
      `THE SERVER AT ${base} IS NOT SERVING THIS BUILD.`,
      `  build on disk : ${id}`,
      `  build served  : ${served}`,
      '',
      'This run has been ABORTED. Every result it produced would describe an older build,',
      'which is how the same deploy failed twice on an image that was already in place.',
      '',
      'The cause is almost always a server from an earlier run still holding the port:',
      '`kill` on the `npx next start` wrapper does NOT stop its next-server child, so the',
      'new server silently fails to bind and the checks test the old one.',
      '',
      'Free the port precisely, by port and not by process name:',
      '  fuser -k <port>/tcp        (or:  lsof -ti:<port> | xargs -r kill -9 )',
      'then start one server and re-run.',
    ].join('\n')
  );
}

export async function assertStylesLoaded(page, base) {
  await page.goto(`${base}/`, { waitUntil: 'load' });
  const found = await page.evaluate(() => {
    const el = document.querySelector('.container');
    if (!el) return { ok: false, why: 'no .container element on the homepage' };
    return {
      ok: true,
      maxWidth: getComputedStyle(el).maxWidth,
      token: getComputedStyle(document.documentElement).getPropertyValue('--container').trim(),
    };
  });

  if (!found.ok) throw new Error(`Stylesheet check failed: ${found.why}`);
  if (!found.token || found.maxWidth === 'none') {
    const missing = await page.evaluate(() =>
      [...document.querySelectorAll('link[rel=stylesheet]')].map((l) => l.href.split('/').pop())
    );
    throw new Error(
      [
        `THE STYLESHEET IS NOT IN FORCE at ${base}. --container resolves to "${found.token || '(nothing)'}" and .container max-width is ${found.maxWidth}.`,
        `Stylesheets the page asked for: ${missing.join(', ') || 'none'}`,
        '',
        'This run has been ABORTED rather than reported, because results from an unstyled',
        'page are meaningless in both directions - overflow checks fail everywhere and crop',
        'checks pass everywhere.',
        '',
        'Almost always the cause is a stale server: a `next start` from an earlier build is',
        'still holding the port, so the HTML it serves points at a CSS hash that this build',
        'no longer has. Check with:  ps -eo pid,cmd | grep next-server',
        'Kill every one of them, rebuild, start one, and re-run.',
      ].join('\n')
    );
  }
}
