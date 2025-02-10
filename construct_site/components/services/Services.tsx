"use client";
import { Building2, Home, Factory, Tool, PaintBucket, Ruler } from 'lucide-react';

const services = [
  {
    icon: <Building2 className="w-12 h-12" />,
    title: "Commercial Construction",
    description: "Modern office buildings and retail spaces built to last"
  },
  {
    icon: <Home className="w-12 h-12" />,
    title: "Residential Development",
    description: "Custom homes and multi-family residential complexes"
  },
  // Add more services
];

export default function Services() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div 
          key={index}
          className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="text-orange-500 mb-4">{service.icon}</div>
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  );
}