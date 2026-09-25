#!/usr/bin/env bash
# Download each named competitor's own brand mark for the comparison table on
# /how-it-works.
#
# WHY THIS RUNS IN THE CODESPACE. Neither the build container nor the desktop bridge can
# download binaries - the proxy blocks them. The Codespace has ordinary internet access.
#
#   bash tools/fetch-competitor-logos.sh
#   node tools/link-competitor-logos.mjs
#
# WHY IT TRIES SEVERAL URLS PER COMPANY. Nobody has told us where these files live, and
# guessing a marketing asset path blind mostly 404s. What IS reliable is the icon
# conventions every commercial site follows: apple-touch-icon.png, favicon.svg and the
# 192px PWA icon all sit at predictable paths. We try those in order of quality and take
# the first that returns an image. The Google favicon service is the last resort.
#
# SAFE TO RUN REPEATEDLY, AND SAFE TO FAIL. Anything that does not download is reported
# and left unlinked, and the table renders that column's NAME instead. The logo never
# carries meaning on its own, so a failure costs polish and nothing else. That is
# deliberate: a comparison table that breaks because a competitor changed their icon path
# would be a silly way to lose a page.

set -u
cd "$(dirname "$0")/.." || exit 1
mkdir -p public/images/logos/competitors
ok=0; fail=0

# try <slug> <domain> <path> [path...]
# Takes the first path that returns something image-shaped and larger than 500 bytes,
# which filters out the HTML error pages some sites serve instead of a 404.
try() {
  slug="$1"; shift
  domain="$1"; shift
  dest=""
  for p in "$@"; do
    url="https://$domain$p"
    tmp="public/images/logos/competitors/.$slug.tmp"
    if curl -fsSL --max-time 20 "$url" -o "$tmp" 2>/dev/null; then
      size=$(wc -c < "$tmp" | tr -d ' ')
      kind=$(file -b --mime-type "$tmp" 2>/dev/null || echo unknown)
      case "$kind" in
        image/*)
          if [ "$size" -gt 500 ]; then
            ext="${p##*.}"
            dest="public/images/logos/competitors/$slug.$ext"
            mv "$tmp" "$dest"
            ok=$((ok+1)); echo "  ok   $slug  <- $url  ($kind, ${size}b)"
            return 0
          fi
          ;;
      esac
    fi
    rm -f "$tmp"
  done

  # Last resort: the favicon service, which resolves for any domain and returns PNG.
  tmp="public/images/logos/competitors/.$slug.tmp"
  if curl -fsSL --max-time 20 "https://www.google.com/s2/favicons?sz=128&domain=$domain" -o "$tmp" 2>/dev/null; then
    size=$(wc -c < "$tmp" | tr -d ' ')
    if [ "$size" -gt 500 ]; then
      mv "$tmp" "public/images/logos/competitors/$slug.png"
      ok=$((ok+1)); echo "  ok   $slug  <- favicon service (${size}b)"
      return 0
    fi
  fi
  rm -f "$tmp"
  fail=$((fail+1)); echo "  FAIL $slug  - column will show the name only"
  return 0
}

echo "Competitor marks for the comparison table"
try plentific   www.plentific.com  /apple-touch-icon.png /favicon.svg /android-chrome-192x192.png /favicon-192x192.png
try askporter   www.askporter.com  /apple-touch-icon.png /favicon.svg /android-chrome-192x192.png /favicon-192x192.png
try fixflo      www.fixflo.com     /apple-touch-icon.png /favicon.svg /android-chrome-192x192.png /favicon-192x192.png
try checkatrade www.checkatrade.com /apple-touch-icon.png /favicon.svg /android-chrome-192x192.png /favicon-192x192.png
try homeserve   www.homeserve.com  /apple-touch-icon.png /favicon.svg /android-chrome-192x192.png /favicon-192x192.png

echo
echo "Downloaded $ok, failed $fail."
echo
echo "These are each company's own published brand mark, used to identify them in an"
echo "honest capability comparison. Nothing is altered beyond uniform scaling, and every"
echo "column shows the company NAME as well, so no logo is doing work on its own."
echo
echo "Next: node tools/link-competitor-logos.mjs"
