"use client";
import { Star } from 'lucide-react';

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
    <div className="grid md:grid-cols-2 gap-8">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 mr-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div>
              <h3 className="font-bold">{testimonial.name}</h3>
              <p className="text-gray-600 text-sm">{testimonial.company}</p>
            </div>
          </div>
          <div className="flex mb-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
            ))}
          </div>
          <p className="text-gray-700">{testimonial.comment}</p>
        </div>
      ))}
    </div>
  );
}