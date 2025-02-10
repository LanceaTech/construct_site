// app/about/page.tsx
import History from "@/components/about/History";
import Values from "@/components/about/Values";
import Team from "@/components/about/Team";

export default function AboutPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <History />
      <Values />
      <Team />
    </div>
  );
}