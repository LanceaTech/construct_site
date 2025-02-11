import History from "@/components/about/History";
import Values from "@/components/about/Values";
import Team from "@/components/about/Team";
import Container from "@/components/shared/Container";
import { PageTransition, FadeUp, AnimatedLine } from "@/components/shared/animations";

export default function AboutPage() {
  return (
    <PageTransition>
      <Container className="py-16">
        <FadeUp>
          <h1 className="text-4xl font-bold mb-8 text-center sm:text-left">About Us</h1>
        </FadeUp>
        
        <AnimatedLine className="mb-16" />
        
        <History />
        
        <AnimatedLine className="my-16" />
        
        <Values />
        
        <AnimatedLine className="my-16" />
        
        <Team />
      </Container>
    </PageTransition>
  );
}