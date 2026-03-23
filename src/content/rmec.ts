export const site = {
  name: "RMEC International",
  legalName: "Royal Ministers Evangelistic Churches International",
  founder: "Apostle Vincent Prince Obonyo",
  founderTitle: "Founder & Presiding Apostle",
  ribbonGoals:
    "Raising Leaders • Strengthening Churches • Transforming Communities • Influencing Nations",
  ecosystemLine:
    "Apostolic ecosystem for church, leadership, community, and marketplace transformation.",
  taglineShort:
    "Raising Leaders, Transforming Communities, and Advancing the Kingdom Across Nations.",
  apostolicDeclaration:
    "RMEC International exists to raise leaders, strengthen the Church, transform communities, and influence the marketplace for the advancement of God's Kingdom.",
  globalMissionFooter:
    "Reaching Africa • Impacting Nations • Advancing the Kingdom",
} as const;

export const vision = {
  long: `RMEC – International exists to advance the Kingdom of God through an integrated apostolic ecosystem that strengthens church ministry, equips leaders, transforms communities, develops education and skills, and influences the marketplace with ethical and kingdom-centered values.

Through strategic pillars that include church ministry, leadership empowerment, education, community transformation, and marketplace engagement, RMEC seeks to raise a generation of spiritually grounded leaders and empowered communities that impact nations.

By mobilizing ministers, entrepreneurs, and community leaders, RMEC International builds partnerships and platforms that promote holistic transformation—spiritually, socially, and economically.`,
  conference: `RMEC International is an apostolic ecosystem advancing church ministry, leadership empowerment, community transformation, education, and marketplace influence to raise leaders and transform nations.`,
  tagline: site.taglineShort,
} as const;

export const mandate = {
  intro: `RMEC – International is an apostolic movement established to advance the Kingdom of God by raising, equipping, and mobilizing leaders who will transform churches, communities, and nations through the power of the Gospel and principled leadership.

The mandate of RMEC is to strengthen the Church, empower ministers and leaders, equip communities through education and development, extend compassion to vulnerable populations, and influence the marketplace with ethical and kingdom-centered values.

Through its integrated apostolic ecosystem, RMEC International seeks to mobilize pastors, missionaries, entrepreneurs, and community leaders who will carry the message of Christ and demonstrate practical transformation in society.`,
  areasTitle: "Areas of Apostolic Assignment",
  areasIntro:
    "RMEC fulfills this mandate through five strategic pillars:",
  areas: [
    {
      title: "Church Ministry",
      body: "Establishing and strengthening churches that disciple believers and serve as centers of spiritual growth and community impact.",
    },
    {
      title: "Leadership Empowerment",
      body: "Equipping pastors and ministry leaders through Ministers Training Institute (MTI) with the knowledge, character, and skills required for effective ministry leadership.",
    },
    {
      title: "Education and Development",
      body: "Promoting leadership development and learning initiatives through Royal Academy to empower individuals with knowledge, skills, and values necessary for societal transformation.",
    },
    {
      title: "Community Transformation",
      body: "Serving vulnerable communities through Royalcare Community CBO, with programs that empower vulnerable youth, women, persons living with disabilities, and the elderly.",
    },
    {
      title: "Marketplace Influence",
      body: "Engaging the marketplace through Romise Medal Services Limited, which operates the Romise Kingdom Business Network, connecting entrepreneurs, promoting business partnerships, and advancing ethical leadership in the marketplace.",
    },
  ],
} as const;

export const corePurpose =
  "To raise spiritually grounded leaders, empower communities, and influence society through a holistic approach that integrates faith, leadership development, education, community service, and marketplace engagement.";

export type PillarAccent =
  | "maroon"
  | "royal"
  | "gold"
  | "forest"
  | "purple"
  | "compassion"
  | "missions";

export interface SixPillar {
  n: number;
  title: string;
  summary: string;
  operationalArm: string;
  accent: PillarAccent;
  focus: readonly string[];
}

export const sixPillarsIntro =
  "RMEC advances its mandate through six integrated pillars—each with a clear operational arm across the RMEC ecosystem.";

