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
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <div style={{ flex: 1 }}>{children}</div>
          <footer
            role="contentinfo"
            style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}
          >
            <div className="max-w-6xl mx-auto px-4 py-6">
              <div className="flex flex-col gap-2">
                <p
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: '#F59E0B' }}
                >
                  Clinical documentation aid only — not a medical device
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: 'rgba(255, 255, 255, 0.45)' }}
                >
                  Verify every score and generated text against the patient and source guidelines
                  before entering into the medical record. Do not enter PHI into this application.
                  This tool does not replace clinical judgement. Open source, MIT licensed.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
