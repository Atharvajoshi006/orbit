import { pulseData } from "./mock-data";

export interface Profile {
  id?: number;
  name: string;
  display_name: string;
  bio?: string;
  education?: string;
  skills?: string[];
  interests?: string[];
  current_focus?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Goal {
  id: number | string;
  title: string;
  description?: string;
  category?: string;
  status: string;
  progress: number;
  target_date?: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface Project {
  id: number | string;
  title: string;
  description?: string;
  status: string;
  tech_stack?: string[];
  github_url?: string;
  progress?: number;
  created_at?: string;
  updated_at?: string;
}

export interface Idea {
  id: number | string;
  title: string;
  content?: string;
  entry_type?: string;
  tags?: string[];
  created_at?: string;
  updated_at?: string;
}

export const FALLBACK_PROFILE: Profile = {
  name: "AJ",
  display_name: "AJ",
  bio: "",
  education: "",
  skills: [],
  interests: [],
  current_focus: "Here's what's happening in your orbit.",
};

const API_BASE_URL = "http://localhost:8000/api";

/**
 * Fetches user profile data from the Django API.
 * Gracefully falls back to default mock values if the backend is offline.
 */
export async function fetchProfile(): Promise<Profile> {
  try {
    const res = await fetch(`${API_BASE_URL}/profile/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch profile: ${res.statusText}`);
    }

    const data: Profile = await res.json();
    return data;
  } catch (error) {
    return FALLBACK_PROFILE;
  }
}

/**
 * Fetches goals from the Django API.
 * Gracefully falls back to mock goals array on error.
 */
export async function fetchGoals(): Promise<Goal[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/goals/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch goals: ${res.statusText}`);
    }

    const data: Goal[] = await res.json();
    return data;
  } catch (error) {
    return pulseData.goals.map((g) => ({
      id: g.id,
      title: g.title,
      status: g.status.toLowerCase(),
      progress: g.progress,
      category: "short-term",
    }));
  }
}

/**
 * Fetches projects from the Django API.
 * Gracefully falls back to mock projects array on error.
 */
export async function fetchProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/projects/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch projects: ${res.statusText}`);
    }

    const data: Project[] = await res.json();
    return data;
  } catch (error) {
    return pulseData.projects.map((p) => ({
      id: p.id,
      title: p.title,
      status: p.status.toLowerCase(),
      description: p.tag,
      progress: 50,
    }));
  }
}

/**
 * Fetches ideas from the Django API.
 * Gracefully falls back to mock ideas array on error.
 */
export async function fetchIdeas(): Promise<Idea[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/ideas/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch ideas: ${res.statusText}`);
    }

    const data: Idea[] = await res.json();
    return data;
  } catch (error) {
    return pulseData.ideas.map((i) => ({
      id: i.id,
      title: i.title,
      content: i.context,
      entry_type: "idea",
      tags: [i.resonance],
    }));
  }
}
