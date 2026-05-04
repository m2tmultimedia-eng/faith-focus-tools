export const siteConfig = {
  name: "FaithFocusTools",
  title: "FaithFocusTools | Affirmations, Bible Verses & Prayer Prompts",
  description:
    "Free faith-based affirmations, KJV Bible verses, prayer prompts, and topic guides for daily focus, peace, and purpose.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://faithfocustools.com",
  contactEmail: "hello@faithfocustools.com",
  adsensePublisherId: "ca-pub-8678860743472171",
  defaultAdSlot: process.env.NEXT_PUBLIC_ADSENSE_SLOT || "",
  freeGuideUrl:
    process.env.NEXT_PUBLIC_FREE_GUIDE_URL || "/contact?subject=free-guide",
  partnerUrl: "/contact?subject=partnership",
};

export function absoluteUrl(path = "") {
  if (/^https?:\/\//.test(path)) return path;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath}`;
}

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/tools/affirmation-generator", label: "Affirmations" },
  { href: "/tools/bible-verse-generator", label: "Bible Verses" },
  { href: "/tools/prayer-generator", label: "Prayer" },
  { href: "/topics", label: "Topics" },
  { href: "/resources", label: "Resources" },
  { href: "/favorites", label: "Favorites" },
];
