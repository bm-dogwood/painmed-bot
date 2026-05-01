import type { Metadata } from "next";
import { Nav, Footer } from "@/components/Nav";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Prescription Pain Medication Guide: Types, Uses & Safety (2025)",
  description:
    "Complete guide to prescription pain medications in 2025. Covers opioids, muscle relaxants, nerve pain drugs, and non-opioid alternatives — with dosing, side effects, and safety information.",
  path: "/seo/prescription-pain-medication-guide",
  keywords: [
    "prescription pain medication",
    "prescription pain killers",
    "opioid pain medication list",
    "strongest prescription pain medication",
    "non-opioid prescription pain relief",
    "prescription pain med guide",
  ],
});

const FAQS = [
  {
    question: "What is the strongest prescription pain medication?",
    answer:
      "Fentanyl is the most potent opioid available, estimated to be 50–100 times stronger than morphine. It is typically reserved for severe, chronic pain or cancer-related pain and comes in patch, lozenge, or IV form. Carfentanil (not used clinically) is even more potent but is not a prescription medication.",
  },
  {
    question: "Are there prescription pain medications that are not opioids?",
    answer:
      "Yes. Non-opioid prescription options include SNRIs like duloxetine (Cymbalta), anticonvulsants like gabapentin (Neurontin) and pregabalin (Lyrica), muscle relaxants like cyclobenzaprine (Flexeril), and prescription NSAIDs like celecoxib (Celebrex).",
  },
  {
    question: "What is the difference between Schedule II and Schedule III pain medications?",
    answer:
      "Schedule II drugs (oxycodone, fentanyl, morphine) have the highest abuse potential among prescribed substances — no refills allowed, strict controls. Schedule III drugs (buprenorphine, some codeine products) have moderate abuse potential and allow limited refills.",
  },
  {
    question: "Can I become addicted to prescription pain medication?",
    answer:
      "Physical dependence can develop with regular opioid use — this is different from addiction. Addiction involves compulsive use despite harm. Risk of addiction varies by individual, dose, duration, and genetic factors. Always use prescription pain medications exactly as directed.",
  },
];

const RX_MEDS = [
  { name: "Oxycodone (OxyContin, Percocet)", schedule: "II", type: "Opioid", uses: "Moderate-severe pain, chronic cancer pain", notes: "High abuse potential; ER formulations for 24h coverage" },
  { name: "Hydrocodone (Vicodin, Norco)", schedule: "II", type: "Opioid", uses: "Moderate-severe pain", notes: "Most commonly prescribed opioid in the US" },
  { name: "Morphine (MS Contin)", schedule: "II", type: "Opioid", uses: "Severe chronic pain, cancer pain", notes: "Gold standard for severe pain; multiple formulations" },
  { name: "Fentanyl (Duragesic patch)", schedule: "II", type: "Opioid", uses: "Severe chronic pain, opioid-tolerant patients", notes: "50–100× morphine potency; patch lasts 72 hours" },
  { name: "Tramadol (Ultram)", schedule: "IV", type: "Opioid-like (SNRI)", uses: "Moderate pain", notes: "Lower abuse potential; serotonin syndrome risk with antidepressants" },
  { name: "Buprenorphine (Belbuca, Butrans)", schedule: "III", type: "Partial opioid agonist", uses: "Chronic pain, OUD treatment", notes: "Ceiling effect limits respiratory depression risk" },
  { name: "Gabapentin (Neurontin)", schedule: "V*", type: "Anticonvulsant", uses: "Nerve pain, fibromyalgia, post-surgical pain", notes: "*Schedule varies by state; widely used for neuropathic pain" },
  { name: "Pregabalin (Lyrica)", schedule: "V", type: "Anticonvulsant", uses: "Neuropathic pain, fibromyalgia", notes: "FDA-approved for diabetic neuropathy, post-herpetic neuralgia" },
  { name: "Duloxetine (Cymbalta)", schedule: "N/A", type: "SNRI antidepressant", uses: "Fibromyalgia, diabetic neuropathy, chronic musculoskeletal pain", notes: "Non-controlled; often first-line for chronic pain" },
  { name: "Celecoxib (Celebrex)", schedule: "N/A", type: "COX-2 selective NSAID", uses: "Arthritis, acute pain", notes: "Lower GI risk than non-selective NSAIDs" },
  { name: "Cyclobenzaprine (Flexeril)", schedule: "N/A", type: "Muscle relaxant", uses: "Muscle spasms, acute musculoskeletal pain", notes: "Short-term use only; causes drowsiness" },
  { name: "Tapentadol (Nucynta)", schedule: "II", type: "Opioid + NRI", uses: "Moderate-severe acute and chronic pain", notes: "Dual mechanism; may have lower GI side effects than oxycodone" },
];

