"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/otc", label: "OTC Compare" },
  { href: "/rx", label: "Prescriptions" },
  { href: "/interactions", label: "Interactions" },
  { href: "/laws", label: "State Laws" },
  { href: "/prices", label: "Pharmacy Prices" },
] as const;

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container">
        <div
          className={`glass rounded-full px-4 md:px-6 py-3 flex items-center justify-between transition-all ${
            scrolled ? "shadow-soft" : ""
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5">
            <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-vial">
              <span className="absolute inset-0 rounded-full pulse-ring" />
              <span className="block h-2 w-2 rounded-full bg-background" />
            </span>
            <span className="font-mono text-sm tracking-[0.2em]">
              PAINMED<span className="text-primary">.BOT</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                  isActive(l.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <span className="chip">
              <span className="marker-dot" /> live data
            </span>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden glass mt-2 rounded-2xl p-3 flex flex-col">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-2 rounded-xl text-sm ${
                  isActive(l.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
