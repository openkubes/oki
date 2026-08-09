import type { Metadata } from "next";
import { Presentation } from "../Presentation";

export const metadata: Metadata = {
  title: "Oki and the Secret of the Islands · HTML Presentation",
  description:
    "The Illustrated Children’s Guide to OpenKubes as an interactive English HTML presentation.",
  authors: [{ name: "OpenKubes Community" }],
  keywords: [
    "OpenKubes",
    "Oki",
    "Kubernetes",
    "Platform Engineering",
    "children's guide",
  ],
};

export default function EnglishPresentation() {
  return <Presentation locale="en" />;
}
