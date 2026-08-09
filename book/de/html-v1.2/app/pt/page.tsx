import type { Metadata } from "next";
import { Presentation } from "../Presentation";

export const metadata: Metadata = {
  title: "Oki e as muitas ilhas · Apresentação HTML",
  description:
    "O guia infantil ilustrado de OpenKubes como apresentação HTML interativa em português.",
  authors: [{ name: "OpenKubes Community" }],
  keywords: [
    "OpenKubes",
    "Oki",
    "Kubernetes",
    "Platform Engineering",
    "guia infantil",
  ],
};

export default function PortuguesePresentation() {
  return <Presentation locale="pt" />;
}
