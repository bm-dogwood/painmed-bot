"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const SiteFooter = () => (
  <footer className="border-t border-border mt-32">
    <div className="container py-14 grid md:grid-cols-4 gap-10">
      <div className="md:col-span-2">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="h-7 w-7 rounded-full bg-gradient-vial" />
          <span className="font-mono text-sm tracking-[0.2em]">
            PAINMED<span className="text-primary">.BOT</span>
          </span>
        </div>
        <p className="font-serif text-2xl leading-snug max-w-md">
          The independent reference for what's in your pillbox. Built on FDA,
          NIH, and OpenStates open data.
        </p>
      </div>
      <div>
        <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
          Tools
        </h4>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/otc" className="hover:text-primary">
              OTC Compare
            </Link>
          </li>
          <li>
            <Link href="/rx" className="hover:text-primary">
              Prescription Lookup
            </Link>
          </li>
          <li>
            <Link href="/interactions" className="hover:text-primary">
              Interaction Checker
            </Link>
          </li>
          <li>
            <Link href="/laws" className="hover:text-primary">
              State Opioid Laws
            </Link>
          </li>
          <li>
            <Link href="/prices" className="hover:text-primary">
              Pharmacy Prices
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
          Sources
        </h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>FDA openFDA Drug API</li>
          <li>NIH DailyMed</li>
          <li>OpenStates Legislation</li>
          <li>GoodRx Public Listings</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
        <span>
          © {new Date().getFullYear()} PAINMED.BOT — Informational use only. Not
          medical advice.
        </span>
        <span>v0.1.0 / build {Math.floor(Date.now() / 1e7)}</span>
      </div>
    </div>
  </footer>
);
