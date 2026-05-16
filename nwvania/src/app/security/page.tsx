import type { Metadata } from "next";
import SecurityContent from "./SecurityContent";

export const metadata: Metadata = {
  title: "Security",
  description:
    "How Nwvania protects your data — encryption in transit and at rest, access controls, infrastructure security, and our compliance roadmap.",
};

export default function SecurityPage() {
  return <SecurityContent />;
}
