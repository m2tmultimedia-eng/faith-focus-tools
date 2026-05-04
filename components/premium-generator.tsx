"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  getItemsForCategory,
  getRandomItem,
  getRandomSimilarItem,
  type CategoryIndex,
  type ContentItem,
} from "@/lib/content";
import { siteConfig } from "@/lib/site";

type FavoriteItem = {
  id: string;
  type: string;
  text: string;
  reference?: string;
  category: string;
  savedAt: string;
};

type MoodOption = {
  label: string;
  lookup: string;
};

type PremiumGeneratorProps<T extends ContentItem> = {
  type: "affirmation" | "prayer" | "bibleVerse";
  title: string;
  dailyTitle: string;
  generateLabel: string;
  items: T[];
  index: CategoryIndex<T>;
  moodOptions: MoodOption[];
  getDisplayText?: (item: T) => string;
  getShareText?: (item: T, deeperText?: string) => string;
  getDeeperText: (item: T) => string;
};

const favoritesKey = "faith-focus-favorites";
const sensoryPreferenceKey = "faith-focus-sensory-feedback";

function getItemId(item: ContentItem & { reference?: string }, type: string) {
  return `${type}:${item.reference || item.text}`;
}

function getDailyItem<T>(items: T[], type: string) {
  const today = new Date().toISOString().slice(0, 10);
  const seed = `${type}:${today}`.split("").reduce((total, char) => {
    return total + char.charCodeAt(0);
  }, 0);

  return items[seed % items.length];
}

function splitRevealLines(text: string) {
  const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
  return sentences.map((sentence) => sentence.trim()).filter(Boolean);
}

function readFavorites(): FavoriteItem[] {
  if (typeof window === "undefined") return [];

  try {
    return JSON.parse(window.localStorage.getItem(favoritesKey) || "[]");
  } catch {
    return [];
  }
}

function writeFavorites(items: FavoriteItem[]) {
  window.localStorage.setItem(favoritesKey, JSON.stringify(items));
  window.dispatchEvent(new Event("faith-focus-favorites-updated"));
}

function playSoftChime() {
  const AudioContextClass =
    window.AudioContext ||
    (window as typeof window & { webkitAudioContext?: typeof AudioContext })
      .webkitAudioContext;

  if (!AudioContextClass) return;

  const audioContext = new AudioContextClass();
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(528, audioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(
    660,
    audioContext.currentTime + 0.18
  );
  gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.035, audioContext.currentTime + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.28);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.3);
}

