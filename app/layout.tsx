import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://faithfocustools.com"),
  title: "Faith Focus Tools | Affirmations, Bible Verses & Prayers",
  description:
    "Free daily affirmations, Bible verse generator, prayer prompts, and faith-based encouragement tools.",
  openGraph: {
    title: "Faith Focus Tools | Affirmations, Bible Verses & Prayers",
    description:
      "Free daily affirmations, Bible verse generator, prayer prompts, and faith-based encouragement tools.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
        {children}
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} FaithFocusTools. Encouragement for the everyday walk.</p>
        </footer>
      </body>
    </html>
  );
}
