// components/testimonials/ClientLogos.tsx
"use client";
import { motion } from 'framer-motion';

const logos = [
  { name: 'Tech Corp', image: '/clients/tech-corp.png' },
  { name: 'Build Inc', image: '/clients/build-inc.png' },
  { name: 'Dev Group', image: '/clients/dev-group.png' },
  { name: 'Construct Co', image: '/clients/construct-co.png' }
];

export default function ClientLogos() {
  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-8">Trusted By</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {logos.map((logo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.2 }}
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow"
          >
            <img 
              src={logo.image} 
              alt={logo.name}
              className="h-12 object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}