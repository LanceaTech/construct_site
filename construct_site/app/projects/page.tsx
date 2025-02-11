import ProjectGallery from "@/components/projects/ProjectGallery";
import { PageTransition } from "@/components/shared/animations";

export default function ProjectsPage() {
  return (
    <PageTransition>
      <ProjectGallery />
    </PageTransition>
  );
}