import { projectsData, type Project } from '@/data/projects';
import { skillsCategories, type SkillCategory } from '@/data/skills';

const API_URL = process.env.API_URL ?? 'http://localhost:4000';

async function fetchFromApi<T>(path: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(`${API_URL}${path}`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as T;
  } catch (error) {
    console.warn(`[api] ${path} indisponible, données locales utilisées`, error);
    return fallback;
  }
}

export const getProjects = () =>
  fetchFromApi<Project[]>('/api/projects', projectsData);

export const getSkills = () =>
  fetchFromApi<SkillCategory[]>('/api/skills', skillsCategories);