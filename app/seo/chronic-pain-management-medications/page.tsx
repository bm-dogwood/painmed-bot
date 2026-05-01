import type { Metadata } from "next";
import { Nav, Footer } from "@/components/Nav";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Chronic Pain Management Medications: Complete 2025 Guide",
  description:
    "Complete guide to medications used in chronic pain management. Covers opioids, antidepressants, anticonvulsants, topical treatments, and emerging non-opioid therapies for fibromyalgia, neuropathy, arthritis, and more.",
  path: "/seo/chronic-pain-management-medications",
  keywords: [
    "chronic pain management medications",
    "best medications for chronic pain",
    "fibromyalgia medications",
    "neuropathic pain medication",
    "long term pain management",
    "non-opioid chronic pain treatment",
  ],
});

const FAQS = [
  {
    question: "What medications are used for chronic pain management?",
    answer:
      "Chronic pain is treated with a wide range of medications including low-dose antidepressants (duloxetine, amitriptyline), anticonvulsants (gabapentin, pregabalin), topical agents (lidocaine patches, diclofenac gel), opioids for select cases, NSAIDs, and newer non-opioid options like suzetrigine (Journavx).",
  },
  {
    question: "Is it safe to take pain medication every day for chronic pain?",
    answer:
      "Long-term daily use of any pain medication requires medical supervision. NSAIDs carry GI, kidney, and cardiovascular risks with daily use. Acetaminophen has liver risks. Opioids carry dependence risks. Non-opioid options like duloxetine and gabapentin are often preferred for daily chronic pain management.",
  },
  {
    question: "What is the best non-opioid medication for chronic pain?",
    answer:
      "It depends on the pain type. Duloxetine (Cymbalta) is FDA-approved for several chronic pain conditions including fibromyalgia, diabetic neuropathy, and chronic musculoskeletal pain. Gabapentin and pregabalin are effective for neuropathic pain. Topical diclofenac or lidocaine patches work well for localized pain.",
  },
  {
    question: "Can antidepressants help with chronic pain?",
    answer:
      "Yes. Certain antidepressants — particularly SNRIs (duloxetine) and tricyclic antidepressants (amitriptyline, nortriptyline) — are effective for chronic pain even in patients without depression. They modulate pain signaling in the central nervous system independently of their antidepressant effect.",
  },
];

const PAIN_CONDITIONS = [
  {
    condition: "Fibromyalgia",
    firstLine: "Duloxetine (Cymbalta), Milnacipran (Savella), Pregabalin (Lyrica)",
    secondLine: "Amitriptyline, Cyclobenzaprine, low-dose naltrexone",
    avoid: "Long-term opioids (limited evidence; may worsen hyperalgesia)",
  },
  {
    condition: "Diabetic Neuropathy",
    firstLine: "Duloxetine, Pregabalin, Gabapentin",
    secondLine: "TCAs (amitriptyline), Tapentadol, Lidocaine patch (5%)",
    avoid: "High-dose NSAIDs (kidney risk in diabetics)",
  },
  {
    condition: "Osteoarthritis",
    firstLine: "Topical diclofenac (Voltaren gel), Oral NSAIDs, Acetaminophen",
    secondLine: "Duloxetine, Tramadol, Intra-articular corticosteroids",
    avoid: "Long-term opioids (first-line); systemic NSAIDs if kidney/CV risk",
  },
  {
    condition: "Chronic Low Back Pain",
    firstLine: "NSAIDs, Duloxetine, Exercise + Physical Therapy",
    secondLine: "Muscle relaxants (short-term), Gabapentin (neuropathic component), Opioids (selected refractory cases)",
    avoid: "Benzodiazepines; long-term opioid monotherapy",
  },
  {
    condition: "Post-Herpetic Neuralgia",
    firstLine: "Pregabalin, Gabapentin, Lidocaine 5% patch",
    secondLine: "Capsaicin 8% patch, Tricyclic antidepressants, Tramadol",
    avoid: "Systemic opioids as first-line",
  },
  {
    condition: "Rheumatoid Arthritis",
    firstLine: "DMARDs (disease-modifying) + NSAIDs for flares",
    secondLine: "Corticosteroids (short-term), COX-2 inhibitors",
    avoid: "Long-term high-dose opioids; treat the underlying disease",
  },
];

