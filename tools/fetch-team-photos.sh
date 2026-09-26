#!/usr/bin/env bash
# Download the team photographs from the current EVO site into this repo.
#
# Why this exists: the build environment these files were prepared in cannot fetch
# binary assets, so the photographs could not be pulled down automatically. Run this
# once from anywhere with internet access — a GitHub Codespace is ideal — and the
# files land in the right place with the right names. Then commit them.
#
#   bash tools/fetch-team-photos.sh

set -u
cd "$(dirname "$0")/.." || exit 1
mkdir -p public/images/team
ok=0; fail=0

# Same rule as tools/fetch-client-logos.sh: these files are committed, and a failed fetch
# must never damage the copy that is already there. curl -o truncates its destination
# before the transfer starts, so a download that dies halfway leaves a broken file behind.
safeget() { # safeget <url> <destination> <label>
  local tmp
  tmp="$(mktemp)"
  if curl -fsSL --max-time 30 "$1" -o "$tmp" && [ -s "$tmp" ]; then
    mv -f "$tmp" "$2"; ok=$((ok+1))
  else
    rm -f "$tmp"; fail=$((fail+1))
    if [ -s "$2" ]; then echo "FAILED: $3 (kept the committed copy)"; else echo "FAILED: $3"; fi
  fi
}


