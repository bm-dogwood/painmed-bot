import type { Metadata } from "next";
import { Nav, Footer } from "@/components/Nav";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Opioid Prescription Laws by State (2025): Limits, PDMP & Requirements",
  description:
    "Complete guide to state opioid prescription laws in 2025. Covers prescription limits, prescription drug monitoring programs (PDMP), pill limits, and prescriber requirements for all 50 states.",
  path: "/seo/opioid-prescription-laws-by-state",
  keywords: [
    "opioid prescription laws by state",
    "state opioid laws 2025",
    "opioid prescribing limits",
    "PDMP requirements by state",
    "opioid pill limits",
    "opioid prescription regulations",
  ],
});

const FAQS = [
  {
    question: "What is a PDMP?",
    answer:
      "A Prescription Drug Monitoring Program (PDMP) is a state-run electronic database that tracks controlled substance prescriptions. Prescribers and pharmacists check the PDMP before dispensing opioids to identify potential misuse or 'doctor shopping.'",
  },
  {
    question: "How many opioid pills can a doctor prescribe at once?",
    answer:
      "Limits vary by state. Many states cap initial opioid prescriptions at a 3–7 day supply for acute pain. Some states like Ohio and Massachusetts limit first-time prescriptions to 7 days. Always ask your prescriber about your state's specific limits.",
  },
  {
    question: "Can I get an opioid prescription across state lines?",
    answer:
      "Opioid prescriptions (Schedule II controlled substances) generally cannot be transferred between states. Each state has its own DEA regulations. Telehealth opioid prescribing also has federal and state-specific rules.",
  },
  {
    question: "Are opioid laws stricter in some states than others?",
    answer:
      "Yes, significantly. States like Florida, Ohio, and Massachusetts have some of the strictest opioid regulations with mandatory PDMP checks, day-supply limits, and co-prescribing of naloxone. States vary widely in enforcement and specific requirements.",
  },
];

const STATE_DATA = [
  { state: "California", dayLimit: 7, pdmp: "CURES (mandatory)", naloxone: "Co-prescribe recommended", notes: "Acute pain limit: 7 days" },
  { state: "Florida", dayLimit: 3, pdmp: "E-FORCSE (mandatory)", naloxone: "Required at risk patients", notes: "3-day acute limit, strict enforcement" },
  { state: "New York", dayLimit: 7, pdmp: "ISTOP (mandatory)", naloxone: "Co-prescribe required", notes: "Electronic prescribing required" },
  { state: "Texas", dayLimit: 10, pdmp: "PMP AWARxE (mandatory)", naloxone: "Recommended", notes: "10-day acute limit" },
  { state: "Ohio", dayLimit: 7, pdmp: "OARRS (mandatory)", naloxone: "Required at risk patients", notes: "Among strictest in US" },
  { state: "Massachusetts", dayLimit: 7, pdmp: "PMP InterConnect (mandatory)", naloxone: "Co-prescribe required", notes: "Informed consent required" },
  { state: "Illinois", dayLimit: 7, pdmp: "PMP InterConnect (mandatory)", naloxone: "Recommended", notes: "7-day initial limit" },
  { state: "Pennsylvania", dayLimit: 7, pdmp: "PA PDMP (mandatory)", naloxone: "Co-prescribe recommended", notes: "Opioid treatment agreements" },
  { state: "Georgia", dayLimit: 5, pdmp: "PDMP (mandatory)", naloxone: "Recommended", notes: "5-day initial limit" },
  { state: "Arizona", dayLimit: 5, pdmp: "AIMS (mandatory)", naloxone: "Co-prescribe required", notes: "Good Samaritan protections" },
];

