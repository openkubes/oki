import type { Metadata } from "next";
import { Presentation } from "../Presentation";

export const metadata: Metadata = {
  title: "Oki et le secret des îles · Présentation HTML",
  description:
    "Le guide illustré d'OpenKubes pour les enfants sous forme de présentation HTML interactive en français.",
  authors: [{ name: "OpenKubes Community" }],
  keywords: [
    "OpenKubes",
    "Oki",
    "Kubernetes",
    "Platform Engineering",
    "guide pour enfants",
  ],
};

export default function FrenchPresentation() {
  return <Presentation locale="fr" />;
}
