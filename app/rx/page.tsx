"use client";
import { useState } from "react";
import { Search, Loader2, ExternalLink, AlertCircle } from "lucide-react";

interface Result {
  brand: string;
  generic: string;
  purpose?: string;
  warnings?: string;
  dosage?: string;
  indications?: string;
  manufacturer?: string;
  rxcui?: string;
}

// Demo fallback data for when FDA API returns no useful results
const DEMO_DATA: Record<string, Result> = {
  oxycodone: {
    brand: "OxyContin",
    generic: "OXYCODONE HYDROCHLORIDE",
    indications:
      "Oxycodone is indicated for the management of pain severe enough to require an opioid analgesic and for which alternative treatments are inadequate. Limitations of Use: Because of the risks of addiction, abuse, and misuse with opioids, reserve oxycodone for use in patients for whom alternative treatment options have not been tolerated, or are not expected to be tolerated.",
    dosage:
      "Initiate dosing regimen for each patient individually, taking into account the patient's severity of pain, patient response, prior analgesic treatment experience, and risk factors for addiction, abuse, and misuse. Use lowest effective dosage for shortest duration consistent with individual patient treatment goals. Individualize dosing based on the severity of pain, patient response, and patient's opioid experience.",
    warnings:
      "ADDICTION, ABUSE, AND MISUSE: Oxycodone exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which can lead to overdose and death. Assess each patient's risk prior to prescribing oxycodone, and monitor all patients regularly for development of these behaviors and conditions. LIFE-THREATENING RESPIRATORY DEPRESSION: Serious, life-threatening, or fatal respiratory depression may occur with use of oxycodone.",
    manufacturer: "Purdue Pharma",
  },
  hydrocodone: {
    brand: "Vicodin",
    generic: "HYDROCODONE BITARTRATE AND ACETAMINOPHEN",
    indications:
      "Hydrocodone/acetaminophen tablets are indicated for the relief of moderate to moderately severe pain.",
    dosage:
      "Dosage should be adjusted according to severity of pain and patient response. However, it should be kept in mind that tolerance to hydrocodone can develop with continued use and that the incidence of untoward effects is dose related. The usual adult dosage is one or two tablets every four to six hours as needed for pain.",
    warnings:
      "Hepatotoxicity: Acetaminophen has been associated with cases of acute liver failure. Most of the cases of liver injury are associated with the use of acetaminophen at doses that exceed 4000 milligrams per day. Respiratory Depression: At high doses or in opioid-naive patients, hydrocodone may produce dose-related respiratory depression.",
    manufacturer: "AbbVie",
  },
  tramadol: {
    brand: "Ultram",
    generic: "TRAMADOL HYDROCHLORIDE",
    indications:
      "Tramadol tablets are indicated in adults for the management of pain severe enough to require an opioid analgesic and for which alternative treatments are inadequate.",
    dosage:
      "For patients with moderate to moderately severe chronic pain not requiring rapid onset of analgesic effect, the tolerability of tramadol can be improved by initiating therapy with a titration regimen. The total daily dose may be increased by 50 mg as tolerated every 3 days to reach 200 mg/day.",
    warnings:
      "Addiction, Abuse, and Misuse: Tramadol exposes patients and other users to the risks of opioid addiction, abuse, and misuse. Seizure Risk: Tramadol may lower the seizure threshold. Risk of Serotonin Syndrome: Concomitant use with serotonergic drugs may result in serotonin syndrome.",
    manufacturer: "Janssen Pharmaceuticals",
  },
  morphine: {
    brand: "MS Contin",
    generic: "MORPHINE SULFATE",
    indications:
      "Morphine sulfate extended-release tablets are indicated for the management of pain severe enough to require daily, around-the-clock, long-term opioid treatment and for which alternative treatment options are inadequate.",
    dosage:
      "Morphine sulfate extended-release tablets must be taken whole and are not to be broken, chewed, dissolved, or crushed. For patients receiving morphine for the first time, start with 15 mg every 8 to 12 hours.",
    warnings:
      "Addiction, Abuse, and Misuse: Morphine exposes patients and other users to the risks of opioid addiction, abuse, and misuse. Life-Threatening Respiratory Depression: Serious, life-threatening, or fatal respiratory depression may occur.",
    manufacturer: "Purdue Pharma",
  },
  gabapentin: {
    brand: "Neurontin",
    generic: "GABAPENTIN",
    indications:
      "Gabapentin capsules are indicated for: Management of postherpetic neuralgia in adults. Adjunctive therapy in the treatment of partial onset seizures, with and without secondary generalization, in adults and pediatric patients 3 years and older with epilepsy.",
    dosage:
      "For postherpetic neuralgia: The recommended dose is 1800 mg/day administered as 600 mg three times a day. Dosing may be initiated as 300 mg on Day 1, 600 mg/day on Day 2, and 900 mg/day on Days 3-6, then 1200 mg/day on Days 7-10, 1500 mg/day on Days 11-14, and 1800 mg/day on Day 15 and thereafter.",
    warnings:
      "Drug Reaction with Eosinophilia and Systemic Symptoms (DRESS)/Multiorgan Hypersensitivity: Drug Reaction with Eosinophilia and Systemic Symptoms (DRESS), also known as multiorgan hypersensitivity, has been reported in patients taking antiepileptic drugs, including gabapentin.",
    manufacturer: "Pfizer",
  },
  codeine: {
    brand: "Tylenol with Codeine",
    generic: "CODEINE SULFATE",
    indications:
      "Codeine sulfate tablets are indicated for the management of mild to moderately severe pain where use of an opioid analgesic is appropriate.",
    dosage:
      "The usual adult dosage is 15 mg to 60 mg every 4 hours as needed for pain. The maximum 24-hour dose is 360 mg. Individualize dosing based on severity of pain and patient response.",
    warnings:
      "Ultra-Rapid Metabolism of Codeine and Other Risk Factors for Life-Threatening Respiratory Depression in Children: Life-threatening respiratory depression and death have occurred in children who received codeine. Addiction, Abuse, and Misuse: Codeine exposes patients to risks of opioid addiction, abuse, and misuse.",
    manufacturer: "Various",
  },
  celecoxib: {
    brand: "Celebrex",
    generic: "CELECOXIB",
    indications:
      "Celecoxib capsules are indicated for relief of the signs and symptoms of osteoarthritis, rheumatoid arthritis in adults, juvenile rheumatoid arthritis in patients 2 years and older, and ankylosing spondylitis.",
    dosage:
      "For osteoarthritis: 200 mg per day administered as a single dose or as 100 mg twice daily. For rheumatoid arthritis: 100 to 200 mg twice daily. For ankylosing spondylitis: 200 mg daily as a single dose or in divided doses twice daily.",
    warnings:
      "Cardiovascular Thrombotic Events: NSAIDs cause an increased risk of serious cardiovascular thrombotic events, including myocardial infarction and stroke, which can be fatal. Gastrointestinal Bleeding, Ulceration, and Perforation: NSAIDs cause serious gastrointestinal adverse events including bleeding, ulceration, and perforation.",
    manufacturer: "Pfizer",
  },
  diclofenac: {
    brand: "Voltaren",
    generic: "DICLOFENAC SODIUM",
    indications:
      "Diclofenac sodium delayed-release tablets are indicated for relief of signs and symptoms of osteoarthritis, rheumatoid arthritis, and ankylosing spondylitis.",
    dosage:
      "For osteoarthritis: 100–150 mg/day in divided doses (50 mg twice or three times daily or 75 mg twice daily). For rheumatoid arthritis: 150–200 mg/day in divided doses.",
    warnings:
      "Cardiovascular Thrombotic Events: NSAIDs cause an increased risk of serious cardiovascular thrombotic events. Hepatotoxicity: Elevations of ALT or AST have been reported in patients receiving diclofenac.",
    manufacturer: "Novartis",
  },
};

