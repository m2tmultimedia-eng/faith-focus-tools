import "./globals.css";
import Link from "next/link";

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
      <head>
        {/* AdSense Verification Script (REQUIRED) */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8678860743472171"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body>
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

        <main>{children}</main>

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