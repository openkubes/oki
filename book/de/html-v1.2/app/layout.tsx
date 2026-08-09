import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oki und das Geheimnis der Inseln · HTML-Präsentation",
  description:
    "Der illustrierte Kinderführer zu OpenKubes als interaktive deutsche HTML-Präsentation.",
  authors: [{ name: "OpenKubes Community" }],
  keywords: ["OpenKubes", "Oki", "Kubernetes", "Platform Engineering", "Kinderbuch"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
