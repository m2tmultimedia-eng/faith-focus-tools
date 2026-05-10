export type FaithArticle = {
  slug: string;
  title: string;
  description: string;
  focus: string;
  struggle: string;
  truth: string;
  practice: string;
  prayer: string;
  prompts: string[];
  affirmations: string[];
};

export const articles: FaithArticle[] = [
  {
    slug: "how-biblical-affirmations-work",
    title: "How Biblical Affirmations Actually Work",
    description: "A practical Christian guide to using biblical affirmations with prayer, scripture, and daily action.",
    focus: "renewing your mind with scripture-based truth",
    struggle: "negative self-talk, fear, doubt, and mental pressure",
    truth: "God's truth is stronger than the loudest thought running through your mind",
    practice: "read one affirmation slowly, connect it to scripture, pray over it, and take one faith-filled action",
    prayer: "Lord, help me agree with Your truth more than my fear. Renew my mind and teach me to speak words that build faith, wisdom, and peace.",
    prompts: [
      "What thought do I need to replace with truth today?",
      "What scripture reminds me of God's faithfulness?",
      "What action would match the truth I say I believe?"
    ],
    affirmations: [
      "My mind can be renewed by God's truth.",
      "I do not have to agree with fear.",
      "God is helping me think clearly and walk wisely."
    ]
  },
  {
    slug: "prayers-for-anxiety",
    title: "Prayers for Anxiety and Peace",
    description: "Faith-based prayers and reflections for anxiety, worry, fear, and emotional overwhelm.",
    focus: "finding peace when your thoughts feel heavy",
    struggle: "anxiety, racing thoughts, uncertainty, and emotional exhaustion",
    truth: "peace is not pretending problems are gone; peace is trusting God while you face them",
    practice: "pause, breathe, name the worry, pray honestly, and choose one wise next step",
    prayer: "Lord, calm my thoughts and steady my heart. Help me release what I cannot control and give me wisdom for what I can do today.",
    prompts: [
      "What worry keeps repeating in my mind?",
      "What is actually within my control right now?",
      "Where do I need to invite God's peace?"
    ],
    affirmations: [
      "God can meet me in anxious moments.",
      "I can slow down and breathe.",
      "Peace is available to me one step at a time."
    ]
  },
  {
    slug: "morning-prayer-routine",
    title: "A Simple Morning Prayer Routine",
    description: "Build a peaceful morning prayer rhythm with gratitude, scripture, reflection, and focus.",
    focus: "starting the day with God before distractions take over",
    struggle: "rushed mornings, scattered focus, stress, and spiritual inconsistency",
    truth: "the first moments of the day can become a doorway into peace, gratitude, and direction",
    practice: "begin with gratitude, read one scripture, pray over your day, and choose one faithful action",
    prayer: "Lord, guide my thoughts, words, and decisions today. Help me move with peace, discipline, patience, and wisdom.",
    prompts: [
      "What am I thankful for this morning?",
      "What do I need God to guide today?",
      "What one action would make today more faithful?"
    ],
    affirmations: [
      "I can begin today with peace.",
      "God gives me wisdom for this day.",
      "My morning can be simple, focused, and faithful."
    ]
  },
  {
    slug: "scriptures-for-financial-stress",
    title: "Scriptures for Financial Stress",
    description: "Faith-based encouragement for money anxiety, provision, wisdom, and stewardship.",
    focus: "trusting God while taking responsible financial action",
    struggle: "bills, debt, pressure, uncertainty, and money fear",
    truth: "financial stress is real, but panic does not have to become your plan",
    practice: "pray for wisdom, list the facts, identify one practical step, and avoid fear-based decisions",
    prayer: "Lord, provide what is needed and teach me to manage what is in my hands with wisdom, patience, and faith.",
    prompts: [
      "What financial issue needs attention first?",
      "What can I negotiate, reduce, or organize?",
      "What wise step can I take today?"
    ],
    affirmations: [
      "God gives wisdom for financial decisions.",
      "I can face money matters with clarity.",
      "Provision and discipline can work together."
    ]
  },
  {
    slug: "christian-goal-setting",
    title: "Christian Goal Setting",
    description: "Learn how to set faith-based goals with prayer, wisdom, discipline, and surrender.",
    focus: "building goals that honor God and produce faithful action",
    struggle: "vague dreams, inconsistency, distraction, and fear of starting",
    truth: "a goal becomes stronger when it is guided by prayer and supported by daily obedience",
    practice: "pray first, define the goal clearly, choose one habit, and review progress weekly",
    prayer: "Lord, help me pursue the right goals for the right reasons. Give me discipline, humility, and wisdom as I move forward.",
    prompts: [
      "Does this goal honor God?",
      "Who does this goal help me become?",
      "What daily habit supports this goal?"
    ],
    affirmations: [
      "I can pursue goals with wisdom.",
      "Small faithful steps matter.",
      "God can guide my ambition."
    ]
  },
  {
    slug: "bible-verses-for-confidence",
    title: "Bible Verses for Confidence",
    description: "Faith-based encouragement for courage, identity, self-worth, and bold action.",
    focus: "building confidence rooted in God instead of approval",
    struggle: "insecurity, comparison, criticism, and fear of failure",
    truth: "confidence rooted in God is quieter, stronger, and steadier than ego",
    practice: "remember your identity, pray before action, and take one courageous step",
    prayer: "Lord, remind me who I am in You. Help me walk with courage, humility, and steady faith.",
    prompts: [
      "Where am I seeking approval too much?",
      "What truth defines me better than criticism?",
      "What courageous step is in front of me?"
    ],
    affirmations: [
      "My worth is not controlled by opinions.",
      "God gives me courage for this season.",
      "I can act with faith even when I feel nervous."
    ]
  },
  {
    slug: "prayers-for-overthinking",
    title: "Prayers for Overthinking",
    description: "Simple prayers and faith-based reflection for mental noise, worry loops, and decision stress.",
    focus: "quieting mental noise through prayer and truth",
    struggle: "replaying conversations, imagining worst-case scenarios, and struggling to decide",
    truth: "not every thought deserves a microphone",
    practice: "write the thought down, test it with truth, pray over it, and choose the next wise step",
    prayer: "Lord, quiet the noise in my mind. Help me separate wisdom from fear and trust You with what I cannot solve today.",
    prompts: [
      "What thought keeps looping?",
      "Is this thought true, useful, or within my control?",
      "What would peace choose next?"
    ],
    affirmations: [
      "I do not have to obey every anxious thought.",
      "God can give me clarity.",
      "Peace can interrupt the spiral."
    ]
  },
  {
    slug: "gratitude-journaling-with-god",
    title: "Gratitude Journaling With God",
    description: "A Christian gratitude journaling practice for prayer, peace, reflection, and daily faith.",
    focus: "training your heart to notice God's goodness",
    struggle: "negativity, discouragement, comparison, and emotional heaviness",
    truth: "gratitude does not deny problems; it keeps problems from becoming the whole story",
    practice: "write three blessings, one lesson, one prayer, and one act of obedience",
    prayer: "Lord, open my eyes to Your goodness today. Help me notice grace, provision, and lessons I might otherwise overlook.",
    prompts: [
      "Where did I see God's help today?",
      "What small blessing did I almost miss?",
      "What can I thank God for in this season?"
    ],
    affirmations: [
      "God's goodness is still present.",
      "I can notice grace in ordinary moments.",
      "Gratitude strengthens my perspective."
    ]
  },
  {
    slug: "christian-productivity",
    title: "Christian Productivity Habits",
    description: "A faith-based approach to productivity, stewardship, focus, discipline, and rest.",
    focus: "using time and energy wisely without worshiping busyness",
    struggle: "distraction, procrastination, burnout, and scattered priorities",
    truth: "productivity is stewardship, not a personality contest with a planner",
    practice: "pray over priorities, choose three important tasks, remove distractions, and protect rest",
    prayer: "Lord, help me use my time wisely. Teach me to work with focus, rest with peace, and choose what matters most.",
    prompts: [
      "What actually matters today?",
      "What distraction needs a boundary?",
      "Where do I need discipline and where do I need rest?"
    ],
    affirmations: [
      "I can be faithful with today's responsibilities.",
      "Focus is a form of stewardship.",
      "Rest is not laziness when it restores obedience."
    ]
  },
  {
    slug: "faith-and-fear",
    title: "Faith and Fear",
    description: "Understand how faith helps you face fear, uncertainty, and difficult seasons with courage.",
    focus: "choosing trust when fear gets loud",
    struggle: "uncertainty, intimidation, hesitation, and fear-based decisions",
    truth: "faith is not the absence of fear; faith is choosing where fear does not get the final word",
    practice: "name the fear, remember God's faithfulness, pray honestly, and take one brave step",
    prayer: "Lord, help me trust You in the places where fear feels loud. Give me courage, wisdom, and peace for the next step.",
    prompts: [
      "What fear is shaping my choices?",
      "What truth does fear want me to forget?",
      "What brave step can I take today?"
    ],
    affirmations: [
      "Fear does not get the final word.",
      "God can give me courage in uncertainty.",
      "I can move forward one faithful step at a time."
    ]
  },
  {
    slug: "how-to-pray-consistently",
    title: "How to Pray Consistently",
    description: "A simple guide to building a consistent prayer life without pressure, guilt, or performance.",
    focus: "making prayer honest, simple, and repeatable",
    struggle: "inconsistency, guilt, distraction, and feeling spiritually dry",
    truth: "prayer is connection, not performance",
    practice: "choose a time, keep it simple, pray honestly, and return without shame when you miss a day",
    prayer: "Lord, teach me to meet with You consistently. Remove pressure and help me build a simple, honest rhythm of prayer.",
    prompts: [
      "What time of day can I realistically pray?",
      "What do I need to be honest with God about?",
      "How can I make prayer simpler?"
    ],
    affirmations: [
      "Prayer does not have to be perfect.",
      "I can return to God without shame.",
      "Consistency grows through simple faithfulness."
    ]
  },
  {
    slug: "bible-verses-for-stress",
    title: "Bible Verses for Stress",
    description: "Faith-based encouragement for stress, pressure, overwhelm, and finding peace through scripture.",
    focus: "handling stress with prayer, wisdom, and biblical perspective",
    struggle: "pressure, deadlines, emotional weight, and too many responsibilities",
    truth: "stress may be present, but it does not have to become your identity",
    practice: "pause, breathe, pray, sort what matters, and take one manageable step",
    prayer: "Lord, meet me in this stressful place. Give me wisdom, patience, strength, and peace as I handle what is in front of me.",
    prompts: [
      "What is causing the most pressure?",
      "What can wait and what needs attention now?",
      "What truth helps me carry this differently?"
    ],
    affirmations: [
      "God can help me carry today's pressure.",
      "I can take one step at a time.",
      "Peace can meet me in the middle of responsibility."
    ]
  },
  {
    slug: "night-prayers-for-peace",
    title: "Night Prayers for Peace",
    description: "Evening prayers and reflections to help you release worry, rest your mind, and sleep with peace.",
    focus: "ending the day with surrender and rest",
    struggle: "nighttime worry, regret, mental replay, and restless sleep",
    truth: "you are allowed to rest even when everything is not solved",
    practice: "review the day gently, release tomorrow, pray for peace, and prepare your mind for rest",
    prayer: "Lord, I release this day to You. Forgive what needs forgiveness, heal what needs healing, and help me rest in Your care tonight.",
    prompts: [
      "What do I need to release tonight?",
      "Where did I see grace today?",
      "What can wait until tomorrow?"
    ],
    affirmations: [
      "I can rest in God's care.",
      "Tonight does not need to solve tomorrow.",
      "Peace is allowed to meet me before sleep."
    ]
  },
  {
    slug: "healing-after-disappointment",
    title: "Healing After Disappointment",
    description: "Faith-based encouragement for processing disappointment, delay, grief, and unmet expectations.",
    focus: "healing honestly without becoming bitter",
    struggle: "discouragement, unmet expectations, sadness, frustration, and delay",
    truth: "disappointment is painful, but it does not have to harden your heart",
    practice: "name the hurt, pray honestly, seek wisdom, and take small steps toward healing",
    prayer: "Lord, meet me in this disappointment. Help me grieve honestly, heal deeply, and keep my heart open to Your direction.",
    prompts: [
      "What expectation was not met?",
      "What emotion do I need to admit honestly?",
      "What would healing look like this week?"
    ],
    affirmations: [
      "God can meet me in disappointment.",
      "I can heal without becoming bitter.",
      "This setback is not the end of my story."
    ]
  },
  {
    slug: "christian-morning-habits",
    title: "Christian Morning Habits",
    description: "Simple morning habits for prayer, gratitude, scripture, focus, and a peaceful start to the day.",
    focus: "creating a peaceful faith-based morning rhythm",
    struggle: "rushing, distraction, phone scrolling, and starting the day stressed",
    truth: "the way you begin the day can shape how you carry the day",
    practice: "wake up gently, pray briefly, read scripture, write gratitude, and choose one priority",
    prayer: "Lord, help me begin this day with peace instead of pressure. Guide my thoughts, schedule, and attitude.",
    prompts: [
      "What is one peaceful habit I can start tomorrow?",
      "What should I avoid first thing in the morning?",
      "What priority deserves my best focus?"
    ],
    affirmations: [
      "My morning can begin with God.",
      "I do not have to start the day rushed.",
      "Peace can become part of my routine."
    ]
  },
  {
    slug: "how-to-renew-your-mind",
    title: "How to Renew Your Mind",
    description: "A Christian guide to renewing your mind through scripture, prayer, reflection, and daily practice.",
    focus: "replacing destructive thought patterns with truth",
    struggle: "old beliefs, fear, shame, negativity, and mental habits",
    truth: "renewal happens when truth is practiced repeatedly, not just admired occasionally",
    practice: "identify the thought, compare it with truth, replace it with scripture, and repeat daily",
    prayer: "Lord, renew my mind. Help me notice thoughts that pull me away from truth and replace them with wisdom and faith.",
    prompts: [
      "What belief has been shaping my behavior?",
      "Is this thought aligned with God's truth?",
      "What truth do I need to practice daily?"
    ],
    affirmations: [
      "My mind can be renewed.",
      "Old thoughts do not have to rule me.",
      "God's truth can reshape my perspective."
    ]
  },
  {
    slug: "gratitude-and-faith",
    title: "Gratitude and Faith",
    description: "Explore how gratitude strengthens faith, peace, perspective, and emotional resilience.",
    focus: "using gratitude to strengthen faith and perspective",
    struggle: "complaining, comparison, discouragement, and focusing only on what is missing",
    truth: "gratitude helps you remember that God is working even in ordinary moments",
    practice: "notice provision, write blessings down, thank God specifically, and share encouragement",
    prayer: "Lord, help me see what You are doing. Teach me to practice gratitude in both simple and difficult seasons.",
    prompts: [
      "What has God already carried me through?",
      "What blessing have I been treating as ordinary?",
      "Who can I encourage today?"
    ],
    affirmations: [
      "Gratitude strengthens my faith.",
      "I can notice God's goodness today.",
      "My perspective can shift toward hope."
    ]
  },
  {
    slug: "prayer-for-strength",
    title: "Prayer for Strength",
    description: "A faith-based prayer guide for strength, endurance, courage, and hope during hard seasons.",
    focus: "finding strength when you feel tired, pressured, or discouraged",
    struggle: "emotional exhaustion, hard seasons, pressure, and feeling overwhelmed",
    truth: "strength is not always loud; sometimes it looks like taking the next faithful step",
    practice: "pray honestly, rest wisely, ask for help, and focus on today's portion",
    prayer: "Lord, give me strength for today. Help me keep going with wisdom, courage, patience, and hope.",
    prompts: [
      "Where do I feel weakest right now?",
      "What support do I need to ask for?",
      "What is today's portion, not tomorrow's burden?"
    ],
    affirmations: [
      "God can strengthen me today.",
      "I can take the next faithful step.",
      "I do not have to carry everything alone."
    ]
  },
  {
    slug: "prayers-for-family-peace",
    title: "Prayers for Family Peace",
    description: "Prayers and reflections for family tension, patience, forgiveness, and peaceful communication.",
    focus: "bringing prayer, wisdom, and patience into family relationships",
    struggle: "conflict, misunderstanding, resentment, and emotional reactions",
    truth: "peace in a family often begins with humility, patience, and wise words",
    practice: "pray before responding, listen carefully, forgive where needed, and set healthy boundaries",
    prayer: "Lord, bring peace into my family. Help us speak with patience, listen with humility, and choose love with wisdom.",
    prompts: [
      "Where do I need patience at home?",
      "What conversation needs prayer before words?",
      "What boundary would protect peace?"
    ],
    affirmations: [
      "God can bring peace into my relationships.",
      "I can respond with wisdom.",
      "Love and boundaries can work together."
    ]
  },
  {
    slug: "prayers-for-work-stress",
    title: "Prayers for Work Stress",
    description: "Faith-based prayers for workplace pressure, difficult coworkers, deadlines, and career uncertainty.",
    focus: "handling work pressure with prayer and wisdom",
    struggle: "deadlines, difficult people, burnout, uncertainty, and responsibility",
    truth: "your work matters, but your worth is not limited to your productivity",
    practice: "pray before the workday, prioritize wisely, communicate clearly, and protect your peace",
    prayer: "Lord, guide me at work today. Give me focus, patience, excellence, and peace in every responsibility.",
    prompts: [
      "What work pressure needs prayer?",
      "What task matters most today?",
      "Where do I need patience or courage?"
    ],
    affirmations: [
      "God can guide me at work.",
      "I can work with excellence and peace.",
      "My worth is bigger than my workload."
    ]
  }
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function buildArticleParagraphs(article: FaithArticle) {
  return [
    `${article.title} is about ${article.focus}. This topic matters because many people are trying to live with faith while also carrying real pressure, real questions, and real responsibilities. Faith does not ask you to pretend life is easy. It gives you a better place to stand while you face what is in front of you.`,
    `The struggle usually shows up as ${article.struggle}. When that pressure builds, it can affect your thoughts, your emotions, your decisions, and even the way you pray. You may know the right thing in your head and still feel heavy in your heart. That does not mean your faith is broken. It means you are human, which is inconvenient but apparently still part of the assignment.`,
    `The deeper truth is this: ${article.truth}. Christian growth often begins when you stop letting the loudest feeling become the highest authority. Feelings are real, but they are not always reliable guides. Scripture, prayer, wisdom, and steady reflection help you respond instead of react.`,
    `A helpful way to practice this is to ${article.practice}. Do not overcomplicate it. Many people quit spiritual habits because they make them too dramatic. You do not need a candlelit mountain retreat, three leather journals, and a worship playlist long enough to survive a road trip. Start simple and stay consistent.`,
    `When you practice this daily, you begin to notice patterns. You notice what triggers worry. You notice what helps peace return. You notice where you have been carrying more than God asked you to carry. That awareness is powerful because you cannot surrender what you refuse to name.`,
    `This is also where prayer becomes practical. Prayer is not only asking God to change circumstances. Prayer also changes your posture inside the circumstances. It slows your mind, softens your heart, and reminds you that you are not moving through the day alone.`,
    `Try praying this slowly: ${article.prayer} Do not rush through it. Read it once with your eyes, once out loud if possible, and once as a personal conversation with God. Let the words become honest instead of automatic.`,
    `Use these reflection questions when you need clarity: ${article.prompts.join(" ")} These questions are simple on purpose. The goal is not to impress anyone. The goal is to become more honest, more aware, and more responsive to God's direction.`,
    `You can also repeat these faith-based affirmations during the day: ${article.affirmations.join(" ")} Biblical affirmations are most useful when they point you back to truth, not fantasy. They are not magic words. They are reminders that help your mind return to what is steady.`,
    `One mistake people make is waiting until they feel strong before they practice faith. In real life, faith is often practiced while you still feel tired, uncertain, or stretched. Strength usually grows while you are walking, not while you are waiting to feel perfectly ready.`,
    `Another important piece is action. Reflection without action can become spiritual window shopping. You look at truth, admire it, maybe even quote it, but never take it home. Choose one small next step that matches what you believe. Send the message. Make the plan. Take the walk. Open the Bible. Ask for help. Forgive. Rest. Begin again.`,
    `If this topic feels personal, move gently. God is not rushing you like a customer service countdown timer. Growth can be steady and compassionate. You can be honest about where you are while still believing God is leading you forward.`,
    `For today, choose one sentence from this article and carry it with you. Write it down. Pray it. Repeat it when the old pattern shows up. The goal is not perfection. The goal is faithful direction. Small steps with God still count, even when nobody claps and the progress looks quiet.`,
    `Related practice: visit the Faith Focus Tools articles page and choose another guide that connects with this topic. Building faith is easier when your encouragement is connected, practical, and repeated over time.`
  ];
}
