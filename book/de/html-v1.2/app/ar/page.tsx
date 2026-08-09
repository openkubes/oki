import type { Metadata } from "next";
import { Presentation } from "../Presentation";

export const metadata: Metadata = {
  title: "أوكي وسرّ الجزر · عرض HTML",
  description: "دليل الأطفال المصوّر إلى OpenKubes في عرض HTML عربي تفاعلي.",
  authors: [{ name: "OpenKubes Community" }],
  keywords: ["OpenKubes", "Oki", "Kubernetes", "Platform Engineering", "دليل أطفال"],
};

export default function ArabicPresentation() {
  return <Presentation locale="ar" />;
}
