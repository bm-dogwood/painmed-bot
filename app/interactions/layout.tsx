import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drug Interaction Checker",
  description:
    "Check for potential interactions between your medications and substances. Interactive tool for understanding drug safety.",
};

export default function InteractionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
