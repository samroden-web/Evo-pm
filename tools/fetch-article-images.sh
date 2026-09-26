#!/usr/bin/env bash
# Download the article cover images from the current EVO site into this repo.
#
# The build environment these files were prepared in cannot fetch binary assets, so
# the images could not be pulled down automatically. Run this once from anywhere with
# internet access — a GitHub Codespace is ideal — then commit what it downloads.
#
#   bash tools/fetch-article-images.sh

set -u
cd "$(dirname "$0")/.." || exit 1
mkdir -p public/images/insights
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


safeget "https://evo-pm.com/media/3pkdfui1/kal137_evo_a-guide-to-housing-standards-in-the-uk_kal051_evo_-a-guide-to-hmo-for-landlords-articlecover.jpg" "public/images/insights/a-guide-to-housing-standards-in-the-uk.jpg" "a-guide-to-housing-standards-in-the-uk"
safeget "https://evo-pm.com/media/pbnljuzg/kal074_evo_property-ombudsman-articlecover.png" "public/images/insights/a-landlord-s-guide-on-how-to-make-a-property-inventory.png" "a-landlord-s-guide-on-how-to-make-a-property-inventory"
safeget "https://evo-pm.com/media/wsnjdycb/kal138_evo_how-to-spot-and-treat-rising-dampness-articlecover.jpg" "public/images/insights/a-landlord-s-guide-on-how-to-spot-and-treat-rising-damp.jpg" "a-landlord-s-guide-on-how-to-spot-and-treat-rising-damp"
safeget "https://evo-pm.com/media/c35hgvi3/kal148_evo_accessible-housing_articlecover_kal051_evo_-a-guide-to-hmo-for-landlords-articlecover.jpg" "public/images/insights/accessible-housing-adapting-disabled-residents-properties.jpg" "accessible-housing-adapting-disabled-residents-properties"
safeget "https://evo-pm.com/media/4zwpa45d/kal053_evo_-pestcontrol-articlecover-2.png" "public/images/insights/are-landlords-responsible-for-pest-control-uk.png" "are-landlords-responsible-for-pest-control-uk"
safeget "https://evo-pm.com/media/d0id3u50/kal193_evo_awaabs-law.jpg" "public/images/insights/awaab-s-law-how-social-housing-providers-can-comply.jpg" "awaab-s-law-how-social-housing-providers-can-comply"
safeget "https://evo-pm.com/media/lucbfhkc/kal077_evo_landlord-insurance-articlecover.png" "public/images/insights/best-landlord-insurance-uk-which-one-is-best-for-you-in-2023.png" "best-landlord-insurance-uk-which-one-is-best-for-you-in-2023"
safeget "https://evo-pm.com/media/q5dj0c1e/cas.jpeg" "public/images/insights/case-study-evo-and-bd-reside.jpeg" "case-study-evo-and-bd-reside"
safeget "https://evo-pm.com/media/edvfbj2s/kal051_evo_-a-guide-to-hmo-for-landlords-articlecover-2.png" "public/images/insights/do-i-need-an-hmo-licence-for-three-tenants-landlord-hmo-guide.png" "do-i-need-an-hmo-licence-for-three-tenants-landlord-hmo-guide"
safeget "https://evo-pm.com/media/jmphkbtl/kal073_evo_abestos-articlecover.png" "public/images/insights/duty-to-manage-asbestos-everything-landlords-and-tenants-need-to-know.png" "duty-to-manage-asbestos-everything-landlords-and-tenants-need-to-know"
safeget "https://evo-pm.com/media/3qppyz44/image-for-kal20_evo_electrical-installation-condition-report-v2.jpg" "public/images/insights/electrical-installation-condition-report-eicr-guidance-what-landlords-need-to-know-in-2025.jpg" "electrical-installation-condition-report-eicr-guidance-what-landlords-need-to-know-in-2025"
safeget "https://evo-pm.com/media/zesbawcx/image-for-kal029_evo_extended-regulations-on-domestic-smoke-notitle.jpg" "public/images/insights/extended-regulations-on-domestic-smoke-and-carbon-monoxide-alarms.jpg" "extended-regulations-on-domestic-smoke-and-carbon-monoxide-alarms"
safeget "https://evo-pm.com/media/su5cfypy/image-for-kal028_evo_landlord-news_notitle.jpg" "public/images/insights/failing-landlords-to-expect-ofsted-style-inspections-and-unlimited-fines.jpg" "failing-landlords-to-expect-ofsted-style-inspections-and-unlimited-fines"
safeget "https://evo-pm.com/media/gbrkme4s/kal144_evo_renting-furnished-property_articlecover.jpg" "public/images/insights/furnished-or-unfurnished-which-is-best-for-landlords-to-rent.jpg" "furnished-or-unfurnished-which-is-best-for-landlords-to-rent"
safeget "https://evo-pm.com/media/50jmjfcj/image-for-kal19_evo_gas-safe-building-compliance-regulations-notitle.jpg" "public/images/insights/gas-safe-building-compliance-regulations-certificate-what-landlords-need-to-know-in-2025.jpg" "gas-safe-building-compliance-regulations-certificate-what-landlords-need-to-know-in-2025"
safeget "https://evo-pm.com/media/af1bqf5q/kal142_evo_hhsrs_tombstone-articlecover-1.jpg" "public/images/insights/hhsrs-inspection-what-it-is-what-to-expect-and-how-to-avoid-one.jpg" "hhsrs-inspection-what-it-is-what-to-expect-and-how-to-avoid-one"
safeget "https://evo-pm.com/media/3pkdfui1/kal137_evo_a-guide-to-housing-standards-in-the-uk_kal051_evo_-a-guide-to-hmo-for-landlords-articlecover.jpg" "public/images/insights/housing-association-garden-rules-how-to-work-with-residents-for-better-gardens.jpg" "housing-association-garden-rules-how-to-work-with-residents-for-better-gardens"
safeget "https://evo-pm.com/media/hb3k2hrj/kal132_evo_housing-management-systems.jpg" "public/images/insights/housing-management-systems-how-to-effectively-manage-your-portfolio.jpg" "housing-management-systems-how-to-effectively-manage-your-portfolio"
safeget "https://evo-pm.com/media/pbnljuzg/kal074_evo_property-ombudsman-articlecover.png" "public/images/insights/how-can-resident-satisfaction-be-gauged.png" "how-can-resident-satisfaction-be-gauged"
safeget "https://evo-pm.com/media/iqmb4tgs/kal229_evo_how-long-do-landlords-have-to-fix-problems-uk-1.jpg" "public/images/insights/how-long-do-landlords-have-to-fix-problems-in-the-uk.jpg" "how-long-do-landlords-have-to-fix-problems-in-the-uk"
safeget "https://evo-pm.com/media/pbnljuzg/kal074_evo_property-ombudsman-articlecover.png" "public/images/insights/how-many-warnings-before-eviction-uk-a-guide-to-the-eviction-process-for-landlords-and-housing-associations.png" "how-many-warnings-before-eviction-uk-a-guide-to-the-eviction-process-for-landlords-and-housing-associations"
safeget "https://evo-pm.com/media/1m2l0knk/image-for-kal027_evo_property-management-agencies-1.jpg" "public/images/insights/how-to-choose-the-right-property-management-company.jpg" "how-to-choose-the-right-property-management-company"
safeget "https://evo-pm.com/media/cjglixsm/kal261_evo_how-to-protect-your-property-during-heatwaves.jpg" "public/images/insights/how-to-protect-your-property-during-heatwaves.jpg" "how-to-protect-your-property-during-heatwaves"
safeget "https://evo-pm.com/media/hitd3q43/kal201_evo_-how-to-set-up-a-housing-association-repairs-policy.jpg" "public/images/insights/how-to-set-up-a-housing-association-repairs-and-maintenance-policy.jpg" "how-to-set-up-a-housing-association-repairs-and-maintenance-policy"
safeget "https://evo-pm.com/media/5jzlv02z/kal046_evo_guide-for-landlords-articlecover-3.jpg" "public/images/insights/landlord-inspection-checklist-a-guide-for-landlords.jpg" "landlord-inspection-checklist-a-guide-for-landlords"
safeget "https://evo-pm.com/media/khwl2wfw/kal161_evo_landlord-legal-requirements.jpg" "public/images/insights/landlord-legal-requirements-a-checklist-for-social-housing-providers.jpg" "landlord-legal-requirements-a-checklist-for-social-housing-providers"
safeget "https://evo-pm.com/media/g21d2odq/kal099_evo_damp-mould_article-cover.jpg" "public/images/insights/landlord-mould-responsibility-a-complete-guide.jpg" "landlord-mould-responsibility-a-complete-guide"
safeget "https://evo-pm.com/media/b0ahr1q1/kal246_evo_renters-rights-bill-202-1.jpg" "public/images/insights/renters-rights-bill-2025-when-will-extensive-reforms-become-law.jpg" "renters-rights-bill-2025-when-will-extensive-reforms-become-law"
safeget "https://evo-pm.com/media/0defs4b5/kal218_evo_renters-rights-bill.jpg" "public/images/insights/renters-rights-bill-how-are-labour-s-plans-for-private-rented-housing-different.jpg" "renters-rights-bill-how-are-labour-s-plans-for-private-rented-housing-different"
safeget "https://evo-pm.com/media/gjybnpj3/kal043_evo_everything-landlords-and-tenants-articlecover-2.jpg" "public/images/insights/section-8-grounds-everything-you-need-to-know.jpg" "section-8-grounds-everything-you-need-to-know"
safeget "https://evo-pm.com/media/14smidqj/kal253_evo_social-posts-social-housing-investment.jpg" "public/images/insights/social-housing-investment-why-money-isn-t-everything.jpg" "social-housing-investment-why-money-isn-t-everything"
safeget "https://evo-pm.com/media/pundh40l/kal241_evo_families-locked-out-of-affordable-homes-for-generations-social-posts.jpg" "public/images/insights/social-housing-uk-families-locked-out-of-affordable-homes-for-generations.jpg" "social-housing-uk-families-locked-out-of-affordable-homes-for-generations"
safeget "https://evo-pm.com/media/edvfbj2s/kal051_evo_-a-guide-to-hmo-for-landlords-articlecover-2.png" "public/images/insights/tenant-checks-for-landlords-how-social-housing-providers-can-screen-residents.png" "tenant-checks-for-landlords-how-social-housing-providers-can-screen-residents"
safeget "https://evo-pm.com/media/fqqpcc3o/kal168_evo_tenant-satisfaction-measures_kal051_evo_-a-guide-to-hmo-for-landlords-articlecover.jpg" "public/images/insights/tenant-satisfaction-measures-a-guide-for-housing-providers.jpg" "tenant-satisfaction-measures-a-guide-for-housing-providers"
safeget "https://evo-pm.com/media/ppvp1ds5/kal030_evo_the-renters-reform-bill-2022-notext.jpeg" "public/images/insights/the-renters-reform-bill-2023-everything-you-need-to-know.jpeg" "the-renters-reform-bill-2023-everything-you-need-to-know"
safeget "https://evo-pm.com/media/124puvoi/tenexp.png" "public/images/insights/the-tenant-experience-and-why-it-matters.png" "the-tenant-experience-and-why-it-matters"
safeget "https://evo-pm.com/media/qfsj5t3q/kal231_evo_uk-housing-crisis-social-posts.jpg" "public/images/insights/the-uk-housing-crisis-causes-impact-and-solutions.jpg" "the-uk-housing-crisis-causes-impact-and-solutions"
safeget "https://evo-pm.com/media/0bhjmfaw/kal121_evo_the-ultimate-buy-to-let-strategy-and-business-plan-articlecover.png" "public/images/insights/the-ultimate-buy-to-let-strategy-and-business-plan.png" "the-ultimate-buy-to-let-strategy-and-business-plan"
safeget "https://evo-pm.com/media/sdolejyw/kal087_evo_what-is-the-social-housing-decarbonisation-fund-articlecover.png" "public/images/insights/warm-homes-social-housing-fund-replaces-the-social-housing-decarbonisation-fund.png" "warm-homes-social-housing-fund-replaces-the-social-housing-decarbonisation-fund"
safeget "https://evo-pm.com/media/ghvk5dko/kal131_evo_what-checks-do-housing-associations-do_article-cover.jpg" "public/images/insights/what-checks-do-housing-associations-do-how-to-find-the-right-accommodation-for-residents.jpg" "what-checks-do-housing-associations-do-how-to-find-the-right-accommodation-for-residents"
safeget "https://evo-pm.com/media/3ycj1xec/kal117_evo_what-is-an-assured-shorthold-tenancy.jpg" "public/images/insights/what-is-an-assured-shorthold-tenancy.jpg" "what-is-an-assured-shorthold-tenancy"
safeget "https://evo-pm.com/media/a2vmtjps/kal042_evo_planned-preventative-maintenance_articlecover-2.jpg" "public/images/insights/what-is-planned-preventative-maintenance.jpg" "what-is-planned-preventative-maintenance"
safeget "https://evo-pm.com/media/assnz4ak/kal202_evo_-what-is-the-leasehold-reform-act.jpg" "public/images/insights/what-is-the-leasehold-and-freehold-reform-act.jpg" "what-is-the-leasehold-and-freehold-reform-act"
safeget "https://evo-pm.com/media/4bleafec/kal051_evo_-a-guide-to-hmo-for-landlords-articlecover-copy-100.jpg" "public/images/insights/what-is-the-pre-action-housing-disrepair-protocol.jpg" "what-is-the-pre-action-housing-disrepair-protocol"
safeget "https://evo-pm.com/media/pbnljuzg/kal074_evo_property-ombudsman-articlecover.png" "public/images/insights/what-is-the-property-ombudsman-code-of-practice.png" "what-is-the-property-ombudsman-code-of-practice"
safeget "https://evo-pm.com/media/hzujygor/kal075_evo_welcome-pack-articlecover.png" "public/images/insights/what-to-include-in-a-tenant-welcome-pack.png" "what-to-include-in-a-tenant-welcome-pack"
safeget "https://evo-pm.com/media/xchmucqf/kal186_evo_why-is-the-light-on-my-boiler-flashing.jpg" "public/images/insights/why-is-the-light-on-my-boiler-flashing-a-social-housing-resident-s-guide-to-boilers.jpg" "why-is-the-light-on-my-boiler-flashing-a-social-housing-resident-s-guide-to-boilers"

echo
echo "Downloaded $ok, failed $fail."
echo "Now: git add public/images/insights && git commit -m \"Article cover images\" && git push"

# Point the data file at whatever actually downloaded.
if command -v node >/dev/null 2>&1; then
  node tools/link-article-images.mjs
else
  echo "Node not found — run 'node tools/link-article-images.mjs' yourself before building."
fi
