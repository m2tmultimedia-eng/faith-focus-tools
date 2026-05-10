import "./globals.css";
import type { Metadata } from "next";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";

export const metadata: Metadata = {
  title: "Faith Focus Tools",
  description:
    "Faith-based encouragement, scripture reflection, prayers, affirmations, and Christian mindset tools.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F6F1E7] text-[#1B2430]">
        <SiteHeader />

        {children}

        <SiteFooter />
      </body>
    </html>
  );
}
