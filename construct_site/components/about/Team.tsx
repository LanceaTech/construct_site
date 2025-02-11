"use client";
import Container from '../shared/Container';
import { ScrollReveal, FadeUp } from '../shared/animations';
import OptimizedImage from '../shared/OptimizedImage';

const team = [
  {
    name: "Robert Johnson",
    role: "CEO",
    bio: "25+ years in construction management",
    image: "/team/ceo.jpg"
  },
  // Add more team members
];

export default function Team() {
  return (
    <Container className="py-12">
      <FadeUp>
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
      </FadeUp>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <ScrollReveal key={index}>
            <div className="text-center mx-auto w-full max-w-sm">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <OptimizedImage
                  src={member.image}
                  alt={member.name}
                  width={192}
                  height={192}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-orange-500">{member.role}</p>
              <p className="text-gray-600 mt-2 px-4">{member.bio}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Container>
  );
}