safeget "https://evo-pm.com/media/3wlb5pnf/evo_steve_n.jpg" "public/images/team/steve-norris.jpg" "https://evo-pm.com/media/3wlb5pnf/evo_steve_n.jpg"
safeget "https://evo-pm.com/media/ud3b0bcx/sgr-bio-pic.png" "public/images/team/steven-rae.png" "https://evo-pm.com/media/ud3b0bcx/sgr-bio-pic.png"
safeget "https://evo-pm.com/media/e42igqme/evo_mark_i.jpg" "public/images/team/mark-iandoli.jpg" "https://evo-pm.com/media/e42igqme/evo_mark_i.jpg"
safeget "https://evo-pm.com/media/qz2a5qtu/evo_craig.jpg" "public/images/team/craig-calder.jpg" "https://evo-pm.com/media/qz2a5qtu/evo_craig.jpg"
safeget "https://evo-pm.com/media/z1pd3qzq/kate-davies-pic.jpg" "public/images/team/kate-davies.jpg" "https://evo-pm.com/media/z1pd3qzq/kate-davies-pic.jpg"
safeget "https://evo-pm.com/media/y22j5cbq/tim-marchant.png" "public/images/team/tim-marchant.png" "https://evo-pm.com/media/y22j5cbq/tim-marchant.png"
safeget "https://evo-pm.com/media/0fxajkas/evo_ben.jpg" "public/images/team/ben-blomerley.jpg" "https://evo-pm.com/media/0fxajkas/evo_ben.jpg"
safeget "https://evo-pm.com/media/42dhtvwl/evo_louis-botes-managing-engineer.jpg" "public/images/team/louis-botes.jpg" "https://evo-pm.com/media/42dhtvwl/evo_louis-botes-managing-engineer.jpg"
safeget "https://evo-pm.com/media/hdbb0jkc/warren.jpg" "public/images/team/warren-visser.jpg" "https://evo-pm.com/media/hdbb0jkc/warren.jpg"
safeget "https://evo-pm.com/media/rkzhd3jh/neil-webb.jfif" "public/images/team/neil-webb.jpg" "https://evo-pm.com/media/rkzhd3jh/neil-webb.jfif"
safeget "https://evo-pm.com/media/ofgfkc5v/rossathornitthisitthikul.jpg" "public/images/team/rossathorn-itthisitthikul.jpg" "https://evo-pm.com/media/ofgfkc5v/rossathornitthisitthikul.jpg"
safeget "https://evo-pm.com/media/yxjgd4gc/yvonne-mason.jpeg" "public/images/team/yvonne-mason.jpg" "https://evo-pm.com/media/yxjgd4gc/yvonne-mason.jpeg"
safeget "https://evo-pm.com/media/5seixcwe/evo_tananes-niyamosoth-senior-engineer.jpg" "public/images/team/tananes-niyamosoth.jpg" "https://evo-pm.com/media/5seixcwe/evo_tananes-niyamosoth-senior-engineer.jpg"
safeget "https://evo-pm.com/media/al1hwdwe/kelly-kunaka.jpg" "public/images/team/kelly-kunaka.jpg" "https://evo-pm.com/media/al1hwdwe/kelly-kunaka.jpg"
safeget "https://evo-pm.com/media/10opsv0v/suchada-kaewyoun.jpg" "public/images/team/suchada-kaewyoun.jpg" "https://evo-pm.com/media/10opsv0v/suchada-kaewyoun.jpg"
safeget "https://evo-pm.com/media/qq5d2i5q/jesse.png" "public/images/team/jessete-ubaldo.png" "https://evo-pm.com/media/qq5d2i5q/jesse.png"
safeget "https://evo-pm.com/media/kgadmfpp/kerrie-donohue.jpg" "public/images/team/kerrie-donohue.jpg" "https://evo-pm.com/media/kgadmfpp/kerrie-donohue.jpg"
safeget "https://evo-pm.com/media/34klfed4/georgina-read-pic.jpg" "public/images/team/georgina-read.jpg" "https://evo-pm.com/media/34klfed4/georgina-read-pic.jpg"
safeget "https://evo-pm.com/media/t1vb5wf4/screenshot-2026-04-23-at-165804.png" "public/images/team/debbie-mountney.png" "https://evo-pm.com/media/t1vb5wf4/screenshot-2026-04-23-at-165804.png"
safeget "https://evo-pm.com/media/qzglaxfo/evo_emilymountney.jpg" "public/images/team/emily-mountney.jpg" "https://evo-pm.com/media/qzglaxfo/evo_emilymountney.jpg"
safeget "https://evo-pm.com/media/ryzlm0sj/emily-king.jpg" "public/images/team/emily-king.jpg" "https://evo-pm.com/media/ryzlm0sj/emily-king.jpg"
safeget "https://evo-pm.com/media/43jmnvl0/talia-holmes-small.jpg" "public/images/team/talia-holmes.jpg" "https://evo-pm.com/media/43jmnvl0/talia-holmes-small.jpg"
safeget "https://evo-pm.com/media/rw4fjfps/sian-moxom-small.jpg" "public/images/team/sian-moxom.jpg" "https://evo-pm.com/media/rw4fjfps/sian-moxom-small.jpg"
safeget "https://evo-pm.com/media/4jecc54c/marianna-gomez.jpg" "public/images/team/marianna-gomez.jpg" "https://evo-pm.com/media/4jecc54c/marianna-gomez.jpg"
safeget "https://evo-pm.com/media/d44n4rno/rebecca-hawkes.jpg" "public/images/team/rebecca-hawkes.jpg" "https://evo-pm.com/media/d44n4rno/rebecca-hawkes.jpg"
safeget "https://evo-pm.com/media/kwffcnyn/danielle-goldsbrough.jpg" "public/images/team/danielle-goldsbrough.jpg" "https://evo-pm.com/media/kwffcnyn/danielle-goldsbrough.jpg"
safeget "https://evo-pm.com/media/2bcpqmch/54e8d307-e7aa-4342-984b-eacf9ec80c23.jpg" "public/images/team/maisie-bradley.jpg" "https://evo-pm.com/media/2bcpqmch/54e8d307-e7aa-4342-984b-eacf9ec80c23.jpg"
safeget "https://evo-pm.com/media/g2khdox5/sam-green.jpg" "public/images/team/sam-green.jpg" "https://evo-pm.com/media/g2khdox5/sam-green.jpg"
safeget "https://evo-pm.com/media/0anik4vc/img_1426-1.jpeg" "public/images/team/samantha-lunn.jpg" "https://evo-pm.com/media/0anik4vc/img_1426-1.jpeg"

echo
echo "Downloaded $ok, failed $fail."
echo "Now: git add public/images/team && git commit -m \"Team photographs\" && git push"

# Point the data file at whatever actually downloaded.
if command -v node >/dev/null 2>&1; then
  node tools/link-team-photos.mjs
else
  echo "Node not found - run 'node tools/link-team-photos.mjs' yourself before building."
fi
