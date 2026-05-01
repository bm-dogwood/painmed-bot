import Link from "next/link";

export function Nav() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          Pain<span>Med</span>.Bot
        </Link>
        <ul className="nav-links">
          <li><Link href="/compare">Compare Meds</Link></li>
          <li><Link href="/interactions">Interactions</Link></li>
          <li><Link href="/prescriptions">Rx Info</Link></li>
          <li><Link href="/opioid-laws">Opioid Laws</Link></li>
          <li><Link href="/prices">Prices</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} PainMed.Bot — Pain Medication Comparison & Safety Tool
        </p>
        <p>
          <Link href="/seo/tylenol-vs-advil-vs-aleve">Tylenol vs Advil</Link> ·{" "}
          <Link href="/seo/drug-interaction-checker-guide">Drug Interactions</Link> ·{" "}
          <Link href="/seo/opioid-prescription-laws-by-state">Opioid Laws</Link> ·{" "}
          <Link href="/seo/pharmacy-price-comparison-tips">Price Comparison</Link>
        </p>
        <p style={{ marginTop: "1rem", fontSize: "0.75rem" }}>
          ⚠️ For informational purposes only. Always consult a healthcare professional before
          taking any medication. Not medical advice.
        </p>
      </div>
    </footer>
  );
}
