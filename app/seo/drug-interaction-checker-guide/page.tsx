import type { Metadata } from "next";
import { Nav, Footer } from "@/components/Nav";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Drug Interaction Checker: Pain Medication Interactions You Must Know",
  description:
    "Learn about dangerous drug interactions involving pain medications. Check interactions between Tylenol, Advil, opioids, blood thinners, antidepressants, and more. Free interaction guide.",
  path: "/seo/drug-interaction-checker-guide",
  keywords: [
    "drug interaction checker",
    "pain medication drug interactions",
    "ibuprofen drug interactions",
    "tylenol drug interactions",
    "opioid drug interactions",
    "medication interaction checker free",
  ],
});

const FAQS = [
  {
    question: "Can I take ibuprofen with blood thinners?",
    answer:
      "Generally no. Ibuprofen (and other NSAIDs) combined with blood thinners like warfarin significantly increases bleeding risk. Acetaminophen is typically safer for pain relief in patients on anticoagulants, but consult your doctor.",
  },
  {
    question: "Can you take Tylenol and ibuprofen at the same time?",
    answer:
      "Yes, they can be taken together because they work through different mechanisms. Some pain protocols even alternate them. However, always stay within daily dose limits for each and consult a pharmacist.",
  },
  {
    question: "What medications interact badly with opioids?",
    answer:
      "Opioids interact dangerously with benzodiazepines (Xanax, Valium), alcohol, other CNS depressants, certain antidepressants (MAOIs, SSRIs), and muscle relaxants. These combinations can cause respiratory depression and death.",
  },
  {
    question: "Is it safe to take Advil with antidepressants?",
    answer:
      "NSAIDs like Advil combined with SSRIs or SNRIs significantly increase GI bleeding risk. This combination should be avoided or used only with gastroprotective agents (e.g., a proton pump inhibitor) under medical guidance.",
  },
];

const INTERACTIONS = [
  {
    drug1: "Ibuprofen (Advil)",
    drug2: "Warfarin (Coumadin)",
    severity: "Severe",
    effect: "Increased bleeding risk; INR elevation",
    action: "Avoid — use acetaminophen instead",
  },
  {
    drug1: "Opioids",
    drug2: "Benzodiazepines",
    severity: "Life-threatening",
    effect: "Respiratory depression, coma, death",
    action: "Contraindicated — requires strict monitoring if unavoidable",
  },
  {
    drug1: "Acetaminophen",
    drug2: "Alcohol",
    severity: "Severe",
    effect: "Liver damage (hepatotoxicity)",
    action: "Do not combine; limit alcohol with any acetaminophen use",
  },
  {
    drug1: "NSAIDs",
    drug2: "SSRIs / SNRIs",
    severity: "Moderate-Severe",
    effect: "Increased GI bleeding risk",
    action: "Add PPI; consider acetaminophen instead",
  },
  {
    drug1: "Ibuprofen",
    drug2: "ACE Inhibitors / ARBs",
    severity: "Moderate",
    effect: "Reduced antihypertensive effect; kidney stress",
    action: "Monitor BP and kidney function closely",
  },
  {
    drug1: "Opioids",
    drug2: "MAOIs",
    severity: "Life-threatening",
    effect: "Serotonin syndrome, seizures",
    action: "Absolute contraindication — wait 14 days after MAOI discontinuation",
  },
  {
    drug1: "Naproxen (Aleve)",
    drug2: "Lithium",
    severity: "Moderate-Severe",
    effect: "Elevated lithium levels (toxicity risk)",
    action: "Monitor lithium levels; consider alternative analgesic",
  },
  {
    drug1: "Aspirin",
    drug2: "Ibuprofen",
    severity: "Moderate",
    effect: "Ibuprofen blunts aspirin's cardioprotective effect",
    action: "Take aspirin 30 min before or 8+ hours after ibuprofen",
  },
];

const severityColor: Record<string, string> = {
  "Life-threatening": "#ff4444",
  Severe: "#ff6b35",
  "Moderate-Severe": "#ffaa00",
  Moderate: "#ffd700",
};

