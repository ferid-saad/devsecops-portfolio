import HomeClient from '@/components/HomeClient';
import { getProjects } from '@/lib/api';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const projects = await getProjects();
  return <HomeClient projects={projects} />;
}