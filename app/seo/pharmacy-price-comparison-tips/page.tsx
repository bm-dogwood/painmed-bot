import type { Metadata } from "next";
import { Nav, Footer } from "@/components/Nav";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Pharmacy Price Comparison: How to Save on Pain Medications (2025)",
  description:
    "Learn how to compare pharmacy prices and save money on pain medications in 2025. Covers GoodRx, Mark Cuban's Cost Plus Drugs, discount programs, generic vs brand, and more.",
  path: "/seo/pharmacy-price-comparison-tips",
  keywords: [
    "pharmacy price comparison",
    "cheapest pharmacy for pain medication",
    "GoodRx pain medication",
    "how to save on prescription pain meds",
    "generic vs brand name pain medication",
    "cost plus drugs pain medication",
  ],
});

const FAQS = [
  {
    question: "Which pharmacy has the lowest prices on pain medications?",
    answer:
      "Prices vary significantly by medication, location, and whether you use a discount card. Cost Plus Drugs (costplusdrugs.com) often has the lowest prices on generics. GoodRx can find lower-than-insurance prices at major chains. Always compare before filling.",
  },
  {
    question: "Is GoodRx worth it for pain medication?",
    answer:
      "Yes — GoodRx can save 40–80% on generic pain medications at major pharmacies. It works especially well for common generics like gabapentin, cyclobenzaprine, and generic opioids. Simply show the GoodRx coupon at the pharmacy counter.",
  },
  {
    question: "Are generic pain medications as effective as brand name?",
    answer:
      "Yes. The FDA requires generic medications to have the same active ingredient, strength, form, and bioequivalence as brand-name drugs. Generic ibuprofen is identical in effect to Advil; generic acetaminophen is identical to Tylenol.",
  },
  {
    question: "Does Medicare cover pain medication?",
    answer:
      "Medicare Part D covers most prescription pain medications, including opioids. Coverage and costs vary by plan. The Inflation Reduction Act caps out-of-pocket drug spending for Medicare enrollees at $2,000/year starting in 2025.",
  },
];

const PRICE_TOOLS = [
  {
    name: "GoodRx",
    url: "goodrx.com",
    type: "Free discount card",
    savings: "Up to 80% on generics",
    works: "Most major pharmacy chains",
    notes: "Cannot be combined with insurance, but often beats insurance copay",
  },
  {
    name: "Cost Plus Drugs",
    url: "costplusdrugs.com",
    type: "Online pharmacy (Mark Cuban)",
    savings: "Up to 90% on generics",
    works: "Mail-order only; $5 shipping",
    notes: "Transparent cost-plus pricing model; growing formulary",
  },
  {
    name: "RxSaver",
    url: "rxsaver.com",
    type: "Free discount tool",
    savings: "Up to 85%",
    works: "Major chains",
    notes: "Powered by RxSS; good for comparing multiple pharmacies",
  },
  {
    name: "NeedyMeds",
    url: "needymeds.org",
    type: "Patient assistance finder",
    savings: "Free medication programs",
    works: "Manufacturer programs",
    notes: "Best for uninsured patients; connects to manufacturer PAPs",
  },
  {
    name: "RxAssist",
    url: "rxassist.org",
    type: "Patient assistance directory",
    savings: "Free or low-cost meds",
    works: "Pharmaceutical assistance programs",
    notes: "Comprehensive database of manufacturer assistance programs",
  },
  {
    name: "Blink Health",
    url: "blinkhealth.com",
    type: "Online price lock + pickup",
    savings: "Up to 80% off",
    works: "Nationwide pharmacies",
    notes: "Pay online, pick up at pharmacy; price is locked in",
  },
];

const SAMPLE_PRICES: { med: string; brand: string; generic: string; costPlus: string; goodrx: string }[] = [
  { med: "Ibuprofen 800mg (30 tabs)", brand: "$25 (Advil Rx)", generic: "$4–$8", costPlus: "$3.80", goodrx: "$4–$6" },
  { med: "Gabapentin 300mg (90 caps)", brand: "$180 (Neurontin)", generic: "$15–$30", costPlus: "$8.10", goodrx: "$12–$20" },
  { med: "Cyclobenzaprine 10mg (30 tabs)", brand: "$120 (Flexeril)", generic: "$10–$18", costPlus: "$5.70", goodrx: "$8–$15" },
  { med: "Tramadol 50mg (30 tabs)", brand: "$80 (Ultram)", generic: "$12–$22", costPlus: "$4.90", goodrx: "$10–$18" },
  { med: "Celecoxib 200mg (30 caps)", brand: "$290 (Celebrex)", generic: "$25–$50", costPlus: "$17.40", goodrx: "$20–$40" },
  { med: "Oxycodone 5mg (30 tabs)", brand: "N/A (generic only)", generic: "$30–$60", costPlus: "Not available", goodrx: "$25–$50" },
];

