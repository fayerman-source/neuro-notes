import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neuro Note Macros | Neurology Dot Phrases & NIHSS Calculator",
  description: "Copy-paste neurology documentation templates. Includes NIHSS calculator, stroke scales, and 15+ dot phrases for EHR documentation.",
  keywords: ["neurology", "dot phrases", "NIHSS", "stroke", "medical documentation", "EHR", "smart phrases"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
