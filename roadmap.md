# India Bilateral Atlas — Roadmap

## Decisions locked
- Centre node: India. Tier 1 scope: ~10 partners (USA, China, Russia, Pakistan, Bangladesh, Japan, UAE, France, Nepal, Sri Lanka).
- Home = clickable world map.
- Rigid modular schema so every country page looks identical (USA or Tuvalu).
- Macro data auto-updating (World Bank/IMF) later; fixed seeded values at tier 1.
- Content curated by owner initially; admin editing later.

## Data model (rigid)
Root: India → Partner Country →
- 2A Macro: demographics, economics, governance (API-fed)
- 2B Timeline: pre-1947, post-1947 (editorial)
- 2C Core Pillars (7): Political & Strategic, Geographical, Economic & Trade,
  Tech & Science, Society & Diaspora, Treaties & Agreements, Current Affairs

## Country dashboard blueprint (from user)
- Hero: map/globe with glowing arc New Delhi → partner capital
- Vitals ribbon: time difference, INR/FX, trade balance, visa status (static tier 1)
- 30/70 split below hero
  - Left 30%: pinned, minimisable modules — Head-to-Head comparison, Trade
    visualiser (numbers only at tier 1; Sankey + top-10 goods/services later),
    Diaspora gauge (students vs workers). Only one open at a time; collapsible.
  - Right 70%: sticky horizontal tab bar with icons, labelled "Core Pillars"
- Timeline: single line, events as nodes (decade slider later)
- Strategic tab: max 3-sentence briefs + diplomatic temperature indicator
- Treaties: searchable/sortable table — Year | Sector | Status | Document link
- Live Intelligence: masonry news cards (RSS, tagged India AND partner)

## UX rules
- Hover glossary for acronyms (QUAD, ASEAN, CEPA, CECA)
- Superscript citation links on every editorial claim
- "Compare With" floating button to overlay a third country

## Task list
- [x] Pick design direction — Dossier as poster, aged paper + typewriter stamps
- [ ] Core Pillars bar must wrap to multiple rows — vertical scrolling only, no horizontal scroll
- [ ] Design system tokens in src/styles.css
- [ ] Home: world map index + partner list + search
- [ ] Country dashboard shell (hero, vitals ribbon, 30/70 split)
- [ ] Left modules: comparison, trade, diaspora (collapsible, one at a time)
- [ ] Core Pillars tabbed engine with all 7 sections
- [ ] Timeline component (pre/post-1947)
- [ ] Treaties table with filter/sort
- [ ] Live Intelligence card grid
- [ ] Glossary tooltip + citation superscript components
- [ ] Seed content for the 10 tier-1 partners
- [ ] Head metadata per route

## Deferred (later versions)
- Lovable Cloud database + admin editor
- World Bank/IMF auto-refresh
- RSS ingestion pipeline
- Sankey trade diagram, decade slider, 3-way compare