export default function OpioidLawsByStatePage() {
  return (
    <>
      <JsonLd type="FAQPage" faqs={FAQS} />
      <JsonLd
        type="MedicalWebPage"
        name="Opioid Prescription Laws by State 2025"
        description="Guide to state opioid prescription laws, PDMP programs, and prescribing limits"
        path="/seo/opioid-prescription-laws-by-state"
      />
      <Nav />
      <main className="seo-page">
        <h1>Opioid Prescription Laws by State (2025)</h1>
        <p>
          Opioid prescribing in the United States is governed by a complex patchwork of federal DEA
          regulations and individual state laws. Since the height of the opioid crisis in the mid-
          2010s, most states have enacted strict opioid prescribing limits, mandatory Prescription
          Drug Monitoring Program (PDMP) checks, and naloxone co-prescribing requirements. This
          guide summarizes the key regulations you need to know.
        </p>

        <div className="callout">
          <strong>Note:</strong> Opioid laws change frequently. Always verify current regulations
          with your state health department or a licensed prescriber. This page was last reviewed
          in 2025.
        </div>

        <h2>Federal Baseline: DEA Schedule II Rules</h2>
        <p>
          At the federal level, most opioids (oxycodone, hydrocodone, fentanyl, morphine) are
          classified as Schedule II controlled substances by the DEA. This means:
        </p>
        <ul>
          <li>No refills — a new prescription is required each time</li>
          <li>Electronic prescribing for controlled substances (EPCS) increasingly required</li>
          <li>Prescribers must hold a valid DEA registration</li>
          <li>Pharmacies must verify prescriber DEA numbers</li>
          <li>
            The CDC's 2022 Clinical Practice Guideline recommends the lowest effective dose and
            duration
          </li>
        </ul>

        <h2>Prescription Drug Monitoring Programs (PDMPs)</h2>
        <p>
          All 50 states now operate a Prescription Drug Monitoring Program. PDMPs are electronic
          databases that record every controlled substance prescription dispensed. In most states,
          prescribers are legally required to check the PDMP before prescribing opioids. PDMP data
          is increasingly shared between states via interstate data-sharing networks like PMP
          InterConnect and RxCheck.
        </p>
        <p>
          PDMPs help identify "doctor shopping" (seeking prescriptions from multiple providers),
          high-risk patients, and overprescribing patterns. Some states now use AI-assisted PDMP
          analytics to flag potential misuse before a prescription is filled.
        </p>

        <h2>State Opioid Prescribing Laws: Overview Table</h2>
        <p>
          The following table summarizes prescribing limits and requirements for selected states.
          Always verify with your state's medical board for the most current rules.
        </p>
        <table className="seo-table">
          <thead>
            <tr>
              <th>State</th>
              <th>Initial Day Limit</th>
              <th>PDMP Program</th>
              <th>Naloxone</th>
              <th>Key Notes</th>
            </tr>
          </thead>
          <tbody>
            {STATE_DATA.map((row) => (
              <tr key={row.state}>
                <td>{row.state}</td>
                <td>{row.dayLimit} days</td>
                <td>{row.pdmp}</td>
                <td>{row.naloxone}</td>
                <td>{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Naloxone Co-Prescribing Requirements</h2>
        <p>
          Naloxone (Narcan) is an opioid overdose reversal medication. An increasing number of
          states require or strongly recommend that prescribers co-prescribe naloxone when
          prescribing high-dose opioids or to patients at elevated overdose risk. As of 2025,
          naloxone is available without a prescription in all 50 states, and many states have
          enacted standing orders enabling pharmacies to dispense it directly.
        </p>

        <h2>Telehealth & Opioid Prescribing</h2>
        <p>
          Telehealth opioid prescribing rules have evolved significantly since the COVID-19 pandemic.
          The DEA has established new rules for telemedicine-based controlled substance prescribing,
          including requirements for in-person evaluation before prescribing certain opioids. State
          rules on telehealth prescribing vary; some states have enacted additional restrictions
          beyond federal minimums.
        </p>

        <h2>Patient Rights Under Opioid Laws</h2>
        <p>
          While opioid laws aim to reduce misuse, patients with legitimate pain conditions retain
          important rights. If you are denied medication you believe you need, you have the right to
          request a second opinion, request documentation of the prescriber's reasoning, and file a
          complaint with your state medical board if you believe care was withheld inappropriately.
          Many states also have intractable pain treatment acts that protect patients with chronic
          pain from being undertreated.
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
          This page provides general legal information only and is not legal or medical advice.
          Laws change frequently — always verify with your state health department, medical board,
          or a licensed attorney.
        </div>
      </main>
      <Footer />
    </>
  );
}
