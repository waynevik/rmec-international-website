export const founderProfile = {
  fullName: "Apostle Vincent Prince Obonyo",
  shortName: "Vincent Prince Obonyo",
  title: "Founder & Presiding Apostle",
  tagline:
    "The journey of Vincent Prince Obonyo — Ministers Training Institute (MTI) and the emergence of RMEC–International",
} as const;

export type FounderSection = {
  id: string;
  heading: string;
  subsections: readonly {
    subheading?: string;
    paragraphs: readonly string[];
    list?: readonly string[];
  }[];
};

export const founderJourneySections: readonly FounderSection[] = [
  {
    id: "phase-one",
    heading: "Phase one: Foundations of a calling",
    subsections: [
      {
        subheading: "Birth, growth, and early life",
        paragraphs: [
          "Evangelist Vincent Prince Obonyo was born and raised partly in a rural village known as Ywaya, Ting’are East Sub-Location, Sigomere Division, Ugenya Sub-County, Siaya County, Kenya. In his teenage years, life took a sharp turn when he grew up in the Manyatta slums of Kisumu County.",
          "His journey through childhood and adolescence was shaped significantly by the sacrifice and resilience of his mother, who single-handedly played a crucial role in nurturing, educating, and guiding him from his early school years into adulthood.",
          "The journey of growth and education was extremely difficult. Financial hardship and life pressures caused repeated interruptions in his academic pursuit, leading to periods where he dropped out of school.",
          "At one point, he stood at the edge of losing direction entirely — nearly becoming a street boy, a hawker, or a casual vendor. Along the way, he even worked as a club and disco matanga DJ, playing music at social events to survive.",
          "Yet, by the grace of God, Vincent regained his focus. He returned to education, rising steadily from one level to another through determination and divine help.",
          "Today, that same young man is pursuing a Master’s Degree in Organizational Governance and Leadership — a testimony that purpose can rise from adversity. Alongside that, he holds a Certificate in Conflict Resolution (Mediation), is certified in Presidential Protocol and Government Events Management, and holds other professional certifications.",
        ],
      },
      {
        subheading: "Conversion to Christ (2005): a life transformed",
        paragraphs: [
          "In 2005, Vincent encountered Jesus Christ following a major national evangelistic crusade known as “KUNA NURU GIZANI,” conducted by one of God’s generals, Bishop Pius Muiru, the founder of Maximum Miracle Centre and Nuru TV — a ministry that has led multitudes to Christ across Kenya.",
          "Though he did not give his life to Christ during the crusade itself, he later joined the newly planted Maximum Miracle Centre church.",
          "It was there, under Pastor Shadrack and the regional leadership of Bishop Elisha Ombima, that Vincent fully surrendered his life to Christ.",
          "From that moment in 2005, his commitment to Christ became unwavering — and he has stood for Jesus ever since.",
        ],
      },
      {
        subheading: "A season of raising: Bishop George Kennedy (2007–2016)",
        paragraphs: [
          "Two years later, following the tragic post-election violence, Maximum Miracle Centre churches in the region were closed. In search of spiritual stability and growth, Vincent encountered Bishop Dr. George Kennedy of Dominion Chapel International, Kisumu.",
          "From 2007 to 2016, Bishop George Kennedy became a key instrument God used to raise, equip, and shape Vincent for ministry. Over nearly ten years, he was grounded in servanthood, faithfulness, order, excellence, and kingdom leadership.",
          "It was during this season that Vincent matured spiritually, got married, and in 2016 was ordained in the office of an Evangelist alongside his wife as a pastor. Together they began to sense a clear release into a broader training and equipping mandate. Toward the end of 2018, he was fully released into his training ministry where the Lord led him to start their training base in Nakuru.",
        ],
      },
    ],
  },
  {
    id: "mti",
    heading: "The conception and launch of Ministers Training Institute (MTI)",
    subsections: [
      {
        subheading: "Phase two: 2016–2026",
        paragraphs: [
          "Today, we pause to journey through how Ministers Training Institute (MTI) was conceived, birthed, and grown.",
          "This vision did not begin with funding, infrastructure, or popularity. It began with a burden — a deep desire to see God’s work done holistically, without gaps that invite disorder, mockery, or spiritual compromise.",
          "After over fifteen years of faithful service in the local church and across various Body of Christ programs — locally, nationally, and internationally — God stirred a deeper hunger: to see the Church walk not only in power, but also in order, excellence, and integrity.",
        ],
      },
      {
        subheading: "A defining encounter: MBCI & the spirit of excellence",
        paragraphs: [
          "A pivotal turning point came through a Body of Christ meeting organized by Mission to the Body of Christ International (MBCI), led by Apostle William Kimani. That meeting deposited something eternal in Vincent’s spirit — the revelation of serving God with excellence.",
          "After the meeting, Vincent intentionally aligned himself for growth. Two years later, he visited Apostle William Kimani’s church in Nakuru — unaware that this visit would become prophetic.",
          "That Sunday, the Fourth President of the Republic of Kenya was in attendance. Though Vincent had attended many state functions before, this was his first Sunday worship service with the Head of State present.",
          "What he witnessed was transformational: precision in parking and security, orderly church flow and protocol, excellence in pulpit and service management, and seamless coordination between state and church logistics.",
          "As Apostle Kimani preached and the President listened, the Holy Spirit spoke clearly: “This season, the Church of Jesus Christ must govern in two dimensions: the Anointing and the Spirit of Excellence.”",
          "After the service, Vincent shared this revelation with Apostle Kimani. He prayed for him — and released him into his global training mandate.",
        ],
      },
      {
        subheading: "The birth of the training vision",
        paragraphs: [
          "Returning to Kisumu, Vincent shared the encounter with his wife. Together, they committed the vision to prayer.",
          "He withdrew to Heaven’s Gate Prayer Mountain for twenty-one days. On the eleventh day, the Holy Spirit whispered: “The time to launch the training ministry is now. Before you begin, I will help you write a manual that will build My Church.”",
          "By the end of the fast, Vincent had written a comprehensive training manual covering fifteen-plus church departments, including pastoral leadership, administration, intercessory ministry, evangelism, protocol, welfare, hospitality & ushers, security, music, counselling, and women, men, children & youth ministries. Within weeks, the manuals were published and ready.",
        ],
      },
      {
        subheading: "The official launch & expansion of MTI (2018–2026)",
        paragraphs: [
          "In February 2018, Ministers Training Institute (MTI) was officially launched.",
          "From then until today, “Empowered to Function” has remained MTI’s core mandate and identity. Along the journey, Vincent became widely known as “Mr. Protocol” or “The Bishop of Protocol” — not by title, but by assignment.",
          "MTI has since trained ministers across villages, towns, cities, and nations; served the Body of Christ at county, national, and international levels; and been officially registered as a legal entity in 2021.",
        ],
      },
      {
        subheading: "Missions, impact & maturity",
        paragraphs: [
          "In 2024, MTI entered a new apostolic dimension after having the privilege to join mission training through Youth With A Mission (YWAM), Port Harcourt, Nigeria.",
          "In 2025, through this missions training, young people were organized from Kenya (twenty trainees), Tanzania (six), and Uganda (fifteen). They undertook three months of intensive discipleship and Bible translation training with YWAM Jinja – Hopeland, marking MTI’s maturity into a sending movement.",
        ],
      },
      {
        subheading: "2026: transition & a new dawn",
        paragraphs: [
          "By 2026, MTI completed Phase Two (2016–2026) — a decade of foundations, obedience, refinement, and capacity building. Now we begin Phase Three (2026–2036).",
        ],
      },
    ],
  },
  {
    id: "rmec",
    heading:
      "The apostolic consecration, commissioning & birth of RMEC–International",
    subsections: [
      {
        paragraphs: [
          "This transition marks the emergence of RMEC–International, a global apostolic ecosystem designed to incubate, govern, and release Kingdom institutions.",
          "In Phase Three, RMEC–International will serve as the mother and incubator of the following independent but aligned institutions:",
        ],
        list: [
          "Ministers Training Institute (MTI)",
          "Royal Ministers Evangelistic Church (RMEC)",
          "RoyalCare Academy",
          "Royal Ministers Missionary Agency",
          "Royal Care Community-Based Organization (CBO)",
        ],
      },
      {
        paragraphs: [
          "Each of these arms will operate independently, yet under one apostolic vision — to raise, equip, send, and govern with both the anointing and the spirit of excellence, for the glory of God and the advancement of His Kingdom.",
          "RMEC International: Kingdom expansion to Kakamega County as the new operational base.",
        ],
      },
    ],
  },
] as const;