const popular = [
  "oxycodone",
  "hydrocodone",
  "tramadol",
  "morphine",
  "codeine",
  "gabapentin",
  "celecoxib",
  "diclofenac",
];

async function fetchFromFDA(term: string): Promise<Result | null> {
  try {
    const url = `https://api.fda.gov/drug/label.json?search=openfda.generic_name:"${encodeURIComponent(
      term
    )}"+OR+openfda.brand_name:"${encodeURIComponent(term)}"&limit=1`;
    const r = await fetch(url);
    if (!r.ok) return null;
    const data = await r.json();
    const item = data.results?.[0];
    if (!item) return null;
    return {
      brand: item.openfda?.brand_name?.[0] ?? term,
      generic: item.openfda?.generic_name?.[0] ?? "—",
      purpose: item.purpose?.[0],
      warnings: item.warnings?.[0] ?? item.boxed_warning?.[0],
      dosage: item.dosage_and_administration?.[0],
      indications: item.indications_and_usage?.[0],
      manufacturer: item.openfda?.manufacturer_name?.[0],
    };
  } catch {
    return null;
  }
}

async function fetchFromDailyMed(term: string): Promise<Result | null> {
  try {
    const searchUrl = `https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=${encodeURIComponent(
      term
    )}&pagesize=1`;
    const sr = await fetch(searchUrl);
    if (!sr.ok) return null;
    const sd = await sr.json();
    const setid = sd.data?.[0]?.setid;
    if (!setid) return null;

    const detailUrl = `https://dailymed.nlm.nih.gov/dailymed/services/v2/spls/${setid}.json`;
    const dr = await fetch(detailUrl);
    if (!dr.ok) return null;
    const dd = await dr.json();
    const spl = dd.data;

    const getText = (code: string): string | undefined => {
      const sections: { loinc_code?: string; text?: string }[] =
        spl?.sections ?? [];
      return sections.find((s) => s.loinc_code === code)?.text;
    };

    return {
      brand: spl?.product_ndc?.[0]?.proprietary_name ?? term,
      generic: spl?.product_ndc?.[0]?.nonproprietary_name ?? "—",
      indications: getText("34067-9"),
      dosage: getText("34068-7"),
      warnings: getText("34071-1") ?? getText("34066-1"),
      manufacturer: spl?.labeler_name,
    };
  } catch {
    return null;
  }
}

