/** Zero-click glossary. Hovering any of these terms reveals the definition. */
export const GLOSSARY: Record<string, string> = {
  QUAD: "Quadrilateral Security Dialogue — India, United States, Japan and Australia; a strategic consultation forum on the Indo-Pacific.",
  ASEAN:
    "Association of Southeast Asian Nations — a ten-member regional bloc of Southeast Asian states.",
  CEPA: "Comprehensive Economic Partnership Agreement — a wide trade pact covering goods, services and investment.",
  CECA: "Comprehensive Economic Cooperation Agreement — a trade framework covering goods, services and economic cooperation.",
  FTA: "Free Trade Agreement — a pact reducing or removing tariffs between signatories.",
  MoU: "Memorandum of Understanding — a non-binding statement of intent between governments or agencies.",
  BRICS:
    "Brazil, Russia, India, China, South Africa and later members — a grouping of major emerging economies.",
  SCO: "Shanghai Cooperation Organisation — a Eurasian political, economic and security body.",
  SAARC:
    "South Asian Association for Regional Cooperation — the eight-member South Asian regional bloc.",
  BIMSTEC:
    "Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation.",
  LAC: "Line of Actual Control — the disputed de facto boundary between India and China.",
  LoC: "Line of Control — the military control line dividing Indian- and Pakistani-administered Kashmir.",
  IMEC: "India–Middle East–Europe Economic Corridor — a proposed rail and shipping corridor.",
  MEA: "Ministry of External Affairs — India's foreign ministry.",
  HDI: "Human Development Index — a UNDP composite of life expectancy, education and income.",
  FDI: "Foreign Direct Investment — cross-border investment in productive assets.",
  ISRO: "Indian Space Research Organisation — India's national space agency.",
  DRDO: "Defence Research and Development Organisation — India's military R&D agency.",
  RATS: "Regional Anti-Terrorist Structure — the SCO's counter-terrorism body.",
  IOR: "Indian Ocean Region.",
  SAGAR:
    "Security and Growth for All in the Region — India's maritime cooperation doctrine for the Indian Ocean.",
  UNSC: "United Nations Security Council.",
  NSG: "Nuclear Suppliers Group — an export-control regime for nuclear material and technology.",
  "2+2":
    "Two-plus-two dialogue — a joint meeting of two countries' foreign and defence ministers.",
  LEMOA:
    "Logistics Exchange Memorandum of Agreement — reciprocal military logistics access between India and the United States.",
  BECA: "Basic Exchange and Cooperation Agreement — geospatial intelligence sharing between India and the United States.",
  COMCASA:
    "Communications Compatibility and Security Agreement — secure military communications between India and the United States.",
  UPI: "Unified Payments Interface — India's real-time retail payments system.",
  GIFT: "Gujarat International Finance Tec-City — India's international financial services centre.",
};

export const GLOSSARY_TERMS = Object.keys(GLOSSARY).sort(
  (a, b) => b.length - a.length,
);
