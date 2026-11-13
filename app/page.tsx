import HomeClient from '@/components/HomeClient';
import { getProjects, getSkills } from '@/lib/api';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const [projects, skills] = await Promise.all([getProjects(), getSkills()]);
  return <HomeClient projects={projects} skills={skills} />;
}