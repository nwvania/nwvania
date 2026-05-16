import type { Metadata } from "next";
import UseCasesContent from "./UseCasesContent";

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "How citizens, merchants, and institutions use Nwvania — real scenarios across identity, finance, commerce, and governance.",
};

export default function UseCasesPage() {
  return <UseCasesContent />;
}
