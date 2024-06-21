import { getProjects } from "@/config/project-config";
import ProjectsView from "./projects-view";
export default async function ProjectPage({ params }) {
  const projects = await getProjects();

  return (
    <div>
      <ProjectsView projects={projects} />
    </div>
  );
}
