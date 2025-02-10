// components/home/Hero.tsx
"use client";

export default function Hero() {
  return (
    <div className="bg-orange-500 min-h-[60vh] flex items-center">
      <div className="container">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            Building Tomorrow's Infrastructure Today
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Excellence in construction with over two decades of experience
          </p>
          <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-white/90">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}