export default function PrescriptionPainMedicationGuidePage() {
  return (
    <>
      <JsonLd type="FAQPage" faqs={FAQS} />
      <JsonLd
        type="MedicalWebPage"
        name="Prescription Pain Medication Guide 2025"
        description="Complete guide to prescription pain medications, schedules, uses and safety"
        path="/seo/prescription-pain-medication-guide"
      />
      <Nav />
      <main className="seo-page">
        <h1>Prescription Pain Medication Guide (2025)</h1>
        <p>
          When over-the-counter pain relievers are not sufficient, prescription pain medications
          offer more powerful options. This guide covers the full spectrum of prescription pain
          drugs — from opioids and muscle relaxants to nerve pain medications and non-opioid
          alternatives — with information on scheduling, uses, side effects, and safety.
        </p>

        <div className="callout">
          <strong>Important:</strong> Prescription pain medications must be used exactly as directed
          by a licensed prescriber. This guide is educational — it is not a substitute for a
          prescription or medical evaluation.
        </div>

        <h2>Types of Prescription Pain Medications</h2>

        <h3>1. Opioid Analgesics</h3>
        <p>
          Opioids work by binding to opioid receptors in the brain, spinal cord, and peripheral
          tissues to reduce the perception of pain. They are highly effective for moderate-to-severe
          acute pain and some forms of chronic pain, but carry significant risks of dependence,
          tolerance, and overdose. The CDC's 2022 Clinical Practice Guideline recommends using the
          lowest effective dose for the shortest duration necessary.
        </p>

        <h3>2. Non-Opioid Prescription Analgesics</h3>
        <p>
          A growing array of non-opioid options have emerged as first-line prescription treatments
          for many chronic pain conditions. SNRIs like duloxetine (Cymbalta) are FDA-approved for
          fibromyalgia and neuropathic pain. Anticonvulsants like gabapentin and pregabalin are
          widely used for nerve pain. These medications carry no addiction risk in the traditional
          sense, though they have their own side effect profiles.
        </p>

        <h3>3. Muscle Relaxants</h3>
        <p>
          Muscle relaxants such as cyclobenzaprine (Flexeril), methocarbamol (Robaxin), and
          tizanidine (Zanaflex) treat muscle spasm and acute musculoskeletal pain. They are
          typically prescribed for short-term use (2–3 weeks) due to sedation and tolerance risks.
        </p>

        <h3>4. Prescription NSAIDs</h3>
        <p>
          Prescription-strength NSAIDs like celecoxib (Celebrex), diclofenac (Voltaren), and
          indomethacin (Indocin) provide stronger anti-inflammatory effects than OTC doses. Celecoxib
          selectively inhibits COX-2, reducing GI side effects compared to traditional NSAIDs.
        </p>

        <h2>Complete Prescription Pain Medication Reference</h2>
        <table className="seo-table">
          <thead>
            <tr>
              <th>Medication</th>
              <th>DEA Schedule</th>
              <th>Type</th>
              <th>Primary Uses</th>
              <th>Key Notes</th>
            </tr>
          </thead>
          <tbody>
            {RX_MEDS.map((med) => (
              <tr key={med.name}>
                <td><strong>{med.name}</strong></td>
                <td>{med.schedule}</td>
                <td>{med.type}</td>
                <td>{med.uses}</td>
                <td>{med.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>DEA Controlled Substance Schedules Explained</h2>
        <p>
          The DEA classifies controlled substances into five schedules based on medical use and
          abuse potential. For pain medications:
        </p>
        <ul>
          <li><strong>Schedule II:</strong> Highest medical use with highest abuse potential. No refills. Includes oxycodone, fentanyl, morphine, hydrocodone, tapentadol.</li>
          <li><strong>Schedule III:</strong> Lower abuse potential than II. Up to 5 refills in 6 months. Includes buprenorphine combination products (Suboxone).</li>
          <li><strong>Schedule IV:</strong> Lower abuse potential. Includes tramadol, carisoprodol.</li>
          <li><strong>Schedule V:</strong> Lowest abuse potential among controlled substances. Includes pregabalin; gabapentin in many states.</li>
        </ul>

        <h2>Non-Opioid Alternatives: An Emerging Priority</h2>
        <p>
          Due to the opioid crisis, there has been significant investment in non-opioid pain
          alternatives. In 2023, the FDA approved suzetrigine (Journavx) — a sodium channel blocker
          — as the first new class of non-opioid prescription pain medication in over 20 years.
          Other emerging options include low-dose naltrexone (LDN) for fibromyalgia and chronic
          pain syndromes, and nerve blocks delivered via long-acting local anesthetics.
        </p>

        <h2>Safe Use & Storage of Prescription Pain Medications</h2>
        <p>
          Safe practices include taking medication exactly as prescribed, never sharing medications,
          storing opioids in a locked location out of reach of children, and disposing of unused
          medications at official DEA Take-Back sites or using FDA-approved drug disposal pouches.
          Never flush medications unless the label specifically directs it, and never crush
          extended-release opioid tablets.
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
          This guide is for informational purposes only. Prescription medications require evaluation
          by a licensed healthcare provider. If you or someone you know is struggling with opioid
          use, call SAMHSA's National Helpline: 1-800-662-4357 (free, confidential, 24/7).
        </div>
      </main>
      <Footer />
    </>
  );
}
