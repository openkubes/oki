import type { Metadata } from "next";
import { Presentation } from "../Presentation";

export const metadata: Metadata = {
  title: "オキとたくさんの島々 · HTML プレゼンテーション",
  description:
    "OpenKubes の子ども向けイラストガイドを楽しめる、日本語のインタラクティブ HTML 版。",
  authors: [{ name: "OpenKubes Community" }],
  keywords: ["OpenKubes", "Oki", "Kubernetes", "プラットフォームエンジニアリング", "子ども向けガイド"],
};

export default function JapanesePresentation() {
  return <Presentation locale="ja" />;
}
