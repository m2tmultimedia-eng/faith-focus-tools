/*
  # FaithFocusTools - Core Schema

  1. New Tables
    - `bible_verses`
      - `id` (uuid, primary key)
      - `book` (text) - Bible book name
      - `chapter` (integer) - Chapter number
      - `verse` (integer) - Verse number
      - `text` (text) - KJV verse text
      - `topic` (text) - Topic category
      - `reference` (text) - Full reference string
      - `created_at` (timestamptz)
    - `affirmations`
      - `id` (uuid, primary key)
      - `text` (text) - Affirmation text
      - `category` (text) - Category
      - `created_at` (timestamptz)
    - `prayer_prompts`
      - `id` (uuid, primary key)
      - `title` (text) - Prayer prompt title
      - `text` (text) - Prayer prompt content
      - `category` (text) - Category
      - `created_at` (timestamptz)
    - `topics`
      - `id` (uuid, primary key)
      - `slug` (text, unique) - URL slug
      - `title` (text) - Topic title
      - `description` (text) - Meta description
      - `content` (text) - Full topic page content
      - `meta_keywords` (text) - SEO keywords
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Public read access for all tables (content site)
*/

CREATE TABLE IF NOT EXISTS bible_verses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  book text NOT NULL,
  chapter integer NOT NULL,
  verse integer NOT NULL,
  text text NOT NULL,
  topic text NOT NULL,
  reference text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bible_verses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access to bible verses"
  ON bible_verses FOR SELECT
  TO anon
  USING (true);

CREATE TABLE IF NOT EXISTS affirmations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  text text NOT NULL,
  category text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE affirmations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access to affirmations"
  ON affirmations FOR SELECT
  TO anon
  USING (true);

CREATE TABLE IF NOT EXISTS prayer_prompts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  text text NOT NULL,
  category text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE prayer_prompts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access to prayer prompts"
  ON prayer_prompts FOR SELECT
  TO anon
  USING (true);

CREATE TABLE IF NOT EXISTS topics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  description text NOT NULL DEFAULT '',
  content text NOT NULL DEFAULT '',
  meta_keywords text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE topics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access to topics"
  ON topics FOR SELECT
  TO anon
  USING (true);
