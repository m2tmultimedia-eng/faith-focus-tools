"use client";

import { useEffect, useState } from "react";
import type { FavoriteItem } from "@/components/premium-generator";

const favoritesKey = "faith-focus-favorites";

function readFavorites(): FavoriteItem[] {
  try {
    return JSON.parse(window.localStorage.getItem(favoritesKey) || "[]");
  } catch {
    return [];
  }
}

export function FavoritesContent() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    setFavorites(readFavorites());

    function syncFavorites() {
      setFavorites(readFavorites());
    }

    window.addEventListener("faith-focus-favorites-updated", syncFavorites);
    return () =>
      window.removeEventListener("faith-focus-favorites-updated", syncFavorites);
  }, []);

  function writeFavorites(items: FavoriteItem[]) {
    window.localStorage.setItem(favoritesKey, JSON.stringify(items));
    setFavorites(items);
  }

  async function copyFavorite(item: FavoriteItem) {
    await navigator.clipboard.writeText(
      item.reference ? `${item.text} - ${item.reference}` : item.text
    );
    setFeedback("Copied!");
    window.setTimeout(() => setFeedback(""), 1500);
  }

  function removeFavorite(id: string) {
    writeFavorites(favorites.filter((item) => item.id !== id));
  }

  if (!favorites.length) {
    return (
      <section className="favorites-empty">
        <h2>No favorites saved yet</h2>
        <p>
          Save affirmations, prayers, and Bible verses from the generators, then
          return here when you need them again.
        </p>
      </section>
    );
  }

  return (
    <section className="favorites-list">
      {feedback && <p className="generator-feedback">{feedback}</p>}
      {favorites.map((item) => (
        <article key={item.id} className="favorite-card">
          <p className="favorite-type">{item.type.replace(/([A-Z])/g, " $1")}</p>
          <p className="favorite-text">{item.text}</p>
          {item.reference && <p className="verse-reference">{item.reference}</p>}
          <p className="favorite-meta">{item.category}</p>
          <div className="favorite-actions">
            <button className="button secondary-button" onClick={() => copyFavorite(item)}>
              Copy
            </button>
            <button className="button secondary-button" onClick={() => removeFavorite(item.id)}>
              Remove
            </button>
          </div>
        </article>
      ))}
    </section>
  );
}
