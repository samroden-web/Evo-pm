#!/usr/bin/env bash
# Download the client and framework logos from the CURRENT (old) EVO site into this repo.
#
# RUN THIS BEFORE THE DOMAIN CUTS OVER. These files live on the old Umbraco site at
# evo-pm.com/media/... The moment evo-pm.com points at the new Vercel build, every one
# of these URLs dies and the files are gone unless someone has a copy.
#
# Neither the build environment nor the desktop bridge can fetch binaries, so run this
# once from anywhere with ordinary internet access — a GitHub Codespace is ideal —
# then run the linker and commit the results.
#
#   bash tools/fetch-client-logos.sh
#   node tools/link-client-logos.mjs
#
# Safe to run repeatedly. Anything that fails is reported and simply stays unlinked,
# so the site never points at a file that is not there.

set -u
cd "$(dirname "$0")/.." || exit 1
mkdir -p public/images/logos/clients public/images/logos/accreditations
ok=0; fail=0

get() { # get <url> <destination>
  if curl -fsSL "$1" -o "$2"; then
    ok=$((ok+1)); echo "  ok   $2"
  else
    rm -f "$2"; fail=$((fail+1)); echo "  FAIL $1"
  fi
}

echo "Client logos"
get "https://evo-pm.com/media/jeqpac1n/evo_thames-reach_grey.png" "public/images/logos/clients/thames-reach.png"
get "https://evo-pm.com/media/yuofw00c/evo_soho_grey.png"         "public/images/logos/clients/soho-housing.png"
get "https://evo-pm.com/media/ay5omwau/evo_lrm_grey.png"          "public/images/logos/clients/lrm.png"
get "https://evo-pm.com/media/wsxfl4gn/evo_storm_grey.png"        "public/images/logos/clients/storm-housing-group.png"

# Already in the repo, re-fetched so the whole strip comes from one source and matches
# optically. Harmless if they are identical.
get "https://evo-pm.com/media/px3pobny/evo_bd_grey.png"           "public/images/logos/clients/bd-reside.png"
get "https://evo-pm.com/media/u3zpimbw/evo_ids_grey.png"          "public/images/logos/clients/ids.png"
get "https://evo-pm.com/media/whxpdoqp/evo_british-land_grey.png" "public/images/logos/clients/british-land.png"
get "https://evo-pm.com/media/pftjv3d0/evo_capital_grey.png"      "public/images/logos/clients/capital-letters.png"
get "https://evo-pm.com/media/qjvn1ttc/evo_resonance_grey.png"    "public/images/logos/clients/resonance.png"

echo "Framework logos"
get "https://evo-pm.com/assets/images/Logo_SEConsortium.png" "public/images/logos/accreditations/south-east-consortium.png"
get "https://evo-pm.com/assets/images/PFH_Logo.png"          "public/images/logos/accreditations/procurement-for-housing.png"

echo
echo "Downloaded $ok, failed $fail."
echo
echo "Still needed, and NOT on the old site:"
echo "  Greenhill Housing   public/images/logos/clients/greenhill-housing.png"
echo "  J49                 public/images/logos/clients/j49.png"
echo "  Cyber Essentials    public/images/logos/accreditations/cyber-essentials.png"
echo "  Living Wage         public/images/logos/accreditations/living-wage-employer.png"
echo
echo "Next: node tools/link-client-logos.mjs"
