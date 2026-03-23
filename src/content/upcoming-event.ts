export const upcomingEvent = {
  title: "RMEC International Launch & Apostolic Consecration",
  subtitle:
    "The official launch of RMEC International and the apostolic consecration of Apostle Vincent Prince Obonyo — Founder and Presiding Apostle.",
  /** When set, each line appears under “Event details”. Leave blank until confirmed. */
  logistics: {
    date: "",
    time: "",
    venue: "",
    note: "",
  },
  verse: {
    text: "Go therefore and make disciples of all nations.",
    ref: "Matthew 28:19",
  },
  imageSrc: "/events/rmec-launch-consecration.png",
  imageAlt:
    "RMEC International launch and apostolic consecration — welcome banner with pillars and global mission imagery",
  highlights: [
    {
      title: "Church Ministry",
      description: "Strengthening the local church and evangelistic witness.",
    },
    {
      title: "Leadership Training — MTI",
      description: "Equipping ministers through Ministers Training Institute.",
    },
    {
      title: "Education & Skills — Royal Academy",
      description: "Knowledge, skills, and values for societal transformation.",
    },
    {
      title: "Community Outreach — Royalcare",
      description: "Compassion and development in vulnerable communities.",
    },
    {
      title: "Marketplace — Romise Kingdom Business Network",
      description: "Ethical leadership and kingdom-centered marketplace influence.",
    },
  ],
} as const;
