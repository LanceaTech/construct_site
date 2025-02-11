"use client";
import { useState } from 'react';
import Container from '../shared/Container';
import { ScrollReveal, FadeUp } from '../shared/animations';
import OptimizedImage from '../shared/OptimizedImage';

const projects = [
  {
    id: 1,
    title: 'Modern Office Complex',
    description: 'State-of-the-art commercial building with sustainable features',
    image: '/projects/office.jpg',
    category: 'Commercial'
  },
  // Add more projects
];

export default function ProjectGallery() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === filter);

  return (
    <Container className="py-12">
      <FadeUp>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['all', 'commercial', 'residential', 'industrial'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === category 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </FadeUp>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ScrollReveal key={project.id}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mx-auto w-full max-w-sm">
              <div className="relative h-48">
                <OptimizedImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48"
                  width={400}
                  height={300}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Container>
  );
}