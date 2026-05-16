/** Public legal entity facts — safe for website display (no EIN, no personal data). */
export const COMPANY = {
  legalName: "Nwvania LLC",
  brandName: "Nwvania",
  entityType: "Wyoming Limited Liability Company",
  managementType: "Single Member-Managed LLC",
  state: "Wyoming",
  stateAbbrev: "WY",
  formedDate: "January 19, 2026",
  formedDateISO: "2026-01-19",
  filingId: "2026-001870025",
  registeredAgent: "Registered Agents Inc",
  legalAddress: {
    street: "30 N Gould St Ste R",
    city: "Sheridan",
    state: "WY",
    zip: "82801",
    country: "US",
  },
  wyomingVerifyUrl: "https://wyobiz.wyo.gov/Business/FilingSearch.aspx",
  legalEmail: "legal@nwvania.com",
  privacyEmail: "privacy@nwvania.com",

  // IRS / Federal tax facts (safe to display — no EIN number published)
  irs: {
    einStatus: "Assigned",
    einAssignedDate: "February 3, 2026",
    ltr147cDate: "February 4, 2026",
    taxClassification: "Disregarded Entity",
    industryCode: "Information Technology",
    businessDescription: "All-in-one digital platform connecting people to everything",
    fiscalYear: "Calendar year (January – December)",
  },

  // Wyoming Secretary of State certificate details
  sos: {
    secretaryOfState: "Chuck Gray",
    filedTime: "5:54 AM",
    filedDate: "January 19, 2026",
    formationService: "Distributed Inc (doola)",
  },
} as const;

export function formatLegalAddress(): string {
  const a = COMPANY.legalAddress;
  return `${a.street}, ${a.city}, ${a.state} ${a.zip}, United States`;
}