export const sixPillars: readonly SixPillar[] = [
  {
    n: 1,
    title: "Church & Evangelistic Ministry",
    summary:
      "Strengthening the body of Christ through evangelism, discipleship, missionary outreach, and church planting.",
    operationalArm: "RMEC Churches",
    accent: "maroon",
    focus: [
      "Evangelism and missionary outreach",
      "Church planting",
      "Discipleship and pastoral care",
      "Apostolic oversight and spiritual leadership",
    ],
  },
  {
    n: 2,
    title: "Leadership Development",
    summary:
      "Equipping pastors, ministers, and leaders with spiritual formation and practical leadership skills.",
    operationalArm: "Ministers Training Institute (MTI)",
    accent: "royal",
    focus: [
      "Ministers training programs",
      "Leadership seminars and conferences",
      "Mentorship and leadership development",
    ],
  },
  {
    n: 3,
    title: "Education & Skills Development",
    summary:
      "Knowledge development, leadership preparation, and vocational empowerment.",
    operationalArm: "Royal Academy",
    accent: "gold",
    focus: [
      "Leadership education",
      "Youth development",
      "Skills training and empowerment programs",
    ],
  },
  {
    n: 4,
    title: "Community Transformation",
    summary:
      "Outreach initiatives that empower vulnerable communities and promote social wellbeing.",
    operationalArm: "Royalcare Community CBO",
    accent: "forest",
    focus: [
      "Empowering vulnerable youth",
      "Supporting women",
      "Assisting persons living with disabilities",
      "Supporting the elderly",
    ],
  },
  {
    n: 5,
    title: "Marketplace & Economic Empowerment",
    summary:
      "Ethical entrepreneurship and business networking for economic growth and kingdom influence.",
    operationalArm: "Romise Medal Services Limited",
    accent: "purple",
    focus: [
      "Platform: Romise Kingdom Business Network",
      "Business networking and partnerships",
      "Entrepreneur empowerment",
      "Product promotion and exhibitions",
      "Marketplace leadership development",
    ],
  },
  {
    n: 6,
    title: "Social Impact & Compassion Ministries",
    summary:
      "Compassion and humanitarian outreach that demonstrates Christ's love in society.",
    operationalArm:
      "Royalcare outreach initiatives and RMEC compassion programs",
    accent: "compassion",
    focus: [
      "Community support initiatives",
      "Humanitarian outreach",
      "Compassion and relief programs",
    ],
  },
] as const;

export interface SevenPillar {
  n: number;
  title: string;
  intro: string;
  operationalArm: string;
  platform?: string;
  accent: PillarAccent;
  focus: readonly string[];
}

export const sevenPillarsIntro = `RMEC International advances its apostolic mandate by engaging seven strategic spheres of influence that shape society and transform communities. These pillars guide the mission of the RMEC ecosystem as it raises leaders, strengthens the Church, empowers communities, and promotes ethical influence in the marketplace.

The homepage highlights six operational clusters for clarity; the seventh pillar—Missions & Evangelistic Outreach—names a distinct sphere of assignment that works closely with church ministry and compassion initiatives across the field.`;

export const sevenPillars: readonly SevenPillar[] = [
  {
    n: 1,
    title: "Church & Spiritual Life",
    intro:
      "Strengthening the body of Christ through evangelism, discipleship, church planting, and pastoral leadership.",
    operationalArm: "RMEC Churches",
    accent: "maroon",
    focus: [
      "Evangelism and discipleship",
      "Apostolic oversight",
      "Church leadership development",
    ],
  },
  {
    n: 2,
    title: "Leadership Development",
    intro:
      "Equipping pastors, ministers, and leaders with spiritual formation and practical leadership skills.",
    operationalArm: "Ministers Training Institute (MTI)",
    accent: "royal",
    focus: [
      "Ministers training",
      "Leadership seminars",
      "Mentorship and capacity building",
    ],
  },
  {
    n: 3,
    title: "Education & Skills Development",
    intro:
      "Intellectual growth, training, and leadership preparation for individuals and communities.",
    operationalArm: "Royal Academy",
    accent: "gold",
    focus: [
      "Leadership education",
      "Skills development",
      "Youth empowerment programs",
    ],
  },
  {
    n: 4,
    title: "Community Transformation",
    intro:
      "Outreach and empowerment programs that support vulnerable populations and strengthen communities.",
    operationalArm: "Royalcare Community CBO",
    accent: "forest",
    focus: [
      "Empowering vulnerable youth",
      "Supporting women",
      "Assisting persons living with disabilities",
      "Supporting the elderly",
    ],
  },
  {
    n: 5,
    title: "Marketplace & Economic Empowerment",
    intro:
      "Promoting ethical entrepreneurship and connecting businesses for economic growth.",
    operationalArm: "Romise Medal Services Limited",
    platform: "Romise Kingdom Business Network",
    accent: "purple",
    focus: [
      "Business networking",
      "Entrepreneur empowerment",
      "Product promotion and exhibitions",
      "Marketplace leadership",
    ],
  },
  {
    n: 6,
    title: "Missions & Evangelistic Outreach",
    intro:
      "Mobilizing missionaries and evangelists to spread the Gospel and support church planting initiatives.",
    operationalArm: "RMEC Mission Initiatives",
    accent: "missions",
    focus: [
      "Evangelistic campaigns",
      "Missionary mobilization",
      "Church planting support",
    ],
  },
  {
    n: 7,
    title: "Social Impact & Compassion Ministries",
    intro:
      "Acts of compassion and service that demonstrate the love of Christ in society.",
    operationalArm:
      "Royalcare outreach initiatives and RMEC compassion programs",
    accent: "compassion",
    focus: [
      "Community relief",
      "Social support programs",
      "Humanitarian outreach",
    ],
  },
] as const;

export const sevenPillarsSummary =
  "Through these seven pillars, RMEC International integrates spiritual ministry, leadership empowerment, education, community development, and marketplace engagement to produce holistic transformation.";
