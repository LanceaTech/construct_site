"use client";
import { Building, Home, Factory } from 'lucide-react';
import Container from '../shared/Container';
import { ScrollReveal, AnimatedLine } from '../shared/animations';

const services = [
  {
    icon: <Building className="w-12 h-12" />,
    title: "Commercial Construction",
    description: "Modern office buildings and retail spaces built to last"
  },
  {
    icon: <Home className="w-12 h-12" />,
    title: "Residential Development",
    description: "Custom homes and multi-family residential complexes"
  },
  {
    icon: <Factory className="w-12 h-12" />,
    title: "Industrial Projects",
    description: "State-of-the-art industrial facilities"
  }
];

export default function Services() {
  return (
    <Container className="py-16">
      <ScrollReveal>
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      </ScrollReveal>
      
      <AnimatedLine className="mb-12" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ScrollReveal key={index}>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow mx-auto w-full max-w-sm">
              <div className="text-orange-500 mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Container>
  );
}