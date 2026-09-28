// The EVO team, migrated from evo-pm.com/about/who-we-are on 25 September 2026.
//
// Sam's instruction: the current site shows every team, and that should not be taken
// away — "it's important for the people in the team to feel valued". So all three
// groups come across in full. Sam Roden is added as a non-executive director; he is
// not on the current site.
//
// Board biographies are EVO's own words from the current site, unedited. The
// development and helpdesk teams have no biographies on the current site either, so
// they appear as name and role, which is how EVO shows them today.
//
// PHOTOGRAPHS. `file` is the filename each photo will have once downloaded; `photo`
// is the path the page actually uses and stays null until the file is really there.
// That way the repo can never reference an image that has not been downloaded, and a
// card with no photo shows the person's initials instead of a broken image.
//
// To get the photographs in: run `bash tools/fetch-team-photos.sh` from a machine with
// internet access (a Codespace works). It downloads them and then runs
// tools/link-team-photos.mjs, which sets `photo` from what actually landed on disk.

export const board = [
  {
    name: 'Steve Norris',
    role: 'Chairman',
    photo: '/images/team/steve-norris.jpg', file: 'steve-norris.jpg',
    source: 'https://evo-pm.com/media/3wlb5pnf/evo_steve_n.jpg',
    // His photograph downloads with the rest. The biography is the only thing outstanding,
    // and it is tracked here rather than in a note on the page.
    bio: "Steve Norris has spent his career where government, infrastructure and property meet. He was a government transport minister from 1992 to 1996, has served on the board of Transport for London, and has chaired businesses across property, transport and infrastructure, including Soho Estates and Driver Group plc. He is a Fellow of the Royal Institution of Chartered Surveyors. He chairs EVO's board.",
  },
  {
    name: 'Steven Rae',
    role: 'CEO and CTO',
    photo: '/images/team/steven-rae.png', file: 'steven-rae.png',
    source: 'https://evo-pm.com/media/ud3b0bcx/sgr-bio-pic.png',
    bio: "Steven built STC Energy, an energy software business, over twenty-two years and sold it to Inspired Energy PLC, an AIM-quoted company. He joined EVO in October 2021 and leads its strategy, architecture and growth roadmap - the software EVO runs the service on is built under him.",
  },
  {
    name: 'Mark Iandoli',
    role: 'COO and Founder',
    photo: '/images/team/mark-iandoli.jpg', file: 'mark-iandoli.jpg',
    source: 'https://evo-pm.com/media/e42igqme/evo_mark_i.jpg',
    bio: "Mark has spent more than twenty-five years in UK property maintenance and repairs, and has been a portfolio landlord for much of it. He founded EVO after watching the same system fail residents, landlords and good contractors alike, and he runs its service operations - contract rollout, delivery and performance. He has been involved in more than 12,500 jobs since 2013.",
  },
  {
    name: 'Craig Calder',
    role: 'Commercial Director',
    photo: '/images/team/craig-calder.jpg', file: 'craig-calder.jpg',
    source: 'https://evo-pm.com/media/qz2a5qtu/evo_craig.jpg',
    bio: "Craig has spent almost all his working life in property. He moved from South Africa to the UK in 1994, working first at the Kuwait Investment Office and then in management roles at Citigroup. At EVO he leads the commercial side, working with housing associations, local authorities and institutional landlords on how a repairs contract is actually structured.",
  },
  {
    name: 'Kate Davies CBE',
    role: 'Non-Executive Director',
    photo: '/images/team/kate-davies.jpg', file: 'kate-davies.jpg',
    source: 'https://evo-pm.com/media/z1pd3qzq/kate-davies-pic.jpg',
    bio: "Kate spent eighteen years as chief executive of Notting Hill Genesis and has worked in social housing for thirty-five. She has also been a non-executive director in housebuilding, modular construction, insurance and technology. She was awarded a CBE for services to housing in 2022.",
  },
  {
    name: 'Sam Roden',
    role: 'Non-Executive Director',
    // Written 27 September from Sam's own notes, and deliberately a fraction of them. Most of
    // what he holds about himself has no place on a supplier's About page: his shareholding,
    // how he is paid, other businesses he part-owns, and his own plans. What is here is what a
    // housing client would actually weigh - that EVO has a non-executive who has built and run
    // a Registered Provider, and has sat on the buying side of a repairs contract.
    // Photograph supplied by Sam on 27 September. It is the only team photo NOT pulled from the
    // old site, so it is committed to the repo directly - and because public/images/team is
    // excluded from the deploy rsync (to protect the fetched photographs), it reaches the
    // Codespace through the "new files only" step, which never overwrites anything.
    // `file` is set as well as `photo`, so tools/link-team-photos.mjs manages this entry like
    // every other one instead of treating it as a special case.
    photo: '/images/team/sam-roden.webp', file: 'sam-roden.webp',
    source: null,
    bio: "Sam Roden is CEO of Storm Property Group, a developer and principal contractor delivering supported living and affordable housing. He founded Storm Housing Group, a Registered Provider he built from scratch and sold to the St Philips Group in 2025, and remains its chief executive. His background is in property, development finance and funding structures, and he has spent years on the landlord's side of a repairs contract - which is the side of the table he is on EVO's board to represent.",
  },
  {
    name: 'Tim Marchant',
    role: 'Investor Director',
    photo: '/images/team/tim-marchant.png', file: 'tim-marchant.png',
    source: 'https://evo-pm.com/media/y22j5cbq/tim-marchant.png',
    bio: "Tim is a General Partner at Moscar Capital and has spent more than fifteen years in venture and growth finance, on boards through successive funding rounds. He represents EVO's investors on the board and covers its governance, funding and financial reporting.",
  },
];

