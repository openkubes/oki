import type { Metadata } from "next";
import { Presentation } from "../Presentation";

export const metadata: Metadata = {
  title: "奥奇与群岛的秘密 · HTML 演示",
  description: "OpenKubes 儿童图解指南的简体中文互动 HTML 演示版。",
  authors: [{ name: "OpenKubes Community" }],
  keywords: ["OpenKubes", "Oki", "Kubernetes", "平台工程", "儿童指南"],
};

export default function ChinesePresentation() {
  return <Presentation locale="zh" />;
}
