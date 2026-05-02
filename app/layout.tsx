import "./globals.css";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Faith Focus Tools | Affirmations, Bible Verses & Prayers",
  description:
    "Free daily affirmations, Bible verse generator, prayer prompts, and faith-based encouragement tools.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {/* AdSense Global Script (Verification + Ads) */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8678860743472171"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Header */}
        <header className="site-header">
          <Link href="/" className="logo">
            FaithFocusTools
          </Link>

          <nav>
            <Link href="/tools/affirmation-generator">Affirmations</Link>
            <Link href="/tools/bible-verse-generator">Bible Verses</Link>
            <Link href="/tools/prayer-generator">Prayer</Link>
            <Link href="/topics">Topics</Link>
          </nav>
        </header>

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="footer">
          <p>
            © {new Date().getFullYear()} FaithFocusTools. Built for daily focus,
            faith, and clarity.
          </p>
        </footer>
      </body>
    </html>
  );
}