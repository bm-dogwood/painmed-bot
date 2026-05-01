"use client";

import { useMemo, useState } from "react";

import { Plus, X, AlertTriangle, ShieldCheck } from "lucide-react";

const drugs = [
  "Acetaminophen",
  "Ibuprofen",
  "Naproxen",
  "Aspirin",
  "Tramadol",
  "Oxycodone",
  "Hydrocodone",
  "Codeine",
  "Morphine",
  "Gabapentin",
  "Warfarin",
  "Alcohol",
  "Sertraline",
  "Fluoxetine",
  "Lisinopril",
  "Metformin",
  "Diazepam",
  "Alprazolam",
];

type Severity = "danger" | "warning" | "info";
interface Pair {
  a: string;
  b: string;
  severity: Severity;
  note: string;
}

const interactions: Pair[] = [
  {
    a: "Ibuprofen",
    b: "Warfarin",
    severity: "danger",
    note: "NSAID + anticoagulant dramatically raises GI and intracranial bleeding risk.",
  },
  {
    a: "Naproxen",
    b: "Warfarin",
    severity: "danger",
    note: "Same NSAID + anticoagulant bleeding risk as ibuprofen.",
  },
  {
    a: "Aspirin",
    b: "Warfarin",
    severity: "danger",
    note: "Combined antiplatelet + anticoagulant — major bleeding risk.",
  },
  {
    a: "Acetaminophen",
    b: "Alcohol",
    severity: "danger",
    note: "Chronic alcohol use multiplies the risk of acetaminophen-induced liver injury.",
  },
  {
    a: "Tramadol",
    b: "Sertraline",
    severity: "danger",
    note: "Serotonin syndrome risk — both increase serotonin.",
  },
  {
    a: "Tramadol",
    b: "Fluoxetine",
    severity: "danger",
    note: "Serotonin syndrome risk.",
  },
  {
    a: "Oxycodone",
    b: "Diazepam",
    severity: "danger",
    note: "Opioid + benzodiazepine — FDA boxed warning for fatal respiratory depression.",
  },
  {
    a: "Hydrocodone",
    b: "Alprazolam",
    severity: "danger",
    note: "Opioid + benzodiazepine — FDA boxed warning for fatal respiratory depression.",
  },
  {
    a: "Codeine",
    b: "Alcohol",
    severity: "danger",
    note: "Additive CNS and respiratory depression.",
  },
  {
    a: "Ibuprofen",
    b: "Lisinopril",
    severity: "warning",
    note: "NSAIDs blunt ACE-inhibitor effect and can worsen kidney function.",
  },
  {
    a: "Naproxen",
    b: "Lisinopril",
    severity: "warning",
    note: "Same as ibuprofen — reduced BP control and kidney stress.",
  },
  {
    a: "Ibuprofen",
    b: "Aspirin",
    severity: "warning",
    note: "Ibuprofen can block aspirin's cardioprotective antiplatelet effect.",
  },
  {
    a: "Acetaminophen",
    b: "Warfarin",
    severity: "warning",
    note: "Regular high-dose acetaminophen can elevate INR.",
  },
  {
    a: "Gabapentin",
    b: "Oxycodone",
    severity: "warning",
    note: "Additive sedation and respiratory depression.",
  },
];

const sev = {
  danger: {
    label: "Major",
    text: "text-danger",
    bg: "bg-danger/10",
    border: "border-danger/40",
  },
  warning: {
    label: "Moderate",
    text: "text-warning",
    bg: "bg-warning/10",
    border: "border-warning/40",
  },
  info: {
    label: "Minor",
    text: "text-muted-foreground",
    bg: "bg-muted/30",
    border: "border-border",
  },
} as const;

export default function InteractionsPage() {
  const [selected, setSelected] = useState<string[]>(["Ibuprofen", "Warfarin"]);

  const found = useMemo(() => {
    const set = new Set(selected);
    return interactions.filter((i) => set.has(i.a) && set.has(i.b));
  }, [selected]);

  const toggle = (d: string) =>
    setSelected((s) => (s.includes(d) ? s.filter((x) => x !== d) : [...s, d]));

  return (
    <>
      <section className="container py-12 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
            your stack
          </div>
          <div className="rounded-2xl border border-border p-4 min-h-[120px] flex flex-wrap gap-2">
            {selected.length === 0 && (
              <span className="text-muted-foreground text-sm self-center">
                No drugs selected.
              </span>
            )}
            {selected.map((d) => (
              <button
                key={d}
                onClick={() => toggle(d)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-sm"
              >
                {d} <X className="h-3.5 w-3.5" />
              </button>
            ))}
          </div>

          <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mt-8 mb-3">
            add to stack
          </div>
          <div className="flex flex-wrap gap-2">
            {drugs.map((d) => {
              const on = selected.includes(d);
              return (
                <button
                  key={d}
                  onClick={() => toggle(d)}
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm border transition-colors ${
                    on
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border hover:border-primary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Plus
                    className={`h-3.5 w-3.5 transition-transform ${
                      on ? "rotate-45" : ""
                    }`}
                  />{" "}
                  {d}
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
            findings
          </div>
          {found.length === 0 ? (
            <div className="rounded-2xl border border-success/30 bg-success/5 p-8 flex items-start gap-4">
              <ShieldCheck className="h-6 w-6 text-success flex-shrink-0" />
              <div>
                <div className="font-serif text-3xl">
                  No flagged interactions.
                </div>
                <p className="text-muted-foreground text-sm mt-2">
                  This is a known-pairs database for educational use. Always
                  confirm with your pharmacist — your full medical history
                  matters.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {found.map((p, i) => {
                const s = sev[p.severity];
                return (
                  <div
                    key={i}
                    className={`rounded-2xl border ${s.border} ${s.bg} p-6`}
                  >
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className={`h-5 w-5 ${s.text}`} />
                        <span className="font-serif text-2xl">
                          {p.a} <span className="text-muted-foreground">×</span>{" "}
                          {p.b}
                        </span>
                      </div>
                      <span className={`chip ${s.text} border-current`}>
                        {s.label}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/90">{p.note}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
