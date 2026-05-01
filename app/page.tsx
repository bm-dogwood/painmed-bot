"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Pill,
  Scale,
  Shield,
  MapPin,
  Receipt,
  Sparkles,
} from "lucide-react";
import hero from "@/public/hero.jpeg";
import grid from "@/public/pills.jpeg";
import capsule from "@/public/capsule.jpeg";

const features = [
  {
    href: "/otc",
    n: "01",
    title: "OTC Showdown",
    desc: "Tylenol vs Advil vs Aleve — head-to-head on dose, onset, and risk.",
    icon: Scale,
  },
  {
    href: "/rx",
    n: "02",
    title: "Prescription Atlas",
    desc: "Search any Rx pain medication. Indications, warnings, schedule.",
    icon: Pill,
  },
  {
    href: "/interactions",
    n: "03",
    title: "Interaction Lab",
    desc: "Drop in your meds. We flag the dangerous combinations.",
    icon: Shield,
  },
  {
    href: "/laws",
    n: "04",
    title: "50-State Opioid Map",
    desc: "Day limits, refill rules, PDMP requirements — by state.",
    icon: MapPin,
  },
  {
    href: "/prices",
    n: "05",
    title: "Pharmacy Price Floor",
    desc: "Cash prices side-by-side across major chains.",
    icon: Receipt,
  },
];

const ticker = [
  "FDA openFDA — 2.1M adverse event records",
  "DailyMed — 138,000 labeled drugs",
  "OpenStates — 50 legislatures tracked",
  "Updated nightly",
  "Independent · Ad-free · Source-cited",
];

export default function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="container relative z-10 pt-6 pb-20 md:pb-32">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono text-xs text-muted-foreground">
                  [ INDEX 00 / REFERENCE ]
                </span>
                <span className="h-px flex-1 bg-border max-w-[120px]" />
                <span className="chip">
                  <span className="marker-dot" /> sourced from FDA · NIH
                </span>
              </div>
              <h1 className="font-serif text-[14vw] md:text-[9vw] leading-[0.85] tracking-tight">
                Know <span className="blood-text italic">exactly</span>
                <br />
                what you&apos;re
                <br />
                swallowing.
              </h1>
              <p className="mt-8 text-lg text-muted-foreground max-w-xl">
                PAINMED.BOT is the independent pillbox companion — comparing
                over‑the‑counter and prescription pain medications across dose,
                risk, law, and price. No sponsored placements. Just receipts.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/otc"
                  className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium shadow-blood hover:scale-[1.02] transition-transform"
                >
                  Start with OTC Showdown
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="/interactions"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/60 transition-colors"
                >
                  Check an interaction
                </Link>
              </div>

              <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
                {[
                  { k: "138K", v: "labeled drugs indexed" },
                  { k: "50", v: "state law profiles" },
                  { k: "0", v: "ads or sponsorships" },
                ].map((s) => (
                  <div key={s.v}>
                    <div className="font-serif text-4xl">{s.k}</div>
                    <div className="text-xs text-muted-foreground mt-1 leading-snug">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border scan-line">
                <Image
                  src={hero}
                  alt="Glossy red and white pain medication capsules suspended on a black background"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-foreground/80">
                  <span>● rec</span>
                  <span>painmed/sample-001</span>
                  <span>{new Date().toISOString().slice(0, 10)}</span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 glass rounded-xl p-4">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    specimen 001
                  </div>
                  <div className="font-serif text-2xl">Ibuprofen 200 mg</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    NSAID · Onset 30m · Half-life 2h
                  </div>
                </div>
              </div>

              <div className="absolute -left-6 -top-6 hidden md:block">
                <div className="h-28 w-28 rounded-full border border-border flex items-center justify-center spin-slow">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    pain · med · bot · 2026 ·
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TICKER */}
        <div className="border-y border-border bg-secondary/30 overflow-hidden">
          <div className="flex ticker whitespace-nowrap py-4 gap-12 font-mono text-xs uppercase tracking-widest">
            {[...ticker, ...ticker, ...ticker].map((t, i) => (
              <span
                key={i}
                className="flex items-center gap-12 text-muted-foreground"
              >
                <span className="marker-dot" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE INDEX */}
      <section className="container py-24 md:py-32">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="font-mono text-xs text-muted-foreground mb-3">
              [ THE TOOLS · 05 ]
            </div>
            <h2 className="font-serif text-5xl md:text-6xl max-w-2xl leading-[0.95]">
              Five instruments. One pillbox.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Each tool answers a single question with a single source of truth.
            Click in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {features.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="group relative bg-card p-8 md:p-10 hover:bg-secondary/50 transition-colors min-h-[260px] flex flex-col justify-between"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  {f.n}
                </span>
                <f.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <h3 className="font-serif text-3xl md:text-4xl mb-2 group-hover:text-primary transition-colors">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm max-w-sm">
                  {f.desc}
                </p>
              </div>
              <div className="absolute bottom-6 right-6 h-10 w-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
          <div className="bg-card p-8 md:p-10 min-h-[260px] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-20 -top-10 h-[130%] pointer-events-none">
              <Image
                src={capsule}
                alt=""
                width={300}
                height={400}
                className="opacity-40 object-contain"
              />
            </div>
            <span className="font-mono text-xs text-muted-foreground relative">
              06
            </span>
            <div className="relative">
              <h3 className="font-serif text-3xl md:text-4xl mb-2">
                Soon: Pain Diary
              </h3>
              <p className="text-muted-foreground text-sm max-w-sm">
                A private log of dose, time, and relief — to talk to your doctor
                in numbers, not guesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPLIT EDITORIAL */}
      <section className="container py-24 md:py-32 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5 relative aspect-square rounded-3xl overflow-hidden border border-border">
          <Image
            src={grid}
            alt="A flat lay of white tablets and red capsules arranged on a matte black surface"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
        <div className="lg:col-span-7 lg:pl-10">
          <div className="font-mono text-xs text-muted-foreground mb-4">
            [ PRINCIPLE / 01 ]
          </div>
          <h2 className="font-serif text-5xl md:text-6xl leading-[0.95]">
            Painkillers are
            <br />
            the most-used,
            <br />
            <span className="blood-text italic">least-understood</span>
            <br />
            drugs in your house.
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-6 text-sm">
            <p className="text-muted-foreground">
              The average household keeps four pain medications on hand. Most
              people cannot name the active ingredient in any of them. That gap
              is where accidental overdoses, kidney damage, and dangerous
              interactions live.
            </p>
            <p className="text-muted-foreground">
              We pulled the openFDA label corpus, NIH DailyMed monographs, and
              every state&apos;s controlled-substance statute into a single,
              searchable surface. Then we removed the ads.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {[
              "Acetaminophen",
              "Ibuprofen",
              "Naproxen",
              "Aspirin",
              "Tramadol",
              "Oxycodone",
              "Hydrocodone",
              "Codeine",
            ].map((d) => (
              <span key={d} className="chip">
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-24">
        <div className="relative rounded-3xl border border-border overflow-hidden p-10 md:p-16 bg-gradient-blood">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative max-w-2xl">
            <Sparkles className="h-6 w-6 text-accent mb-4" />
            <h2 className="font-serif text-5xl md:text-6xl leading-[0.95]">
              Ready to read the label, finally?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg">
              Start with the OTC showdown — it takes 20 seconds and you&apos;ll
              never confuse Tylenol and Advil again.
            </p>
            <Link
              href="/otc"
              className="mt-8 inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Open the showdown <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
