import { SITE_URL, SITE_NAME } from "@/lib/seo";

interface FAQItem {
  question: string;
  answer: string;
}

interface SchemaProps {
  type: "WebSite" | "FAQPage" | "MedicalWebPage" | "SoftwareApplication";
  faqs?: FAQItem[];
  name?: string;
  description?: string;
  path?: string;
}

export function JsonLd({ type, faqs, name, description, path }: SchemaProps) {
  const url = `${SITE_URL}${path ?? ""}`;

  const schemas: Record<string, object> = {
    WebSite: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      description:
        "AI-powered pain medication comparison, drug interaction checker, and safety tool.",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/compare?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
    SoftwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: name ?? SITE_NAME,
      applicationCategory: "HealthApplication",
      operatingSystem: "Web",
      url,
      description: description ?? "",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "OTC pain medication comparison",
        "Drug interaction checker",
        "Prescription pain med info",
        "State opioid laws",
        "Pharmacy price comparison",
      ],
    },
    FAQPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: (faqs ?? []).map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
    MedicalWebPage: {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: name ?? SITE_NAME,
      url,
      description: description ?? "",
      medicalAudience: { "@type": "MedicalAudience", audienceType: "Patient" },
      about: { "@type": "MedicalCondition", name: "Pain Management" },
    },
  };

  const schema = schemas[type];
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