const Rx = () => {
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [source, setSource] = useState<string>("");

  const search = async (term: string) => {
    if (!term.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);
    setSource("");

    try {
      // 1. Try FDA API first
      const fdaResult = await fetchFromFDA(term);
      if (
        fdaResult &&
        (fdaResult.indications || fdaResult.warnings || fdaResult.dosage)
      ) {
        setResult(fdaResult);
        setSource("FDA OpenFDA");
        return;
      }

      // 2. Try DailyMed
      const dmResult = await fetchFromDailyMed(term);
      if (
        dmResult &&
        (dmResult.indications || dmResult.warnings || dmResult.dosage)
      ) {
        setResult(dmResult);
        setSource("NIH DailyMed");
        return;
      }

      // 3. Fallback to demo data
      const key = term.toLowerCase().trim();
      const demo = DEMO_DATA[key];
      if (demo) {
        setResult(demo);
        setSource("Demo data");
        return;
      }

      setError("No record found");
    } catch {
      setError("Search failed — try a different term");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="container py-12">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            search(q);
          }}
          className="relative max-w-2xl"
        >
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="oxycodone, tramadol, gabapentin…"
            className="w-full bg-card border border-border rounded-full pl-14 pr-32 py-5 text-lg outline-none focus:border-primary transition-colors"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-medium hover:bg-primary-glow transition-colors disabled:opacity-50"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Search"}
          </button>
        </form>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-xs text-muted-foreground self-center mr-2">
            Try:
          </span>
          {popular.map((p) => (
            <button
              key={p}
              onClick={() => {
                setQ(p);
                search(p);
              }}
              className="chip hover:border-primary hover:text-primary transition-colors"
            >
              {p}
            </button>
          ))}
        </div>

        {error && (
          <div className="mt-10 rounded-2xl border border-destructive/40 bg-destructive/10 p-6 text-sm flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-destructive shrink-0" />
            {error} — try a different term or check the spelling.
          </div>
        )}

        {result && (
          <div className="mt-10 grid lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
            <div className="bg-card p-8 lg:col-span-1">
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                brand
              </div>
              <div className="font-serif text-4xl mt-1">{result.brand}</div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mt-6">
                generic
              </div>
              <div className="text-lg">{result.generic}</div>
              {result.manufacturer && (
                <>
                  <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mt-4">
                    manufacturer
                  </div>
                  <div className="text-sm text-foreground/80">
                    {result.manufacturer}
                  </div>
                </>
              )}
              <a
                href={`https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=${encodeURIComponent(
                  result.generic
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                Full DailyMed monograph <ExternalLink className="h-3 w-3" />
              </a>
              <div className="mt-4 font-mono text-xs text-muted-foreground/60">
                Source: {source}
              </div>
            </div>
            <div className="lg:col-span-2 grid gap-px bg-border">
              {[
                { label: "Indications", value: result.indications },
                { label: "Dosage & administration", value: result.dosage },
                { label: "Warnings", value: result.warnings },
              ]
                .filter((s) => s.value)
                .map((s) => (
                  <div key={s.label} className="bg-card p-8">
                    <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
                      {s.label}
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/90 line-clamp-[12]">
                      {s.value}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        )}

        {!result && !error && !loading && (
          <div className="mt-16 rounded-3xl border border-dashed border-border p-12 text-center">
            <div className="font-serif text-3xl text-muted-foreground">
              Type a name to begin.
            </div>
            <div className="text-sm text-muted-foreground mt-2">
              Data pulled live from api.fda.gov · dailymed.nlm.nih.gov
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Rx;
