"use client";
import { useState } from "react";

import { Check, X, AlertTriangle } from "lucide-react";

const meds = [
  {
    id: "tylenol",
    brand: "Tylenol",
    generic: "Acetaminophen",
    color: "from-rose-500 to-amber-400",
    class: "Analgesic / Antipyretic",
    onset: "30–60 min",
    duration: "4–6 hr",
    maxDay: "3,000 mg (OTC)",
    pediatric: true,
    pregnancy: "Generally accepted",
    inflammation: false,
    stomach: "Gentle",
    kidney: "Generally safe",
    liver: "High risk if exceeded",
    bleeding: "No effect",
    use: "Headache, fever, mild pain. First-line in pregnancy and for those who can't take NSAIDs.",
    avoid:
      "Heavy alcohol use; existing liver disease; combining with other acetaminophen products.",
  },
  {
    id: "advil",
    brand: "Advil / Motrin",
    generic: "Ibuprofen",
    color: "from-orange-500 to-rose-500",
    class: "NSAID",
    onset: "20–30 min",
    duration: "4–6 hr",
    maxDay: "1,200 mg (OTC)",
    pediatric: true,
    pregnancy: "Avoid 3rd trimester",
    inflammation: true,
    stomach: "Can irritate",
    kidney: "Caution",
    liver: "Generally safe",
    bleeding: "Increases risk",
    use: "Inflammation, menstrual cramps, dental and muscular pain, fever.",
    avoid:
      "Ulcers, kidney disease, late pregnancy, blood thinners, recent heart surgery.",
  },
  {
    id: "aleve",
    brand: "Aleve",
    generic: "Naproxen",
    color: "from-amber-500 to-red-500",
    class: "NSAID (long-acting)",
    onset: "30–60 min",
    duration: "8–12 hr",
    maxDay: "660 mg (OTC)",
    pediatric: false,
    pregnancy: "Avoid 3rd trimester",
    inflammation: true,
    stomach: "Higher GI risk",
    kidney: "Caution",
    liver: "Generally safe",
    bleeding: "Increases risk",
    use: "Arthritis, persistent muscular pain, menstrual pain — fewer doses per day.",
    avoid: "Ulcers, kidney disease, late pregnancy, heart failure.",
  },
];

const rows: { label: string; key: keyof (typeof meds)[number] }[] = [
  { label: "Drug class", key: "class" },
  { label: "Onset", key: "onset" },
  { label: "Duration", key: "duration" },
  { label: "Max daily (adult)", key: "maxDay" },
  { label: "Reduces inflammation", key: "inflammation" },
  { label: "Pediatric use", key: "pediatric" },
  { label: "Pregnancy", key: "pregnancy" },
  { label: "Stomach", key: "stomach" },
  { label: "Kidney", key: "kidney" },
  { label: "Liver", key: "liver" },
  { label: "Bleeding risk", key: "bleeding" },
];

const renderCell = (v: unknown) => {
  if (v === true)
    return (
      <span className="inline-flex items-center gap-1 text-success">
        <Check className="h-4 w-4" /> Yes
      </span>
    );
  if (v === false)
    return (
      <span className="inline-flex items-center gap-1 text-muted-foreground">
        <X className="h-4 w-4" /> No
      </span>
    );
  return <span>{String(v)}</span>;
};

const OTC = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <section className="container py-12">
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {meds.map((m) => {
            const isActive = active === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setActive(isActive ? null : m.id)}
                className={`text-left rounded-2xl border p-6 transition-all relative overflow-hidden ${
                  isActive
                    ? "border-primary shadow-blood"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div
                  className={`absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-30 blur-2xl bg-gradient-to-br ${m.color}`}
                />
                <div className="font-mono text-xs text-muted-foreground">
                  {m.id.toUpperCase()}
                </div>
                <div className="font-serif text-3xl mt-2">{m.brand}</div>
                <div className="text-sm text-muted-foreground">{m.generic}</div>
                <div className="mt-6 flex items-center justify-between text-xs font-mono uppercase tracking-wider">
                  <span>{m.class}</span>
                  <span className="text-primary">
                    {isActive ? "selected" : "tap to focus"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="rounded-3xl border border-border overflow-hidden">
          <div className="grid grid-cols-4 bg-secondary/50">
            <div className="p-4 font-mono text-xs uppercase text-muted-foreground tracking-wider">
              Property
            </div>
            {meds.map((m) => (
              <div
                key={m.id}
                className={`p-4 font-mono text-xs uppercase tracking-wider transition-opacity ${
                  active && active !== m.id ? "opacity-30" : ""
                }`}
              >
                {m.brand}
              </div>
            ))}
          </div>
          {rows.map((r, i) => (
            <div
              key={r.label}
              className={`grid grid-cols-4 ${
                i % 2 ? "bg-card" : "bg-background"
              } border-t border-border`}
            >
              <div className="p-4 text-sm text-muted-foreground">{r.label}</div>
              {meds.map((m) => (
                <div
                  key={m.id}
                  className={`p-4 text-sm transition-opacity ${
                    active && active !== m.id ? "opacity-30" : ""
                  }`}
                >
                  {renderCell(m[r.key])}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {meds.map((m) => (
            <div
              key={m.id}
              className={`rounded-2xl border border-border p-6 transition-opacity ${
                active && active !== m.id ? "opacity-40" : ""
              }`}
            >
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
                when to choose {m.brand}
              </div>
              <p className="font-serif text-xl leading-snug">{m.use}</p>
              <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground border-t border-border pt-4">
                <AlertTriangle className="h-4 w-4 text-warning mt-0.5 flex-shrink-0" />
                <span>
                  <span className="text-foreground font-medium">
                    Avoid if:{" "}
                  </span>
                  {m.avoid}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OTC;
