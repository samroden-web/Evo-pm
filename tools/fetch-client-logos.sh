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
mkdir -p public/images/logos/clients public/images/logos/accreditations public/images/awards
ok=0; fail=0

# NEVER WRITE DIRECTLY TO THE DESTINATION, AND NEVER DELETE IT ON FAILURE.
#
# This helper used to do both: `curl -o "$2"` truncates the destination before the transfer
# even starts, and the failure branch then ran `rm -f "$2"`. These files are COMMITTED to
# the repo, and the deploy block runs every fetch script on every patch. So the first time
# evo-pm.com stopped serving one of these /media/ URLs, that run deleted the good committed
# copy, `withFiles` filtered the logo out because it had no file, and it vanished from the
# homepage silently. No error, no failed build - the strip simply got shorter.
#
# That is exactly the trap the header of this file warns about, and the script walked into
# it. Download to a temporary file; move it into place only on success; leave whatever is
# already committed completely alone if the fetch fails.
get() { # get <url> <destination>
  local tmp
  tmp="$(mktemp)"
  if curl -fsSL --max-time 30 "$1" -o "$tmp" && [ -s "$tmp" ]; then
    mv -f "$tmp" "$2"
    ok=$((ok+1)); echo "  ok   $2"
  else
    rm -f "$tmp"
    fail=$((fail+1))
    if [ -s "$2" ]; then
      echo "  FAIL $1  (KEPT the committed copy at $2)"
    else
      echo "  FAIL $1  (and there is no committed copy - this one really is missing)"
    fi
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

# Greenhill and J49 are not on the old EVO site — they came later — so these come from
# their own websites. Both are full-colour marks rather than the grey, pre-padded canvases
# the others use; the strip desaturates everything, so they match once they are in place.
get "https://www.ghha.co.uk/wp-content/uploads/sites/114/2024/06/image-2.png" "public/images/logos/clients/greenhill-housing.png"
get "https://j49.space/wp-content/uploads/2023/08/J49-Logo.png"               "public/images/logos/clients/j49.png"

echo "Award badges"
# Both awards as one lockup, light artwork for a dark ground. This is the file the old
# site uses in its footer, and it is the only real award asset that exists: there is no
# dark-ground version (probed, 404) and nothing at all for Housing Digital on its own.
get "https://evo-pm.com/assets/images/HDIA_HEA_light.png" "public/images/awards/award-badges-light.png"
get "https://evo-pm.com/assets/images/HE_Award_2025.png"  "public/images/awards/housing-executive-2025.png"

echo "Framework logos"
get "https://evo-pm.com/assets/images/Logo_SEConsortium.png" "public/images/logos/accreditations/south-east-consortium.png"
get "https://evo-pm.com/assets/images/PFH_Logo.png"          "public/images/logos/accreditations/procurement-for-housing.png"

echo
echo "Downloaded $ok, failed $fail."
echo
echo "Still needed:"
echo "  Cyber Essentials    public/images/logos/accreditations/cyber-essentials.png"
echo "  Living Wage         public/images/logos/accreditations/living-wage-employer.png"
echo
echo "Next: node tools/link-client-logos.mjs"
