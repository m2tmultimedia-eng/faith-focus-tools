import "./globals.css";
import type { Metadata } from "next";
import GoogleAnalytics from "./components/google-analytics";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Faith Focus Tools",
  description:
    "Faith-based encouragement, scripture reflection, prayers, affirmations, and Christian mindset tools.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#F6F1E7", color: "#1B2430" }}>
        <header style={{ background: "#12324A", color: "white" }}>
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "28px",
                fontWeight: 800,
              }}
            >
              FaithFocusTools ✨
            </a>

            <nav
              style={{
                display: "flex",
                gap: "22px",
                flexWrap: "wrap",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              <a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a>
              <a href="/affirmations" style={{ color: "white", textDecoration: "none" }}>Affirmations</a>
              <a href="/bible-verses" style={{ color: "white", textDecoration: "none" }}>Bible Verses</a>
              <a href="/prayer" style={{ color: "white", textDecoration: "none" }}>Prayer</a>
              <a href="/topics" style={{ color: "white", textDecoration: "none" }}>Topics</a>
              <a href="/resources" style={{ color: "white", textDecoration: "none" }}>Resources</a>
              <a href="/favorites" style={{ color: "white", textDecoration: "none" }}>Favorites</a>
              <a href="/articles" style={{ color: "#F4C542", textDecoration: "none" }}>Articles</a>
            </nav>
          </div>
        </header>

        <GoogleAnalytics />

        {children}

        <footer style={{ borderTop: "1px solid #ddd", marginTop: "80px", padding: "40px 24px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <strong>Faith Focus Tools</strong>
            <p>Scripture-inspired prayers, affirmations, reflections, and faith-based personal growth tools.</p>
            <p>
              <a href="/about">About</a> · <a href="/contact">Contact</a> ·{" "}
              <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a> ·{" "}
              <a href="/disclaimer">Disclaimer</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
