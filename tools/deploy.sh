#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Deploy a patch to the preview branch.
#
# WHY THIS FILE EXISTS. Every patch up to 50 was delivered as a long shell block
# pasted into the Codespace terminal. On patch 51 that finally bit: the paste
# broke up inside the here-doc, the shell ran fragments of it, and the terminal
# filled with nonsense. A 70-line paste containing a here-doc, a multi-line
# commit message and nested quotes has too many ways to arrive damaged.
#
# So the script now ships INSIDE the patch and the paste is one line:
#
#   cd /workspaces/Evo-pm && rm -rf /tmp/pd && unzip -q patch-NN-name.zip -d /tmp/pd && bash /tmp/pd/evo1-main/tools/deploy.sh
#
# It works out its own source directory, so it does not care what the zip is
# called or where it was unpacked.
# ---------------------------------------------------------------------------
REPO=/workspaces/Evo-pm
SRC="$(cd "$(dirname "$0")/.." && pwd)"

fail() { echo; echo "STOPPED: $1"; exit 1; }

[ -f "$SRC/package.json" ] || fail "no package.json in $SRC - the zip did not unpack as expected"
cd "$REPO" || fail "cannot cd to $REPO"

echo "Copying from $SRC"

# --delete, so files deleted in the patch really go. But NEVER the assets that
# exist only in this Codespace: they are fetched here, not carried in the zip.
# Patch 43 left these out and took all 29 team photos off production.
rsync -a --delete \
  --exclude '.git/' --exclude 'node_modules/' --exclude '.next/' --exclude '*.zip' \
  --exclude 'public/images/team/' \
  --exclude 'public/images/logos/clients/' \
  --exclude 'public/images/logos/competitors/' \
  --exclude 'public/images/insights/' \
  --exclude 'public/images/illustrations/' \
  "$SRC/" "$REPO/" || fail "rsync failed"

# The twelve drawings. The build container cannot fetch these: its proxy
# refuses evo-pm.com, so they are placeholders in the zip and real only here.
node tools/fetch-illustrations.mjs || fail "fetch-illustrations failed"

# THE FOUR LINKERS. These regenerate data/team.js, data/logos.js and
# data/insights.js from what is actually on disk. Leave them out and those
# files ship with null everywhere - which is how the team photos vanished.
node tools/link-team-photos.mjs      || fail "link-team-photos failed"
node tools/link-client-logos.mjs     || fail "link-client-logos failed"
node tools/link-competitor-logos.mjs || fail "link-competitor-logos failed"
node tools/link-article-images.mjs   || fail "link-article-images failed"

npm install --no-audit --no-fund || fail "npm install failed"

# GUARD 1: nothing is pushed unless it builds.
npm run build || fail "the build failed - nothing has been pushed"

# GUARD 2: nothing is pushed while a drawing is still a placeholder.
node tools/check-illustrations.mjs || fail "illustrations are still placeholders - nothing has been pushed"

git add -A
if [ -f tools/PATCH-MESSAGE.txt ]; then
  git commit -F tools/PATCH-MESSAGE.txt || echo "(nothing to commit)"
else
  git commit -m "Website patch" || echo "(nothing to commit)"
fi

git push origin HEAD:preview || fail "push to preview failed"

echo
echo "================================================================"
echo "  On the preview branch. Check it, then promote it in Vercel."
echo "================================================================"
