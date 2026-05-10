export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-14">
      <section className="max-w-4xl">
        <h1 className="text-6xl font-bold leading-tight">
          Faith-Based Encouragement for Real Life
        </h1>

        <p className="mt-8 text-2xl leading-10 opacity-80">
          Faith Focus Tools provides scripture-inspired encouragement,
          prayers, affirmations, mindset tools, gratitude practices,
          reflection exercises, and practical Christian growth resources
          designed to help people navigate stress, anxiety, discouragement,
          emotional overwhelm, and everyday life with greater peace and wisdom.
        </p>
      </section>

      <section className="mt-20 grid gap-8 md:grid-cols-3">
        <div className="rounded-3xl border bg-white p-8">
          <h2 className="text-3xl font-bold">Faith Articles</h2>

          <p className="mt-4 text-lg leading-8">
            Explore long-form articles focused on anxiety, prayer,
            gratitude, emotional peace, Christian habits, mindset,
            scripture reflection, and practical encouragement.
          </p>

          <a
            href="/articles"
            className="mt-6 inline-block font-semibold underline"
          >
            Explore Articles →
          </a>
        </div>

        <div className="rounded-3xl border bg-white p-8">
          <h2 className="text-3xl font-bold">Bible Reflection</h2>

          <p className="mt-4 text-lg leading-8">
            Build healthier daily thought patterns using scripture-based
            reflection, gratitude, prayer, journaling, and peaceful routines.
          </p>
        </div>

        <div className="rounded-3xl border bg-white p-8">
          <h2 className="text-3xl font-bold">Practical Encouragement</h2>

          <p className="mt-4 text-lg leading-8">
            Faith should feel practical. Our goal is to provide resources
            that help people think clearly, respond wisely, and grow steadily.
          </p>
        </div>
      </section>

      <section className="mt-24 max-w-5xl">
        <h2 className="text-5xl font-bold">
          Why Faith Focus Tools Exists
        </h2>

        <div className="mt-8 space-y-8 text-xl leading-10 opacity-90">
          <p>
            Many people feel emotionally overwhelmed, mentally exhausted,
            spiritually distracted, or constantly pressured by everyday life.
            Modern life creates nonstop noise, distraction, comparison,
            stress, pressure, and emotional fatigue.
          </p>

          <p>
            Faith Focus Tools was created to provide practical faith-based
            encouragement that feels grounded, honest, calming, and useful.
            Instead of shallow motivational quotes or empty positivity,
            this platform focuses on reflection, wisdom, emotional awareness,
            gratitude, scripture-inspired thinking, prayer, healthier habits,
            and peaceful routines.
          </p>

          <p>
            The goal is not perfection. The goal is helping people become
            more peaceful, grounded, emotionally aware, spiritually focused,
            and mentally steady one step at a time.
          </p>

          <p>
            Spiritual growth often happens quietly through repeated daily
            habits rather than dramatic moments. Prayer, reflection,
            gratitude, scripture reading, journaling, emotional honesty,
            healthier routines, and intentional thinking can gradually
            reshape perspective over time.
          </p>
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-5xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 grid gap-8">
          <div className="rounded-3xl border bg-white p-8">
            <h3 className="text-2xl font-bold">
              What is Faith Focus Tools?
            </h3>

            <p className="mt-4 text-lg leading-8">
              Faith Focus Tools is a faith-based encouragement platform
              focused on scripture reflection, mindset growth, prayer,
              gratitude, emotional peace, and practical Christian habits.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8">
            <h3 className="text-2xl font-bold">
              Are these articles meant for beginners?
            </h3>

            <p className="mt-4 text-lg leading-8">
              Yes. The content is written to be practical, approachable,
              reflective, and helpful for everyday life regardless of where
              someone is in their faith journey.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8">
            <h3 className="text-2xl font-bold">
              What topics does the site cover?
            </h3>

            <p className="mt-4 text-lg leading-8">
              Topics include anxiety, stress, gratitude, prayer, mindset,
              emotional peace, Christian routines, overthinking,
              confidence, personal growth, productivity, and scripture-based
              encouragement.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
