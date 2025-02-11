"use client";
import Container from '../shared/Container';
import { ScrollReveal, FadeUp } from '../shared/animations';
import OptimizedImage from '../shared/OptimizedImage';

const logos = [
  { name: 'Tech Corp', image: '/clients/tech-corp.png' },
  { name: 'Build Inc', image: '/clients/build-inc.png' },
  { name: 'Dev Group', image: '/clients/dev-group.png' },
  { name: 'Construct Co', image: '/clients/construct-co.png' }
];

export default function ClientLogos() {
  return (
    <div className="py-12 bg-gray-50">
      <Container>
        <FadeUp>
          <h2 className="text-2xl font-bold text-center mb-8">Trusted By</h2>
        </FadeUp>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {logos.map((logo, i) => (
            <ScrollReveal 
              key={i} 
              delay={i * 0.1}
              className="flex items-center justify-center"
            >
              <div className="p-4 bg-white rounded-lg shadow mx-auto w-full max-w-[160px] hover:shadow-lg transition-shadow">
                <OptimizedImage
                  src={logo.image}
                  alt={logo.name}
                  width={120}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </div>
  );
}