export default function DrugInteractionCheckerGuidePage() {
  return (
    <>
      <JsonLd type="FAQPage" faqs={FAQS} />
      <JsonLd
        type="MedicalWebPage"
        name="Drug Interaction Checker Guide"
        description="Guide to dangerous drug interactions involving pain medications"
        path="/seo/drug-interaction-checker-guide"
      />
      <Nav />
      <main className="seo-page">
        <h1>Drug Interaction Checker: Pain Medication Interactions Guide</h1>
        <p>
          Drug interactions involving pain medications are among the most clinically significant —
          and most commonly overlooked — medication safety issues. Whether you take OTC pain
          relievers like Tylenol or Advil, or prescription opioids and NSAIDs, understanding which
          combinations are dangerous can literally save your life.
        </p>

        <div className="callout warning-callout">
          <strong>⚠️ Critical Safety Note:</strong> The opioid + benzodiazepine combination is the
          leading cause of prescription drug overdose deaths in the United States. If you take both,
          discuss with your physician immediately.
        </div>

        <h2>How Drug Interactions Work</h2>
        <p>
          Drug interactions occur when one medication alters the pharmacokinetics (absorption,
          distribution, metabolism, excretion) or pharmacodynamics (mechanism of action) of another.
          For pain medications, the most dangerous interactions typically involve:
        </p>
        <ul>
          <li>
            <strong>Central nervous system (CNS) depression:</strong> Combining opioids with other
            CNS depressants (benzodiazepines, alcohol, muscle relaxants, antihistamines) compounds
            sedation and respiratory depression.
          </li>
          <li>
            <strong>Bleeding risk:</strong> NSAIDs inhibit platelet function and damage the gastric
            mucosa. Combined with anticoagulants or SSRIs, this effect is multiplied.
          </li>
          <li>
            <strong>Hepatotoxicity:</strong> Acetaminophen is metabolized by the liver. Drugs,
            alcohol, and conditions that stress the liver dramatically lower the toxic threshold.
          </li>
          <li>
            <strong>Serotonin syndrome:</strong> Some opioids (tramadol, meperidine) have
            serotonergic properties that interact dangerously with antidepressants and triptans.
          </li>
        </ul>

        <h2>Most Dangerous Pain Medication Interactions</h2>
        <p>
          The following table lists the most clinically significant drug interactions involving
          common pain medications, ranked by severity:
        </p>
        <table className="seo-table">
          <thead>
            <tr>
              <th>Drug 1</th>
              <th>Drug 2</th>
              <th>Severity</th>
              <th>Effect</th>
              <th>Recommended Action</th>
            </tr>
          </thead>
          <tbody>
            {INTERACTIONS.map((row) => (
              <tr key={row.drug1 + row.drug2}>
                <td>{row.drug1}</td>
                <td>{row.drug2}</td>
                <td style={{ color: severityColor[row.severity] ?? "inherit", fontWeight: 600 }}>
                  {row.severity}
                </td>
                <td>{row.effect}</td>
                <td>{row.action}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>NSAIDs and Cardiovascular Medications</h2>
        <p>
          NSAIDs (ibuprofen, naproxen, aspirin) interact with several common cardiovascular drugs.
          They can reduce the effectiveness of ACE inhibitors and ARBs used to treat high blood
          pressure and heart failure. They can also impair kidney function in patients on diuretics
          — a combination sometimes called the "triple whammy" (NSAID + ACE inhibitor + diuretic)
          due to its high risk of acute kidney injury.
        </p>
        <p>
          Patients on daily low-dose aspirin for heart protection should be aware that ibuprofen
          can competitively bind to COX-1 receptors and block aspirin's antiplatelet effect. If you
          need both, take aspirin 30 minutes before ibuprofen or at least 8 hours after.
        </p>

        <h2>Opioids and Antidepressants</h2>
        <p>
          Several opioids have serotonergic activity. Tramadol and meperidine are the highest-risk
          opioids for serotonin syndrome when combined with SSRIs, SNRIs, TCAs, or MAOIs. Symptoms
          of serotonin syndrome include agitation, confusion, rapid heart rate, sweating,
          diarrhea, and muscle twitching — and it can be life-threatening.
        </p>
        <p>
          Even standard opioids like oxycodone and hydrocodone can interact with MAOIs, causing
          severe hypotension or respiratory depression. MAOIs must be discontinued at least 14 days
          before initiating any opioid therapy.
        </p>

        <h2>Hidden Drug Interactions: Supplement & OTC Risks</h2>
        <p>
          Many patients do not report supplements to their doctors, creating hidden interaction
          risks:
        </p>
        <ul>
          <li>
            <strong>Fish oil / Omega-3s + NSAIDs:</strong> Additive antiplatelet effect; increased
            bleeding risk.
          </li>
          <li>
            <strong>St. John's Wort + Opioids:</strong> St. John's Wort induces CYP3A4 enzymes,
            which metabolize many opioids — reducing their effectiveness and potentially causing
            withdrawal in dependent patients.
          </li>
          <li>
            <strong>Ginkgo biloba + NSAIDs:</strong> Increased bleeding risk.
          </li>
          <li>
            <strong>Valerian root + Opioids / Benzodiazepines:</strong> Additive CNS depression.
          </li>
          <li>
            <strong>Kava + Acetaminophen:</strong> Combined liver stress; potential hepatotoxicity.
          </li>
        </ul>

        <h2>How to Use a Drug Interaction Checker</h2>
        <p>
          To check interactions, list all medications and supplements you take — including doses.
          Use our interactive drug interaction checker at{" "}
          <a href="/interactions">PainMed.Bot/interactions</a>, or consult tools like Drugs.com
          Interaction Checker or Medscape Drug Interaction Checker. When in doubt, your pharmacist
          is your best resource — they have access to your full medication history and can flag
          interactions your doctor may have missed.
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
          This guide is for educational purposes only. Always consult your pharmacist or physician
          before combining medications. In case of suspected overdose or serious reaction, call 911
          or Poison Control at 1-800-222-1222.
        </div>
      </main>
      <Footer />
    </>
  );
}
