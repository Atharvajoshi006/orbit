export interface GoalItem {
  id: string;
  title: string;
  status: "In Progress" | "At Risk" | "Target Met" | "Queued";
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

export interface ActivityItem {
  id: string;
  title: string;
  category: string;
  timeAgo: string;
}

export interface OrbitSeeingInsight {
  headline: string;
  observation: string;
  subObservation?: string;
  connectedAreas: string[];
  timestamp: string;
  actionText?: string;
}

export interface PulseMockData {
  user: {
    name: string;
    greeting: string;
    subheading: string;
  };
  metrics: {
    goalsSummary: string;
    projectsSummary: string;
    learningSummary: string;
    ideasSummary: string;
  };
  orbitSeeing: OrbitSeeingInsight;
  goals: GoalItem[];
  projects: ProjectItem[];
  learning: LearningItem[];
  ideas: IdeaItem[];
  recentActivity: ActivityItem[];
}

export const pulseData: PulseMockData = {
  user: {
    name: "AJ",
    greeting: "Good evening, AJ.",
    subheading: "Here's what's happening in your orbit.",
  },
  metrics: {
    goalsSummary: "3 active · 1 at risk",
    projectsSummary: "2 active",
    learningSummary: "Strong ML momentum",
    ideasSummary: "4 recent",
  },
  orbitSeeing: {
    headline: "ORBIT IS SEEING",
    observation: "You've been exploring AI agents across your projects and learning.",
    subObservation: "There seems to be a common thread forming.",
    actionText: "Explore this pattern →",
    connectedAreas: ["Agent Sandbox", "Systems AI", "Multi-Agent Patterns"],
    timestamp: "Today",
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
      title: "Production Evaluation Pipeline",
      status: "At Risk",
      progress: 25,
      timeframe: "Needs Review",
    },
  ],
  projects: [
    {
      id: "p-1",
      title: "GeoOre",
      tag: "Spatial Intelligence",
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
  ],
  learning: [
    {
      id: "l-1",
      topic: "ML Learning",
      domain: "Neural Architectures",
      level: "Deep Dive",
      notesCount: 8,
    },
    {
      id: "l-2",
      topic: "Transformer Memory Mechanisms",
      domain: "Systems AI",
      level: "Applied",
      notesCount: 6,
    },
    {
      id: "l-3",
      topic: "Graph Retrieval-Augmented Generation",
      domain: "Knowledge Systems",
      level: "Conceptual",
      notesCount: 5,
    },
  ],
  ideas: [
    {
      id: "i-1",
      title: "AI Agent idea: Context graph routing",
      context: "Agent Architecture",
      resonance: "High",
    },
    {
      id: "i-2",
      title: "Bidirectional context links between journal & active tasks",
      context: "Context Engine",
      resonance: "High",
    },
    {
      id: "i-3",
      title: "Background memory synthesis trigger during low activity",
      context: "Memory Layer",
      resonance: "Exploring",
    },
    {
      id: "i-4",
      title: "Semantic clustering across disjoint project spaces",
      context: "Personal ML",
      resonance: "Seed",
    },
  ],
  recentActivity: [
    {
      id: "a-1",
      title: "GeoOre",
      category: "Project Space",
      timeAgo: "24m ago",
    },
    {
      id: "a-2",
      title: "ML Learning",
      category: "Learning Node",
      timeAgo: "2h ago",
    },
    {
      id: "a-3",
      title: "AI Agent idea",
      category: "Idea Capture",
      timeAgo: "5h ago",
    },
    {
      id: "a-4",
      title: "Journal entry",
      category: "Daily Reflection",
      timeAgo: "Yesterday",
    },
  ],
};