export default function ChronicPainManagementPage() {
  return (
    <>
      <JsonLd type="FAQPage" faqs={FAQS} />
      <JsonLd
        type="MedicalWebPage"
        name="Chronic Pain Management Medications Guide 2025"
        description="Complete guide to medications used in chronic pain management"
        path="/seo/chronic-pain-management-medications"
      />
      <Nav />
      <main className="seo-page">
        <h1>Chronic Pain Management Medications: 2025 Guide</h1>
        <p>
          Chronic pain — defined as pain persisting beyond three months — affects an estimated 51
          million Americans. Unlike acute pain, which signals tissue injury, chronic pain often
          involves central sensitization, neuroplastic changes, and complex psychosocial factors
          that make it harder to treat. Effective chronic pain management typically requires a
          multimodal approach, and medications are just one component.
        </p>
        <p>
          This guide covers the full range of medications used in chronic pain management, organized
          by drug class, condition, and evidence level.
        </p>

        <div className="callout">
          <strong>Key Principle:</strong> The 2022 CDC Clinical Practice Guideline and most pain
          society guidelines now recommend non-opioid therapies as first-line for chronic pain
          wherever possible, reserving opioids for cases where benefits outweigh risks.
        </div>

        <h2>Why Chronic Pain Is Different</h2>
        <p>
          Chronic pain is not simply unresolved acute pain. Over time, persistent pain signals
          cause changes in the brain and spinal cord — a phenomenon called central sensitization.
          The nervous system becomes hypersensitized, amplifying pain signals beyond what the
          original injury would warrant. This explains why opioids — which are highly effective for
          acute pain — often lose efficacy for chronic pain over time and may paradoxically worsen
          it through opioid-induced hyperalgesia (OIH).
        </p>

        <h2>Drug Classes for Chronic Pain Management</h2>

        <h3>1. Antidepressants (SNRIs & TCAs)</h3>
        <p>
          Antidepressants are among the most evidence-backed medications for chronic pain, regardless
          of whether the patient is depressed. They work by modulating descending pain inhibitory
          pathways in the central nervous system.
        </p>
        <ul>
          <li>
            <strong>Duloxetine (Cymbalta):</strong> FDA-approved for diabetic peripheral
            neuropathic pain, fibromyalgia, and chronic musculoskeletal pain. Starting dose 30mg,
            titrated to 60mg daily. Common side effects: nausea, dry mouth, fatigue.
          </li>
          <li>
            <strong>Milnacipran (Savella):</strong> FDA-approved for fibromyalgia. Similar
            mechanism to duloxetine.
          </li>
          <li>
            <strong>Amitriptyline / Nortriptyline (TCAs):</strong> Low doses (10–75mg at night)
            are effective for neuropathic pain, fibromyalgia, and migraine prevention. Not
            FDA-approved for pain but widely used off-label. Side effects include sedation, dry
            mouth, and weight gain.
          </li>
        </ul>

        <h3>2. Anticonvulsants (Gabapentinoids)</h3>
        <p>
          Gabapentinoids modulate voltage-gated calcium channels in the dorsal horn of the spinal
          cord, reducing the release of excitatory neurotransmitters involved in pain transmission.
        </p>
        <ul>
          <li>
            <strong>Gabapentin (Neurontin):</strong> FDA-approved for post-herpetic neuralgia;
            widely used off-label for all neuropathic pain. Typical doses 900–3600mg/day in divided
            doses. Side effects: dizziness, sedation, peripheral edema.
          </li>
          <li>
            <strong>Pregabalin (Lyrica):</strong> FDA-approved for diabetic neuropathy, PHN,
            fibromyalgia, and spinal cord injury pain. More predictable absorption than gabapentin.
            Schedule V controlled substance.
          </li>
        </ul>

        <h3>3. Topical Analgesics</h3>
        <p>
          Topical agents deliver medication directly to the site of pain with minimal systemic
          absorption, reducing side effect risk. Excellent for localized pain in older adults or
          patients with systemic comorbidities.
        </p>
        <ul>
          <li><strong>Diclofenac gel (Voltaren):</strong> OTC NSAID gel approved for arthritis pain. Apply to affected joint 4× daily.</li>
          <li><strong>Lidocaine 5% patch (Lidoderm):</strong> FDA-approved for PHN. Applied 12 hours on / 12 hours off. Minimal systemic absorption.</li>
          <li><strong>Capsaicin 8% patch (Qutenza):</strong> Applied in clinic by a provider; provides up to 3 months of neuropathic pain relief per application.</li>
          <li><strong>Topical ketamine/amitriptyline compounds:</strong> Compounded creams used off-label for neuropathic pain; mixed evidence.</li>
        </ul>

        <h3>4. Opioids for Chronic Pain</h3>
        <p>
          Opioids remain an option for selected patients with chronic non-cancer pain who have
          failed other therapies, but their role has shifted significantly. Current guidelines
          recommend using them only when expected benefits outweigh risks, at the lowest effective
          dose, with frequent reassessment, a signed treatment agreement, and mandatory PDMP checks.
          Long-term opioid therapy does not improve function in many chronic pain patients and
          carries risks of tolerance, dependence, hormonal effects, and overdose.
        </p>
        <p>
          For cancer-related and palliative care pain, opioids remain a critical tool and should
          not be withheld from patients who need them.
        </p>

        <h3>5. Emerging Non-Opioid Options</h3>
        <p>
          Several newer agents are changing the chronic pain landscape:
        </p>
        <ul>
          <li>
            <strong>Suzetrigine (Journavx):</strong> First-in-class NaV1.8 sodium channel blocker.
            FDA-approved in early 2025 for moderate-to-severe acute pain. Clinical trials underway
            for chronic pain. Non-opioid, non-addictive.
          </li>
          <li>
            <strong>Low-Dose Naltrexone (LDN):</strong> 1.5–4.5mg nightly modulates glial cell
            activity and endorphin production. Growing off-label use for fibromyalgia, Crohn's
            disease, and chronic pain syndromes.
          </li>
          <li>
            <strong>Tanezumab (NGF inhibitor):</strong> Anti-nerve growth factor monoclonal
            antibody. Showed efficacy for osteoarthritis pain in trials; FDA has not approved
            due to joint safety concerns. Under ongoing review.
          </li>
        </ul>

        <h2>Medication by Chronic Pain Condition</h2>
        <table className="seo-table">
          <thead>
            <tr>
              <th>Condition</th>
              <th>First-Line Medications</th>
              <th>Second-Line / Adjuncts</th>
              <th>Generally Avoid</th>
            </tr>
          </thead>
          <tbody>
            {PAIN_CONDITIONS.map((row) => (
              <tr key={row.condition}>
                <td><strong>{row.condition}</strong></td>
                <td>{row.firstLine}</td>
                <td>{row.secondLine}</td>
                <td>{row.avoid}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>The Multimodal Approach: Beyond Medication</h2>
        <p>
          Evidence consistently shows that chronic pain outcomes are best when medication is
          combined with non-pharmacological therapies. These include cognitive behavioral therapy
          (CBT) for pain, which has strong evidence for fibromyalgia and chronic back pain;
          physical therapy and graded exercise; mindfulness-based stress reduction (MBSR);
          interventional procedures (nerve blocks, spinal cord stimulation); and addressing
          comorbid depression and anxiety, which amplify pain perception.
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
          This guide is for informational purposes only. Chronic pain management requires
          individualized care from a qualified healthcare provider. If you are struggling with
          chronic pain, consult a pain specialist. If you are struggling with opioid use, call
          SAMHSA's free helpline: 1-800-662-4357.
        </div>
      </main>
      <Footer />
    </>
  );
}
