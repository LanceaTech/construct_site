import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import { PageTransition } from "@/components/shared/animations";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <About />
      <Services />
    </PageTransition>
  );
}