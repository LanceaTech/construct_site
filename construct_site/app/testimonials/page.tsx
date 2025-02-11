import Testimonials from "@/components/testimonials/Testimonials";
import ClientLogos from "@/components/testimonials/ClientLogos";
import { PageTransition } from "@/components/shared/animations";

export default function TestimonialsPage() {
  return (
    <PageTransition>
      <Testimonials />
      <ClientLogos />
    </PageTransition>
  );
}