// components/services/ProcessTimeline.tsx
"use client";
import { motion } from 'framer-motion';

const steps = [
  { title: "Planning", description: "Project scope definition" },
  { title: "Design", description: "Architectural planning" },
  { title: "Construction", description: "Quality execution" },
  { title: "Completion", description: "Final inspection" }
];

export default function ProcessTimeline() {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex mb-8"
        >
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
            {i + 1}
          </div>
          <div className="ml-6">
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}