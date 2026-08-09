import type { Metadata } from "next";
import { Presentation } from "../Presentation";

export const metadata: Metadata = {
  title: "ओकी और द्वीपों का रहस्य · HTML प्रस्तुति",
  description:
    "OpenKubes के बारे में बच्चों की चित्रमय मार्गदर्शिका की संवादात्मक हिन्दी HTML प्रस्तुति।",
  authors: [{ name: "OpenKubes Community" }],
  keywords: ["OpenKubes", "Oki", "Kubernetes", "Platform Engineering", "बाल मार्गदर्शिका"],
};

export default function HindiPresentation() {
  return <Presentation locale="hi" />;
}
