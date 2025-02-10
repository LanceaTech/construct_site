import Services from "@/components/services/Services";
import ProcessTimeline from "@/components/services/ProcessTimeline";

export default function ServicesPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <Services />
      <ProcessTimeline />
    </div>
  );
}