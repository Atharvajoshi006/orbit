export interface GoalItem {
  id: string;
  title: string;
  status: "In Progress" | "Target Met" | "Queued";
  progress: number;
  timeframe: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tag: string;
  status: "Active" | "Scoping" | "Refining";
  lastActive: string;
}

export interface LearningItem {
  id: string;
  topic: string;
  domain: string;
  level: string;
  notesCount: number;
}

export interface IdeaItem {
  id: string;
  title: string;
  context: string;
  resonance: "High" | "Exploring" | "Seed";
}

export interface OrbitSeeingInsight {
  headline: string;
  observation: string;
  connectedAreas: string[];
  timestamp: string;
}

export interface PulseMockData {
  user: {
    name: string;
    greeting: string;
    subheading: string;
  };
  orbitSeeing: OrbitSeeingInsight;
  goals: GoalItem[];
  projects: ProjectItem[];
  learning: LearningItem[];
  ideas: IdeaItem[];
  signals: {
    title: string;
    detail: string;
    type: "trend" | "focus" | "synthesis";
  }[];
}

export const pulseData: PulseMockData = {
  user: {
    name: "AJ",
    greeting: "Welcome back, AJ.",
    subheading: "Here's what's happening in your orbit.",
  },
  orbitSeeing: {
    headline: "ORBIT IS SEEING",
    observation:
      "You've been exploring AI agents across your projects and learning. Active synthesis is building between multi-agent workflows and your core system architecture.",
    connectedAreas: ["Projects: Agent Sandbox", "Learning: Agent Orchestration", "Goals: ORBIT Foundation"],
    timestamp: "Observed today",
  },
  goals: [
    {
      id: "g-1",
      title: "Establish ORBIT v0.1 Foundation",
      status: "In Progress",
      progress: 75,
      timeframe: "This Sprint",
    },
    {
      id: "g-2",
      title: "Master Multi-Agent Orchestration Patterns",
      status: "In Progress",
      progress: 40,
      timeframe: "Q1 Goal",
    },
    {
      id: "g-3",
      title: "Deepen Context Architecture Understanding",
      status: "Queued",
      progress: 20,
      timeframe: "Ongoing",
    },
  ],
  projects: [
    {
      id: "p-1",
      title: "ORBIT Core System",
      tag: "Ecosystem Architecture",
      status: "Active",
      lastActive: "Active today",
    },
    {
      id: "p-2",
      title: "Autonomous Agent Sandbox",
      tag: "Research & Prototyping",
      status: "Active",
      lastActive: "Yesterday",
    },
    {
      id: "p-3",
      title: "Personal Knowledge Graph Schema",
      tag: "Data Modeling",
      status: "Scoping",
      lastActive: "3 days ago",
    },
  ],
  learning: [
    {
      id: "l-1",
      topic: "Transformer Memory Mechanisms",
      domain: "Machine Learning",
      level: "Deep Dive",
      notesCount: 6,
    },
    {
      id: "l-2",
      topic: "Multi-Agent Coordination & Consensus",
      domain: "Systems AI",
      level: "Applied",
      notesCount: 4,
    },
    {
      id: "l-3",
      topic: "Graph Retrieval-Augmented Generation",
      domain: "Knowledge Systems",
      level: "Conceptual",
      notesCount: 8,
    },
  ],
  ideas: [
    {
      id: "i-1",
      title: "Bidirectional context links between journal and active tasks",
      context: "Context Engine",
      resonance: "High",
    },
    {
      id: "i-2",
      title: "Background memory synthesis trigger during low cognitive activity",
      context: "Memory Layer",
      resonance: "Exploring",
    },
    {
      id: "i-3",
      title: "Semantic clustering across disjoint project ideas",
      context: "Personal ML",
      resonance: "Seed",
    },
  ],
  signals: [
    {
      title: "Ecosystem Balance",
      detail: "High activity across projects and learning threads.",
      type: "focus",
    },
    {
      title: "Context Density",
      detail: "18 interconnected nodes across active themes.",
      type: "synthesis",
    },
    {
      title: "Cognitive Focus",
      detail: "Primary attention clustered around AI Foundation.",
      type: "trend",
    },
  ],
};
