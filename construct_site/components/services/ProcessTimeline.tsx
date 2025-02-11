"use client";
import Container from '../shared/Container';
import { ScrollReveal, AnimatedLine } from '../shared/animations';

const steps = [
  { title: "Planning", description: "Project scope definition" },
  { title: "Design", description: "Architectural planning" },
  { title: "Construction", description: "Quality execution" },
  { title: "Completion", description: "Final inspection" }
];

export default function ProcessTimeline() {
  return (
    <Container className="py-16">
      <ScrollReveal>
        <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
      </ScrollReveal>

      <div className="max-w-3xl mx-auto px-4">
        {steps.map((step, i) => (
          <ScrollReveal key={i}>
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 text-center sm:text-left">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                {i + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <AnimatedLine className="my-8 mx-auto max-w-xs" />
            )}
          </ScrollReveal>
        ))}
      </div>
    </Container>
  );
}