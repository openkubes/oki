import type { Metadata } from "next";
import { Presentation } from "../Presentation";

export const metadata: Metadata = {
  title: "Oki y el secreto de las islas · Presentación HTML",
  description:
    "La guía infantil ilustrada de OpenKubes como presentación HTML interactiva en español.",
  authors: [{ name: "OpenKubes Community" }],
  keywords: [
    "OpenKubes",
    "Oki",
    "Kubernetes",
    "ingeniería de plataformas",
    "guía infantil",
  ],
};

export default function SpanishPresentation() {
  return <Presentation locale="es" />;
}
