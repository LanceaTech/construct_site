"use client";
import Container from '../shared/Container';
import { FadeUp } from '../shared/animations';

export default function Hero() {
  return (
    <div className="bg-orange-500 min-h-[60vh] flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto sm:mx-0 text-center sm:text-left py-12">
          <FadeUp delay={0.2}>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Building Tomorrow's Infrastructure Today
            </h1>
          </FadeUp>
          
          <FadeUp delay={0.4}>
            <p className="text-lg sm:text-xl text-white/90 mb-8">
              Excellence in construction with over two decades of experience
            </p>
          </FadeUp>
          
          <FadeUp delay={0.6}>
            <button className="bg-white text-orange-500 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
              Get Started
            </button>
          </FadeUp>
        </div>
      </Container>
    </div>
  );
}