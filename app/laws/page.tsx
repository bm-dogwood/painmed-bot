"use client";

import { useState, useMemo, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { UsMap } from "@/components/UsMap";

interface StateLaw {
  code: string;
  name: string;
  acuteLimit: string;
  refill: string;
  pdmp: string;
  notable: string;
}

// Static comprehensive fallback data - sourced from state board postings
const STATIC_STATES: StateLaw[] = [
  {
    code: "AL",
    name: "Alabama",
    acuteLimit: "No statutory cap",
    refill: "Schedule II — no refills",
    pdmp: "Required check before initial Rx",
    notable: "Mandatory PDMP enrollment for prescribers.",
  },
  {
    code: "AK",
    name: "Alaska",
    acuteLimit: "7 days (acute)",
    refill: "Schedule II — no refills",
    pdmp: "Required for ≥3-day supply",
    notable: "Mandatory continuing education on opioids.",
  },
  {
    code: "AZ",
    name: "Arizona",
    acuteLimit: "5 days (acute)",
    refill: "Schedule II — no refills",
    pdmp: "Required check before each Rx",
    notable: "Lower max daily MME caps for new patients.",
  },
  {
    code: "AR",
    name: "Arkansas",
    acuteLimit: "7 days (acute)",
    refill: "Schedule II — no refills",
    pdmp: "Required check",
    notable: "Mandatory risk assessment tool.",
  },
  {
    code: "CA",
    name: "California",
    acuteLimit: "No statutory cap",
    refill: "Schedule II — no refills",
    pdmp: "CURES check required before Rx",
    notable: "Mandatory consultation for high-MME prescriptions.",
  },
  {
    code: "CO",
    name: "Colorado",
    acuteLimit: "7 days (initial)",
    refill: "Schedule II — no refills",
    pdmp: "Required check second fill+",
    notable: "Limit applies to opioid-naive patients.",
  },
  {
    code: "CT",
    name: "Connecticut",
    acuteLimit: "7 days (adults)",
    refill: "Schedule II — no refills",
    pdmp: "Required before each Rx",
    notable: "5 days for minors.",
  },
  {
    code: "DE",
    name: "Delaware",
    acuteLimit: "7 days (initial)",
    refill: "Schedule II — no refills",
    pdmp: "Required before each Rx",
    notable: "Patient counseling required.",
  },
  {
    code: "FL",
    name: "Florida",
    acuteLimit: "3 days (acute) / 7 with note",
    refill: "Schedule II — no refills",
    pdmp: "E-FORCSE check required",
    notable: "Among the strictest acute pain limits in the US.",
  },
  {
    code: "GA",
    name: "Georgia",
    acuteLimit: "No statutory cap",
    refill: "Schedule II — no refills",
    pdmp: "Required check before each Rx",
    notable: "Mandatory PDMP query.",
  },
  {
    code: "HI",
    name: "Hawaii",
    acuteLimit: "7 days (acute)",
    refill: "Schedule II — no refills",
    pdmp: "Required before each Rx",
    notable: "E-prescribing required.",
  },
  {
    code: "ID",
    name: "Idaho",
    acuteLimit: "No statutory cap",
    refill: "Schedule II — no refills",
    pdmp: "Required check",
    notable: "Voluntary prescribing guidelines.",
  },
  {
    code: "IL",
    name: "Illinois",
    acuteLimit: "No statutory cap",
    refill: "Schedule II — no refills",
    pdmp: "Required check before each Rx",
    notable: "Integrated PDMP with EHRs.",
  },
  {
    code: "IN",
    name: "Indiana",
    acuteLimit: "7 days (initial)",
    refill: "Schedule II — no refills",
    pdmp: "INSPECT required",
    notable: "Adult and minor limits both 7 days.",
  },
  {
    code: "IA",
    name: "Iowa",
    acuteLimit: "No statutory cap",
    refill: "Schedule II — no refills",
    pdmp: "Required check",
    notable: "Prescriber education required.",
  },
  {
    code: "KS",
    name: "Kansas",
    acuteLimit: "No statutory cap",
    refill: "Schedule II — no refills",
    pdmp: "Required check",
    notable: "Voluntary guidelines in effect.",
  },
  {
    code: "KY",
    name: "Kentucky",
    acuteLimit: "3 days (acute)",
    refill: "Schedule II — no refills",
    pdmp: "KASPER check required",
    notable: "One of the earliest states to adopt strict limits.",
  },
  {
    code: "LA",
    name: "Louisiana",
    acuteLimit: "7 days (acute)",
    refill: "Schedule II — no refills",
    pdmp: "Required before each Rx",
    notable: "Minors limited to 3 days.",
  },
  {
    code: "ME",
    name: "Maine",
    acuteLimit: "7 days (acute)",
    refill: "Schedule II — no refills",
    pdmp: "Required before each Rx",
    notable: "100 MME daily cap on chronic Rx.",
  },
  {
    code: "MD",
    name: "Maryland",
    acuteLimit: "7 days (acute)",
    refill: "Schedule II — no refills",
    pdmp: "PDMP check required",
    notable: "Risk assessment required for chronic use.",
  },
  {
    code: "MA",
    name: "Massachusetts",
    acuteLimit: "7 days (initial)",
    refill: "Schedule II — no refills",
    pdmp: "MassPAT required",
    notable: "Includes minors and opioid-naive adults.",
  },
  {
    code: "MI",
    name: "Michigan",
    acuteLimit: "7 days (acute)",
    refill: "Schedule II — no refills",
    pdmp: "MAPS required",
    notable: "Bona fide patient relationship required.",
  },
  {
    code: "MN",
    name: "Minnesota",
    acuteLimit: "4 days (acute, dental/ER)",
    refill: "Schedule II — no refills",
    pdmp: "Required check",
    notable: "Among the lowest acute-pain caps nationally.",
  },
  {
    code: "MS",
    name: "Mississippi",
    acuteLimit: "No statutory cap",
    refill: "Schedule II — no refills",
    pdmp: "Required check",
    notable: "PDMP mandatory for dispensers.",
  },
  {
    code: "MO",
    name: "Missouri",
    acuteLimit: "No statutory cap",
    refill: "Schedule II — no refills",
    pdmp: "Voluntary PDMP",
    notable: "Last state to implement PDMP.",
  },
  {
    code: "MT",
    name: "Montana",
    acuteLimit: "7 days (acute)",
    refill: "Schedule II — no refills",
    pdmp: "Required check",
    notable: "Education requirements for prescribers.",
  },
  {
    code: "NE",
    name: "Nebraska",
    acuteLimit: "7 days (initial)",
    refill: "Schedule II — no refills",
    pdmp: "Required check",
    notable: "Prescribers must complete opioid training.",
  },
  {
    code: "NV",
    name: "Nevada",
    acuteLimit: "14 days (initial)",
    refill: "Schedule II — no refills",
    pdmp: "Required before each Rx",
    notable: "Naloxone co-prescribing for high-risk.",
  },
  {
    code: "NH",
    name: "New Hampshire",
    acuteLimit: "7 days (acute)",
    refill: "Schedule II — no refills",
    pdmp: "Required before each Rx",
    notable: "Risk-assessment tool required.",
  },
  {
    code: "NJ",
    name: "New Jersey",
    acuteLimit: "5 days (initial)",
    refill: "Schedule II — no refills",
    pdmp: "NJPMP required",
    notable: "Patient counseling required.",
  },
  {
    code: "NM",
    name: "New Mexico",
    acuteLimit: "7 days (acute)",
    refill: "Schedule II — no refills",
    pdmp: "Required check",
    notable: "Naloxone co-prescribing encouraged.",
  },
  {
    code: "NY",
    name: "New York",
    acuteLimit: "7 days (acute)",
    refill: "Schedule II — no refills",
    pdmp: "I-STOP required",
    notable: "Mandatory e-prescribing.",
  },
  {
    code: "NC",
    name: "North Carolina",
    acuteLimit: "5 days / 7 post-op",
    refill: "Schedule II — no refills",
    pdmp: "NCCSRS required",
    notable: "STOP Act sets some of the lowest caps.",
  },
  {
    code: "ND",
    name: "North Dakota",
    acuteLimit: "7 days (initial)",
    refill: "Schedule II — no refills",
    pdmp: "Required check",
    notable: "Prescriber education mandated.",
  },
  {
    code: "OH",
    name: "Ohio",
    acuteLimit: "7 days adults / 5 minors",
    refill: "Schedule II — no refills",
    pdmp: "OARRS required",
    notable: "30 MME/day soft cap on acute.",
  },
  {
    code: "OK",
    name: "Oklahoma",
    acuteLimit: "7 days (acute)",
    refill: "Schedule II — no refills",
    pdmp: "Required check",
    notable: "Naloxone access laws expanded.",
  },
  {
    code: "OR",
    name: "Oregon",
    acuteLimit: "7 days (acute)",
    refill: "Schedule II — no refills",
    pdmp: "Required check",
    notable: "Statewide opioid treatment guidelines.",
  },
  {
    code: "PA",
    name: "Pennsylvania",
    acuteLimit: "7 days (ER)",
    refill: "Schedule II — no refills",
    pdmp: "Required before each Rx",
    notable: "Separate stricter limits in ER and dental.",
  },
  {
    code: "RI",
    name: "Rhode Island",
    acuteLimit: "20 doses or 30 MME/day",
    refill: "Schedule II — no refills",
    pdmp: "Required before each Rx",
    notable: "Dose-based rather than day-based limit.",
  },
  {
    code: "SC",
    name: "South Carolina",
    acuteLimit: "5 days (initial)",
    refill: "Schedule II — no refills",
    pdmp: "Required check",
    notable: "Among stricter Southern states.",
  },
  {
    code: "SD",
    name: "South Dakota",
    acuteLimit: "No statutory cap",
    refill: "Schedule II — no refills",
    pdmp: "Required check",
    notable: "Voluntary prescribing guidelines.",
  },
  {
    code: "TN",
    name: "Tennessee",
    acuteLimit: "3 days (initial)",
    refill: "Schedule II — no refills",
    pdmp: "Required before each Rx",
    notable: "Among the strictest initial limits in the US.",
  },
  {
    code: "TX",
    name: "Texas",
    acuteLimit: "10 days (acute)",
    refill: "Schedule II — no refills",
    pdmp: "Required before each Rx",
    notable: "E-prescribing required for controlled substances.",
  },
  {
    code: "UT",
    name: "Utah",
    acuteLimit: "7 days (acute)",
    refill: "Schedule II — no refills",
    pdmp: "Required before each Rx",
    notable: "Provider must discuss risks of opioid use.",
  },
  {
    code: "VT",
    name: "Vermont",
    acuteLimit: "7 days (acute)",
    refill: "Schedule II — no refills",
    pdmp: "Required before each Rx",
    notable: "Comprehensive opioid response plan.",
  },
  {
    code: "VA",
    name: "Virginia",
    acuteLimit: "7 days (acute)",
    refill: "Schedule II — no refills",
    pdmp: "Required before each Rx",
    notable: "Naloxone co-prescribing encouraged.",
  },
  {
    code: "WA",
    name: "Washington",
    acuteLimit: "Varies by setting",
    refill: "Schedule II — no refills",
    pdmp: "Required before each Rx",
    notable: "Clinical guidelines codified into rule.",
  },
  {
    code: "WV",
    name: "West Virginia",
    acuteLimit: "4 days (initial)",
    refill: "Schedule II — no refills",
    pdmp: "Required before each Rx",
    notable: "Among the strictest in the nation.",
  },
  {
    code: "WI",
    name: "Wisconsin",
    acuteLimit: "No statutory cap",
    refill: "Schedule II — no refills",
    pdmp: "Required check",
    notable: "Mandatory prescriber education.",
  },
  {
    code: "WY",
    name: "Wyoming",
    acuteLimit: "No statutory cap",
    refill: "Schedule II — no refills",
    pdmp: "Required check",
    notable: "Voluntary prescribing guidelines.",
  },
  {
    code: "DC",
    name: "Washington D.C.",
    acuteLimit: "7 days (acute)",
    refill: "Schedule II — no refills",
    pdmp: "Required before each Rx",
    notable: "Aligned with federal health guidelines.",
  },
];

// Attempt to enrich with OpenStates API data
async function tryEnrichWithOpenStates(
  stateCode: string
): Promise<Partial<StateLaw> | null> {
  try {
    // OpenStates API v3 - search for opioid-related bills in state
    // Note: Requires API key in production; this shows structure
    const url = `https://v3.openstates.org/bills?jurisdiction=${stateCode.toLowerCase()}&subject=HEALTH&q=opioid+prescription+limit&sort=updated_desc&per_page=1`;
    const r = await fetch(url, {
      headers: { "X-API-KEY": "demo" }, // Use demo key; replace with real key
    });
    if (!r.ok) return null;
    const d = await r.json();
    if (!d.results?.length) return null;

    // Return notable info from latest relevant bill if available
    const bill = d.results[0];
    return {
      notable: bill.title ? `Latest: ${bill.title.slice(0, 80)}…` : undefined,
    };
  } catch {
    return null;
  }
}

export default function LawsPage() {
  const [active, setActive] = useState<StateLaw>(STATIC_STATES[8]); // FL default
  const [query, setQuery] = useState("");
  const [enriching, setEnriching] = useState(false);
  const [enriched, setEnriched] = useState<Record<string, Partial<StateLaw>>>(
    {}
  );

  const filtered = STATIC_STATES.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.code.toLowerCase().includes(query.toLowerCase())
  );
  const profiledCodes = useMemo(
    () => new Set(STATIC_STATES.map((s) => s.code)),
    []
  );

  const selectByCode = (code: string) => {
    const s = STATIC_STATES.find((x) => x.code === code);
    if (s) setActive(s);
  };

  // Attempt enrichment when state changes
  useEffect(() => {
    if (enriched[active.code] !== undefined) return;
    setEnriching(true);
    tryEnrichWithOpenStates(active.code)
      .then((data) => {
        setEnriched((prev) => ({ ...prev, [active.code]: data ?? {} }));
      })
      .finally(() => setEnriching(false));
  }, [active.code]);

  const displayState = {
    ...active,
    notable: enriched[active.code]?.notable ?? active.notable,
  };

  return (
    <>
      <section className="container pt-8">
        <div className="rounded-3xl border border-border bg-card/40 p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
          <div className="relative flex items-start justify-between flex-wrap gap-4 mb-6">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                [ atlas ]
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl mt-1">
                Click a state to inspect its statute.
              </h2>
            </div>
            <div className="chip">
              <span className="marker-dot" /> live selection · {active.code}
            </div>
          </div>
          <div className="relative">
            <UsMap
              activeCode={active.code}
              profiledCodes={profiledCodes}
              onSelect={selectByCode}
            />
          </div>
        </div>
      </section>

      <section className="container py-12 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter states…"
            className="w-full bg-card border border-border rounded-full px-5 py-3 outline-none focus:border-primary"
          />
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 mt-4">
            {filtered.map((s) => (
              <button
                key={s.code}
                onClick={() => setActive(s)}
                className={`aspect-square rounded-xl border font-mono text-sm transition-all ${
                  active.code === s.code
                    ? "bg-primary text-primary-foreground border-primary scale-95"
                    : "border-border hover:border-primary hover:text-primary"
                }`}
                title={s.name}
              >
                {s.code}
              </button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 font-mono">
            {STATIC_STATES.length} states profiled · sourced from state board
            postings + OpenStates
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-border overflow-hidden">
            <div className="p-8 bg-gradient-blood relative">
              <div className="font-mono text-xs uppercase tracking-widest text-foreground/70">
                selected
              </div>
              <div className="font-serif text-6xl mt-1">
                {displayState.name}
              </div>
              <div className="font-mono text-xs text-foreground/70 mt-2">
                {displayState.code}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-px bg-border">
              {[
                { l: "Acute pain limit", v: displayState.acuteLimit },
                { l: "Refill rule", v: displayState.refill },
                { l: "PDMP requirement", v: displayState.pdmp },
                {
                  l: "Notable",
                  v: enriching ? null : displayState.notable,
                  loading: enriching,
                },
              ].map((x) => (
                <div key={x.l} className="bg-card p-6">
                  <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    {x.l}
                  </div>
                  {x.loading ? (
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Loader2 className="h-3 w-3 animate-spin" /> Checking
                      OpenStates…
                    </div>
                  ) : (
                    <div className="text-foreground/90">{x.v}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Statutes change. Always confirm current language with your state
            board of pharmacy.
          </p>
        </div>
      </section>
    </>
  );
}
