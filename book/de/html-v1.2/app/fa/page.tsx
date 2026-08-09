import type { Metadata } from "next";
import { Presentation } from "../Presentation";

export const metadata: Metadata = {
  title: "اوکی و جزیره‌های بسیار · ارائهٔ HTML",
  description:
    "راهنمای مصور کودکان برای OpenKubes به شکل یک ارائهٔ تعاملی فارسی.",
  authors: [{ name: "OpenKubes Community" }],
  keywords: [
    "OpenKubes",
    "Oki",
    "Kubernetes",
    "مهندسی پلتفرم",
    "راهنمای کودکان",
  ],
};

export default function PersianPresentation() {
  return <Presentation locale="fa" />;
}
