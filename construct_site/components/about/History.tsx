// components/about/History.tsx
"use client";
import { motion } from 'framer-motion';

const milestones = [
  { year: 2000, title: "Foundation", text: "Company established" },
  { year: 2010, title: "Expansion", text: "Major commercial projects" },
  { year: 2015, title: "Innovation", text: "Green building initiative" },
  { year: 2020, title: "Growth", text: "International operations" }
];

export default function History() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Our History</h2>
      <div className="space-y-8">
        {milestones.map((milestone, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-6"
          >
            <div className="w-24 h-24 bg-orange-500 text-white rounded-full flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">{milestone.year}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold">{milestone.title}</h3>
              <p className="text-gray-600">{milestone.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}