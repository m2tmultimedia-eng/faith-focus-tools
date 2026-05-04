import type { Metadata } from "next";
import Link from "next/link";
import { FavoritesContent } from "./favorites-content";

export const metadata: Metadata = {
  title: "My Favorites",
  description:
    "Review saved affirmations, prayers, and Bible verses from FaithFocusTools.",
  alternates: {
    canonical: "/favorites",
  },
};

export default function FavoritesPage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Saved Encouragement</p>
        <h1>My Favorites</h1>
        <p>
          Keep the messages that speak to you, then come back when you need a
          steady reminder.
        </p>
        <Link className="button" href="/tools/affirmation-generator">
          Generate More
        </Link>
      </section>

      <FavoritesContent />
    </main>
  );
}
