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

if curl -fsSL "https://evo-pm.com/media/3wlb5pnf/evo_steve_n.jpg" -o "public/images/team/steve-norris.jpg" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/3wlb5pnf/evo_steve_n.jpg"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/ud3b0bcx/sgr-bio-pic.png" -o "public/images/team/steven-rae.png" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/ud3b0bcx/sgr-bio-pic.png"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/e42igqme/evo_mark_i.jpg" -o "public/images/team/mark-iandoli.jpg" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/e42igqme/evo_mark_i.jpg"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/qz2a5qtu/evo_craig.jpg" -o "public/images/team/craig-calder.jpg" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/qz2a5qtu/evo_craig.jpg"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/z1pd3qzq/kate-davies-pic.jpg" -o "public/images/team/kate-davies.jpg" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/z1pd3qzq/kate-davies-pic.jpg"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/y22j5cbq/tim-marchant.png" -o "public/images/team/tim-marchant.png" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/y22j5cbq/tim-marchant.png"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/0fxajkas/evo_ben.jpg" -o "public/images/team/ben-blomerley.jpg" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/0fxajkas/evo_ben.jpg"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/42dhtvwl/evo_louis-botes-managing-engineer.jpg" -o "public/images/team/louis-botes.jpg" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/42dhtvwl/evo_louis-botes-managing-engineer.jpg"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/hdbb0jkc/warren.jpg" -o "public/images/team/warren-visser.jpg" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/hdbb0jkc/warren.jpg"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/rkzhd3jh/neil-webb.jfif" -o "public/images/team/neil-webb.jpg" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/rkzhd3jh/neil-webb.jfif"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/ofgfkc5v/rossathornitthisitthikul.jpg" -o "public/images/team/rossathorn-itthisitthikul.jpg" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/ofgfkc5v/rossathornitthisitthikul.jpg"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/yxjgd4gc/yvonne-mason.jpeg" -o "public/images/team/yvonne-mason.jpg" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/yxjgd4gc/yvonne-mason.jpeg"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/5seixcwe/evo_tananes-niyamosoth-senior-engineer.jpg" -o "public/images/team/tananes-niyamosoth.jpg" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/5seixcwe/evo_tananes-niyamosoth-senior-engineer.jpg"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/al1hwdwe/kelly-kunaka.jpg" -o "public/images/team/kelly-kunaka.jpg" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/al1hwdwe/kelly-kunaka.jpg"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/10opsv0v/suchada-kaewyoun.jpg" -o "public/images/team/suchada-kaewyoun.jpg" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/10opsv0v/suchada-kaewyoun.jpg"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/qq5d2i5q/jesse.png" -o "public/images/team/jessete-ubaldo.png" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/qq5d2i5q/jesse.png"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/kgadmfpp/kerrie-donohue.jpg" -o "public/images/team/kerrie-donohue.jpg" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/kgadmfpp/kerrie-donohue.jpg"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/34klfed4/georgina-read-pic.jpg" -o "public/images/team/georgina-read.jpg" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/34klfed4/georgina-read-pic.jpg"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/t1vb5wf4/screenshot-2026-04-23-at-165804.png" -o "public/images/team/debbie-mountney.png" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/t1vb5wf4/screenshot-2026-04-23-at-165804.png"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/qzglaxfo/evo_emilymountney.jpg" -o "public/images/team/emily-mountney.jpg" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/qzglaxfo/evo_emilymountney.jpg"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/ryzlm0sj/emily-king.jpg" -o "public/images/team/emily-king.jpg" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/ryzlm0sj/emily-king.jpg"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/43jmnvl0/talia-holmes-small.jpg" -o "public/images/team/talia-holmes.jpg" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/43jmnvl0/talia-holmes-small.jpg"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/rw4fjfps/sian-moxom-small.jpg" -o "public/images/team/sian-moxom.jpg" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/rw4fjfps/sian-moxom-small.jpg"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/4jecc54c/marianna-gomez.jpg" -o "public/images/team/marianna-gomez.jpg" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/4jecc54c/marianna-gomez.jpg"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/d44n4rno/rebecca-hawkes.jpg" -o "public/images/team/rebecca-hawkes.jpg" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/d44n4rno/rebecca-hawkes.jpg"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/kwffcnyn/danielle-goldsbrough.jpg" -o "public/images/team/danielle-goldsbrough.jpg" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/kwffcnyn/danielle-goldsbrough.jpg"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/2bcpqmch/54e8d307-e7aa-4342-984b-eacf9ec80c23.jpg" -o "public/images/team/maisie-bradley.jpg" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/2bcpqmch/54e8d307-e7aa-4342-984b-eacf9ec80c23.jpg"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/g2khdox5/sam-green.jpg" -o "public/images/team/sam-green.jpg" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/g2khdox5/sam-green.jpg"; fail=$((fail+1)); fi
if curl -fsSL "https://evo-pm.com/media/0anik4vc/img_1426-1.jpeg" -o "public/images/team/samantha-lunn.jpg" ; then ok=$((ok+1)); else echo "FAILED: https://evo-pm.com/media/0anik4vc/img_1426-1.jpeg"; fail=$((fail+1)); fi

echo
echo "Downloaded $ok, failed $fail."
echo "Now: git add public/images/team && git commit -m \"Team photographs\" && git push"

# Point the data file at whatever actually downloaded.
if command -v node >/dev/null 2>&1; then
  node tools/link-team-photos.mjs
else
  echo "Node not found - run 'node tools/link-team-photos.mjs' yourself before building."
fi