export function PremiumGenerator<T extends ContentItem>({
  type,
  title,
  dailyTitle,
  generateLabel,
  items,
  index,
  moodOptions,
  getDisplayText = (item) => item.text,
  getShareText,
  getDeeperText,
}: PremiumGeneratorProps<T>) {
  const dailyItem = useMemo(() => getDailyItem(items, type), [items, type]);
  const [mood, setMood] = useState(moodOptions[0]);
  const [currentItem, setCurrentItem] = useState(dailyItem);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeeper, setIsDeeper] = useState(false);
  const [visibleLines, setVisibleLines] = useState(1);
  const [feedback, setFeedback] = useState("");
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [sensoryFeedback, setSensoryFeedback] = useState(false);

  const displayText = getDisplayText(currentItem);
  const deeperText = getDeeperText(currentItem);
  const activeText = isDeeper ? deeperText : displayText;
  const revealLines = useMemo(() => splitRevealLines(activeText), [activeText]);
  const favoriteId = getItemId(currentItem, type);
  const isSaved = favorites.some((item) => item.id === favoriteId);

  useEffect(() => {
    setFavorites(readFavorites());
    setSensoryFeedback(
      window.localStorage.getItem(sensoryPreferenceKey) === "enabled"
    );
  }, []);

  useEffect(() => {
    setVisibleLines(1);
    const timers = revealLines.slice(1).map((_, index) =>
      window.setTimeout(() => setVisibleLines(index + 2), 180 * (index + 1))
    );

    return () => timers.forEach(window.clearTimeout);
  }, [revealLines]);

  function showFeedback(message: string) {
    setFeedback(message);
    window.setTimeout(() => setFeedback(""), 1600);
  }

  function transitionTo(item: T, nextMood = mood, deeper = false) {
    setIsLoading(true);
    setIsDeeper(false);
    triggerSensoryFeedback();

    window.setTimeout(() => {
      setMood(nextMood);
      setCurrentItem(item);
      setIsDeeper(deeper);
      setIsLoading(false);
    }, 520);
  }

  function triggerSensoryFeedback() {
    if (!sensoryFeedback) return;

    if (navigator.vibrate) {
      navigator.vibrate(18);
      return;
    }

    playSoftChime();
  }

  function toggleSensoryFeedback() {
    const nextValue = !sensoryFeedback;
    setSensoryFeedback(nextValue);
    window.localStorage.setItem(
      sensoryPreferenceKey,
      nextValue ? "enabled" : "disabled"
    );
    showFeedback(nextValue ? "Soft feedback on" : "Soft feedback off");
  }

  function generateAgain() {
    transitionTo(getRandomItem(index, mood.lookup));
  }

  function generateSimilar() {
    const similar = getRandomSimilarItem(index, currentItem);
    const nextMood =
      moodOptions.find((option) => option.lookup === similar.category) || mood;
    transitionTo(similar, nextMood);
  }

  function selectMood(option: MoodOption) {
    transitionTo(getItemsForCategory(index, option.lookup)[0], option);
  }

  function showDeeperVersion() {
    setIsDeeper(true);
  }

  function saveFavorite() {
    const currentFavorites = readFavorites();
    const favorite: FavoriteItem = {
      id: favoriteId,
      type,
      text: displayText,
      reference: "reference" in currentItem ? String(currentItem.reference) : undefined,
      category: currentItem.category,
      savedAt: new Date().toISOString(),
    };
    const nextFavorites = currentFavorites.some((item) => item.id === favorite.id)
      ? currentFavorites.filter((item) => item.id !== favorite.id)
      : [favorite, ...currentFavorites];

    writeFavorites(nextFavorites);
    setFavorites(nextFavorites);
    showFeedback(nextFavorites.some((item) => item.id === favorite.id) ? "Saved" : "Removed");
  }

  async function copyText() {
    await navigator.clipboard.writeText(
      getShareText?.(currentItem, isDeeper ? deeperText : undefined) || activeText
    );
    showFeedback("Copied!");
  }

  async function shareText() {
    const text =
      getShareText?.(currentItem, isDeeper ? deeperText : undefined) || activeText;

    if (navigator.share) {
      await navigator.share({
        title,
        text,
        url: window.location.href,
      });
      return;
    }

    await navigator.clipboard.writeText(text);
    showFeedback("Copied for sharing!");
  }

  return (
    <section className={`premium-generator premium-generator-${type}`}>
      <div className="daily-strip">
        <div>
          <span>{dailyTitle}</span>
          <p>{getDisplayText(dailyItem)}</p>
        </div>
        <button onClick={() => transitionTo(dailyItem, mood)}>
          Use Today&apos;s
        </button>
      </div>

      <div className="premium-panel">
        <div className="premium-control">
          <label htmlFor={`${type}-mood`}>Choose a focus</label>
          <select
            id={`${type}-mood`}
            value={mood.label}
            onChange={(event) => {
              const option =
                moodOptions.find((item) => item.label === event.target.value) ||
                moodOptions[0];
              selectMood(option);
            }}
          >
            {moodOptions.map((option) => (
              <option key={option.label} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mood-grid" aria-label="Mood selector">
          {moodOptions.map((option) => (
            <button
              key={option.label}
              className={mood.label === option.label ? "mood-chip active-chip" : "mood-chip"}
              onClick={() => selectMood(option)}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="sensory-toggle">
          <span>Soft mobile feedback</span>
          <button
            type="button"
            onClick={toggleSensoryFeedback}
            aria-pressed={sensoryFeedback}
          >
            {sensoryFeedback ? "On" : "Off"}
          </button>
        </div>

        <div className={isLoading ? "result-stage loading" : "result-stage"}>
          {isLoading ? (
            <div className="loading-message">
              <span />
              Finding the right message for you...
            </div>
          ) : (
            <div className="reveal-text" key={`${favoriteId}:${isDeeper ? "deep" : "short"}`}>
              {revealLines.slice(0, visibleLines).map((line, index) => (
                <p key={`${line}-${index}`}>{line}</p>
              ))}
              {"reference" in currentItem && (
                <p className="verse-reference">{String(currentItem.reference)}</p>
              )}
            </div>
          )}
        </div>

        <div className="premium-actions">
          <button className="button" onClick={generateAgain}>
            Generate Again
          </button>
          <button className="button secondary-button" onClick={showDeeperVersion}>
            Deeper Version
          </button>
          <button className="button secondary-button" onClick={generateSimilar}>
            More Like This
          </button>
          <button className="button secondary-button" onClick={saveFavorite}>
            {isSaved ? "Saved" : "Save"}
          </button>
          <button className="button secondary-button" onClick={copyText}>
            Copy
          </button>
          <button className="button secondary-button" onClick={shareText}>
            Share
          </button>
        </div>

        {feedback && <p className="generator-feedback">{feedback}</p>}

        <div className="generator-cta">
          <p>Want deeper guidance?</p>
          <Link href={siteConfig.freeGuideUrl} className="button">
            Get the Faith & Focus Guide
          </Link>
          <Link href="/favorites" className="text-link">
            View My Favorites
          </Link>
        </div>
      </div>
    </section>
  );
}

export { favoritesKey, type FavoriteItem };
