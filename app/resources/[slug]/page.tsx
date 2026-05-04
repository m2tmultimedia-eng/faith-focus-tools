import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd, faqJsonLd } from "@/lib/seo";
import {
  getListItems,
  getRelatedPages,
  getSeoContentPage,
  getToolForPage,
  pagePath,
  seoContentPages,
} from "@/lib/seo-content-pages";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return seoContentPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const page = getSeoContentPage(params.slug);

  if (!page) {
    return {
      title: "Faith Resource",
    };
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: pagePath(page),
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      type: "article",
    },
  };
}

function typeNoun(type: string) {
  if (type === "affirmation") return "affirmations";
  if (type === "bible") return "Bible verses";
  return "prayers";
}

export default function SeoResourcePage({ params }: PageProps) {
  const page = getSeoContentPage(params.slug);
  if (!page) notFound();

  const tool = getToolForPage(page);
  const listItems = getListItems(page);
  const relatedPages = getRelatedPages(page);
  const noun = typeNoun(page.type);

  return (
    <main className="container longform-page">
      <JsonLd data={faqJsonLd(page.faq)} />

      <article>
        <section className="hero longform-hero">
          <p className="eyebrow">Faith Resource</p>
          <h1>{page.keyword}</h1>
          <p>
            Some moments are hard to explain because nothing dramatic has to be
            happening for your heart to feel tired. Maybe you are lying awake,
            trying to make sense of tomorrow. Maybe you are pushing through the
            day with a smile while your thoughts are louder than you want to
            admit. If you searched for {page.keyword}, you are probably looking
            for words that feel steady, personal, and usable right now.
          </p>
          <p>
            This page was written for {page.painPoint}. The goal is not to give
            you perfect language or a quick spiritual formula. The goal is to
            help you slow down, breathe, and choose one message you can carry
            into the next hour with more peace and intention.
          </p>
        </section>

        <section className="longform-card">
          <h2>{page.listTitle}</h2>
          <p>
            Read through this list slowly. Do not rush to collect every line.
            Let one sentence, verse, or prayer meet the part of you that needs
            attention today. When something feels personal, pause there and
            repeat it before moving to the next item.
          </p>
          <ul className="longform-list">
            {listItems.map((item, index) => (
              <li key={`${item.text}-${index}`}>
                <span>{item.text}</span>
                {"reference" in item && item.reference && (
                  <strong>{item.reference}</strong>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="longform-card">
          <h2>{page.h2s[0]}</h2>
          <p>
            When life feels heavy, the mind often reaches for whatever is most
            familiar. That might be worry, self-criticism, fear, comparison, or
            the habit of trying to control everything before you feel safe. The
            right words can interrupt that pattern. They give your attention a
            better place to land and remind you that the present moment does not
            have to be ruled by the loudest thought.
          </p>
          <p>
            {page.keyword} work best when they feel honest. You do not need to
            pretend that everything is easy. You can admit that the moment is
            difficult while still choosing language that points you toward
            faith, clarity, and courage. That balance is what makes these words
            useful for real life, not just for quiet mornings when everything is
            already calm.
          </p>
          <p>
            If one line stands out, write it down or save it. Return to it when
            the same emotion comes back later. Repetition matters because your
            mind often needs more than one reminder before a new thought starts
            to feel natural.
          </p>
        </section>

        <section className="longform-card">
          <h2>{page.h2s[1]}</h2>
          <p>
            Start by choosing one item from the list above. Read it once in your
            normal pace, then read it again more slowly. Notice which word makes
            you want to pause. That word may be showing you what your heart is
            craving: rest, courage, provision, direction, healing, or simple
            reassurance that you are not alone.
          </p>
          <p>
            Next, make the words practical. If this is an affirmation, connect
            it to one behavior you can practice today. If this is a Bible verse,
            turn one phrase into a short prayer. If this is a prayer, speak it
            in your own voice and add the details you have been carrying. The
            more personal the moment becomes, the more likely you are to return
            to it when pressure rises again.
          </p>
          <p>
            You can also use the generators on this site when you need something
            more specific. Visit the <Link href="/">homepage</Link> to explore
            all tools, or open the <Link href={tool.href}>{tool.label}</Link>{" "}
            when you want a fresh version based on your mood.
          </p>
        </section>

        <section className="longform-card">
          <h2>{page.h2s[2]}</h2>
          <p>
            A simple daily practice can make this page more than something you
            read once. In the morning, choose one line and let it shape the tone
            of your day. In the afternoon, return to it when your energy drops
            or your thoughts become scattered. At night, ask yourself whether
            the line changed the way you responded to stress, people, work, or
            your own inner voice.
          </p>
          <p>
            The practice is small on purpose. You are not trying to rebuild your
            entire life in a single sitting. You are training your attention to
            come back to what is true, helpful, and spiritually grounded. Over
            time, that kind of repetition can become a quiet anchor. It can help
            you {page.promise} without forcing yourself into a mood you do not
            actually feel.
          </p>
          <p>
            {page.practice} This gives the words somewhere to live. They move
            from inspiration into action, and that is where real change begins
            to feel possible.
          </p>
        </section>

        <section className="cta longform-cta">
          <h2>Use the generator for a personalized version</h2>
          <p>
            If today feels different from yesterday, let the tool create a fresh
            message for your exact mood. It is quick, calming, and built for
            repeat visits.
          </p>
          <Link className="button" href={tool.href}>
            {tool.cta}
          </Link>
        </section>

        <section className="longform-card">
          <h2>Related resources</h2>
          <p>
            Keep exploring related long-tail guides, or move between {noun} when
            you need a different kind of support.
          </p>
          <ul className="related-links">
            {relatedPages.map((related) => (
              <li key={related.slug}>
                <Link href={pagePath(related)}>{related.keyword}</Link>
              </li>
            ))}
            <li>
              <Link href="/">FaithFocusTools homepage</Link>
            </li>
            <li>
              <Link href={tool.href}>{tool.label}</Link>
            </li>
          </ul>
        </section>

        <section className="longform-card faq-section">
          <h2>Frequently Asked Questions</h2>
          {page.faq.map((item) => (
            <div key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </section>
      </article>
    </main>
  );
}
