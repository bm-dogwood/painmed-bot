import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "State Opioid Prescribing Laws | Interactive Map & Database",
  description:
    "Browse opioid prescribing limits, PDMP requirements, and refill rules for all 50 states. Interactive map with real-time data.",
  alternates: {
    canonical: "/laws",
  },
};

export default function LawsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
