"use client";
import { Star } from 'lucide-react';
import Container from '../shared/Container';
import { ScrollReveal, FadeUp } from '../shared/animations';
import OptimizedImage from '../shared/OptimizedImage';

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    company: "Tech Solutions Inc",
    comment: "Exceptional quality and timely delivery. BuildTech Pro exceeded our expectations.",
    rating: 5,
    image: "/testimonials/client1.jpg"
  },
  // Add more testimonials
];

export default function Testimonials() {
  return (
    <Container className="py-12">
      <FadeUp>
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
      </FadeUp>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <ScrollReveal key={testimonial.id} delay={index * 0.2}>
            <div className="bg-white p-6 rounded-lg shadow-lg mx-auto w-full max-w-sm md:max-w-none hover:shadow-xl transition-shadow">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <OptimizedImage
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  <div className="flex justify-center sm:justify-start mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-center sm:text-left">{testimonial.comment}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Container>
  );
}