export const development = [
  {
    name: 'Ben Blomerley',
    role: 'Technology Advisor',
    photo: '/images/team/ben-blomerley.jpg', file: 'ben-blomerley.jpg',
    source: 'https://evo-pm.com/media/0fxajkas/evo_ben.jpg',
  },
  {
    name: 'Louis Botes',
    role: 'Senior Architect',
    photo: '/images/team/louis-botes.jpg', file: 'louis-botes.jpg',
    source: 'https://evo-pm.com/media/42dhtvwl/evo_louis-botes-managing-engineer.jpg',
  },
  {
    name: 'Warren Visser',
    role: 'Tech Lead',
    photo: '/images/team/warren-visser.jpg', file: 'warren-visser.jpg',
    source: 'https://evo-pm.com/media/hdbb0jkc/warren.jpg',
  },
  {
    name: 'Neil Webb',
    role: 'Design Lead',
    photo: '/images/team/neil-webb.jpg', file: 'neil-webb.jpg',
    source: 'https://evo-pm.com/media/rkzhd3jh/neil-webb.jfif',
  },
  {
    name: 'Rossathorn Itthisitthikul',
    role: 'Engagement Lead',
    photo: '/images/team/rossathorn-itthisitthikul.jpg', file: 'rossathorn-itthisitthikul.jpg',
    source: 'https://evo-pm.com/media/ofgfkc5v/rossathornitthisitthikul.jpg',
  },
  {
    name: 'Yvonne Mason',
    role: 'Engagement Lead',
    photo: '/images/team/yvonne-mason.jpg', file: 'yvonne-mason.jpg',
    source: 'https://evo-pm.com/media/yxjgd4gc/yvonne-mason.jpeg',
  },
  {
    name: 'Tananes Niyamosoth',
    role: 'Full Stack Developer',
    photo: '/images/team/tananes-niyamosoth.jpg', file: 'tananes-niyamosoth.jpg',
    source: 'https://evo-pm.com/media/5seixcwe/evo_tananes-niyamosoth-senior-engineer.jpg',
  },
  {
    name: 'Kelly Kunaka',
    role: 'Full Stack Developer',
    photo: '/images/team/kelly-kunaka.jpg', file: 'kelly-kunaka.jpg',
    source: 'https://evo-pm.com/media/al1hwdwe/kelly-kunaka.jpg',
  },
  {
    name: 'Suchada Kaewyoun',
    role: 'Mobile Developer',
    photo: '/images/team/suchada-kaewyoun.jpg', file: 'suchada-kaewyoun.jpg',
    source: 'https://evo-pm.com/media/10opsv0v/suchada-kaewyoun.jpg',
  },
  {
    name: 'Jessete Ubaldo',
    role: 'QA Engineer',
    photo: '/images/team/jessete-ubaldo.png', file: 'jessete-ubaldo.png',
    source: 'https://evo-pm.com/media/qq5d2i5q/jesse.png',
  },
];

