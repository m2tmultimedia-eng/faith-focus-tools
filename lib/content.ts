export type ContentItem = {
  text: string;
  category: string;
  tags?: string[];
};

export type BibleVerseItem = ContentItem & {
  reference: string;
};

export type CategoryIndex<T extends ContentItem> = Record<string, T[]>;

export function normalizeCategory(category: string) {
  return category.trim().toLowerCase();
}

export function createContentItems<TCategory extends string>(
  groups: Record<TCategory, string[]>,
  sharedTags: string[] = []
): ContentItem[] {
  return Object.entries(groups).flatMap(([category, texts]) =>
    (texts as string[]).map((text) => ({
      text,
      category,
      tags: Array.from(new Set([category, ...sharedTags])),
    }))
  );
}

export function createCategoryIndex<T extends ContentItem>(
  items: readonly T[]
): CategoryIndex<T> {
  return items.reduce<CategoryIndex<T>>((index, item) => {
    const category = normalizeCategory(item.category);
    index.all ||= [];
    index[category] ||= [];
    index.all.push(item);
    index[category].push(item);

    item.tags?.forEach((tag) => {
      const key = normalizeCategory(tag);
      index[key] ||= [];
      if (!index[key].includes(item)) index[key].push(item);
    });

    return index;
  }, {});
}

export function getItemsForCategory<T extends ContentItem>(
  index: CategoryIndex<T>,
  category: string
): T[] {
  const key = normalizeCategory(category);
  const selected = index[key];
  return selected?.length ? selected : index.all || [];
}

export function getRandomItem<T extends ContentItem>(
  index: CategoryIndex<T>,
  category: string
): T {
  const pool = getItemsForCategory(index, category);
  return pool[Math.floor(Math.random() * pool.length)];
}

export function getSimilarItems<T extends ContentItem>(
  index: CategoryIndex<T>,
  item: T,
  limit = 6
): T[] {
  const selectedTags = new Set(
    [item.category, ...(item.tags || [])].map(normalizeCategory)
  );
  const pool = index.all || [];

  const scored = pool
    .filter((candidate) => candidate.text !== item.text)
    .map((candidate) => {
      const candidateTags = [candidate.category, ...(candidate.tags || [])].map(
        normalizeCategory
      );
      const score = candidateTags.reduce(
        (total, tag) => total + (selectedTags.has(tag) ? 1 : 0),
        0
      );

      return { candidate, score };
    })
    .filter((itemScore) => itemScore.score > 0)
    .sort((a, b) => b.score - a.score);

  const similar = scored.map((itemScore) => itemScore.candidate);

  return (similar.length ? similar : pool.filter((candidate) => candidate.text !== item.text)).slice(
    0,
    limit
  );
}

export function getRandomSimilarItem<T extends ContentItem>(
  index: CategoryIndex<T>,
  item: T
): T {
  const similar = getSimilarItems(index, item);
  return similar[Math.floor(Math.random() * similar.length)] || item;
}
