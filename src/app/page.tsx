import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/portfolio/hero';
import { About } from '@/components/portfolio/about';
import { Experience } from '@/components/portfolio/experience';
import { Projects } from '@/components/portfolio/projects';
import { SkillsAI } from '@/components/portfolio/skills-ai';
import { Contact } from '@/components/portfolio/contact';
import { AnimatedSection } from '@/components/layout/animated-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection>
          <Experience />
        </AnimatedSection>
        <AnimatedSection>
          <Projects />
        </AnimatedSection>
        <AnimatedSection>
          <SkillsAI />
        </AnimatedSection>
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