export default function PharmacyPriceComparisonPage() {
  return (
    <>
      <JsonLd type="FAQPage" faqs={FAQS} />
      <JsonLd
        type="MedicalWebPage"
        name="Pharmacy Price Comparison for Pain Medications"
        description="Guide to comparing pharmacy prices and saving on pain medications"
        path="/seo/pharmacy-price-comparison-tips"
      />
      <Nav />
      <main className="seo-page">
        <h1>Pharmacy Price Comparison: Save on Pain Medications (2025)</h1>
        <p>
          Pain medication costs in the United States can vary by several hundred percent depending
          on where you fill your prescription. A 30-day supply of gabapentin 300mg might cost $180
          at one pharmacy and $8 at another. This guide shows you exactly how to find the lowest
          prices using discount programs, online pharmacies, and patient assistance resources.
        </p>

        <div className="callout">
          <strong>Quick Tip:</strong> Always check Cost Plus Drugs and GoodRx before filling any
          prescription. For most generics, one of these two options will significantly beat your
          insurance copay.
        </div>

        <h2>Why Pain Medication Prices Vary So Much</h2>
        <p>
          US drug pricing is notoriously complex. The same drug can have wildly different prices
          across pharmacies due to rebate negotiations, formulary tier placement, pharmacy benefit
          manager (PBM) contracts, and retail markup. The list price (AWP) bears little relation
          to what pharmacies actually pay. Brand-name medications carry the highest premiums;
          generics are often 80–90% cheaper for an identical active ingredient.
        </p>
        <p>
          With the rise of transparent-pricing pharmacies like Cost Plus Drugs, and coupon
          aggregators like GoodRx, consumers now have more tools than ever to bypass inflated
          retail prices. The key is knowing how to use them.
        </p>

        <h2>Best Tools for Comparing Pharmacy Prices</h2>
        <table className="seo-table">
          <thead>
            <tr>
              <th>Tool</th>
              <th>Type</th>
              <th>Max Savings</th>
              <th>Where It Works</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {PRICE_TOOLS.map((tool) => (
              <tr key={tool.name}>
                <td><strong>{tool.name}</strong></td>
                <td>{tool.type}</td>
                <td>{tool.savings}</td>
                <td>{tool.works}</td>
                <td>{tool.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Sample Price Comparisons for Common Pain Medications</h2>
        <p>
          Prices below are approximate and vary by location and time. Always check current prices
          before filling.
        </p>
        <table className="seo-table">
          <thead>
            <tr>
              <th>Medication</th>
              <th>Brand Price</th>
              <th>Generic (Retail)</th>
              <th>Cost Plus Drugs</th>
              <th>GoodRx (est.)</th>
            </tr>
          </thead>
          <tbody>
            {SAMPLE_PRICES.map((row) => (
              <tr key={row.med}>
                <td>{row.med}</td>
                <td>{row.brand}</td>
                <td>{row.generic}</td>
                <td>{row.costPlus}</td>
                <td>{row.goodrx}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Generic vs Brand Name Pain Medication</h2>
        <p>
          The FDA requires generic medications to be bioequivalent to their brand-name counterparts.
          This means the same active ingredient, same strength, same route of administration, and
          the same rate and extent of absorption. Generics can legally differ in inactive
          ingredients (fillers, dyes, coatings), but not in therapeutic effect.
        </p>
        <p>
          For pain medications, switching to a generic is almost always safe and dramatically
          cheaper. Exceptions include rare cases where specific formulations (e.g., extended-release
          coatings) differ meaningfully — always ask your pharmacist when switching brands.
        </p>

        <h2>Insurance Tips for Pain Medications</h2>
        <p>
          Insurance formularies divide medications into tiers with different copays. Generic pain
          medications are typically on Tier 1 (lowest copay). If your medication is on a higher
          tier, ask your doctor about a therapeutic equivalent on Tier 1, or request a formulary
          exception if the lower-tier alternative is medically inappropriate for you.
        </p>
        <p>
          Prior authorization (PA) is common for opioids, brand-name NSAIDs, and newer non-opioid
          drugs like pregabalin. Your prescriber's office handles the PA process, but you can
          speed it up by providing supporting medical records. If denied, request a peer-to-peer
          review between your doctor and the insurer's medical director.
        </p>

        <h2>Patient Assistance Programs (PAPs)</h2>
        <p>
          Most major pharmaceutical manufacturers offer Patient Assistance Programs for uninsured
          or underinsured patients who cannot afford their medications. These programs can provide
          free or deeply discounted brand-name medications directly to qualifying patients.
          NeedyMeds.org and RxAssist.org maintain searchable directories of current programs.
          Income requirements vary, but many programs serve households up to 400% of the federal
          poverty level.
        </p>

        <section className="faq">
          <h2>Frequently Asked Questions</h2>
          {FAQS.map((faq) => (
            <div className="faq-item" key={faq.question}>
              <div className="faq-q">{faq.question}</div>
              <div className="faq-a">{faq.answer}</div>
            </div>
          ))}
        </section>

        <div className="disclaimer">
          Prices listed are estimates only and change frequently. Always verify current prices
          directly with pharmacies and discount programs. PainMed.Bot is not affiliated with any
          pharmacy or discount card program.
        </div>
      </main>
      <Footer />
    </>
  );
}