export const operations = [
  {
    name: 'Kerrie Donohue',
    role: 'Helpdesk Manager',
    photo: '/images/team/kerrie-donohue.jpg', file: 'kerrie-donohue.jpg',
    source: 'https://evo-pm.com/media/kgadmfpp/kerrie-donohue.jpg',
  },
  {
    name: 'Georgina Read',
    role: 'Compliance Manager',
    photo: '/images/team/georgina-read.jpg', file: 'georgina-read.jpg',
    source: 'https://evo-pm.com/media/34klfed4/georgina-read-pic.jpg',
  },
  {
    name: 'Debbie Mountney',
    role: 'Programmed Works Manager',
    photo: '/images/team/debbie-mountney.png', file: 'debbie-mountney.png',
    source: 'https://evo-pm.com/media/t1vb5wf4/screenshot-2026-04-23-at-165804.png',
  },
  {
    name: 'Emily Mountney',
    role: 'Systems and Account Manager',
    photo: '/images/team/emily-mountney.jpg', file: 'emily-mountney.jpg',
    source: 'https://evo-pm.com/media/qzglaxfo/evo_emilymountney.jpg',
  },
  {
    name: 'Emily King',
    role: 'Accounts Lead',
    photo: '/images/team/emily-king.jpg', file: 'emily-king.jpg',
    source: 'https://evo-pm.com/media/ryzlm0sj/emily-king.jpg',
  },
  {
    name: 'Talia Holmes',
    role: 'Compliance Agent',
    photo: '/images/team/talia-holmes.jpg', file: 'talia-holmes.jpg',
    source: 'https://evo-pm.com/media/43jmnvl0/talia-holmes-small.jpg',
  },
  {
    name: 'Sian Moxom',
    role: 'Compliance Agent',
    photo: '/images/team/sian-moxom.jpg', file: 'sian-moxom.jpg',
    source: 'https://evo-pm.com/media/rw4fjfps/sian-moxom-small.jpg',
  },
  {
    name: 'Marianna Gomez',
    role: 'Helpdesk',
    photo: '/images/team/marianna-gomez.jpg', file: 'marianna-gomez.jpg',
    source: 'https://evo-pm.com/media/4jecc54c/marianna-gomez.jpg',
  },
  {
    name: 'Rebecca Hawkes',
    role: 'Helpdesk',
    photo: '/images/team/rebecca-hawkes.jpg', file: 'rebecca-hawkes.jpg',
    source: 'https://evo-pm.com/media/d44n4rno/rebecca-hawkes.jpg',
  },
  {
    name: 'Danielle Goldsbrough',
    role: 'Helpdesk',
    photo: '/images/team/danielle-goldsbrough.jpg', file: 'danielle-goldsbrough.jpg',
    source: 'https://evo-pm.com/media/kwffcnyn/danielle-goldsbrough.jpg',
  },
  {
    name: 'Maisie Bradley',
    role: 'Helpdesk',
    photo: '/images/team/maisie-bradley.jpg', file: 'maisie-bradley.jpg',
    source: 'https://evo-pm.com/media/2bcpqmch/54e8d307-e7aa-4342-984b-eacf9ec80c23.jpg',
  },
  {
    name: 'Sam Green',
    role: 'Helpdesk',
    photo: '/images/team/sam-green.jpg', file: 'sam-green.jpg',
    source: 'https://evo-pm.com/media/g2khdox5/sam-green.jpg',
  },
  {
    name: 'Samantha Lunn',
    role: 'Helpdesk',
    photo: '/images/team/samantha-lunn.jpg', file: 'samantha-lunn.jpg',
    source: 'https://evo-pm.com/media/0anik4vc/img_1426-1.jpeg',
  },
];

export function initials(name) {
  return name
    .replace(/ CBE$/, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('');
}
