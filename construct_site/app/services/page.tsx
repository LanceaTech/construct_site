import Services from "@/components/services/Services";
import ProcessTimeline from "@/components/services/ProcessTimeline";
import { PageTransition } from "@/components/shared/animations";

export default function ServicesPage() {
  return (
    <PageTransition>
      <Services />
      <ProcessTimeline />
    </PageTransition>
  );
}