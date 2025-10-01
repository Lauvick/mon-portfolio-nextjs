import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/portfolio/hero';
import { About } from '@/components/portfolio/about';
import { Experience } from '@/components/portfolio/experience';
import { Projects } from '@/components/portfolio/projects';
import { SkillsAI } from '@/components/portfolio/skills-ai';
import { Contact } from '@/components/portfolio/contact';
import { AnimatedSection } from '@/components/layout/animated-section';
import { ParticlesBackground } from '@/components/portfolio/particles-background';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <div className="relative w-full">
          <ParticlesBackground />
          <div
            className="w-full"
            style={{
              backgroundImage: `
              radial-gradient(circle at 50% 30%, hsla(220, 40%, 15%, 0.9), hsla(220, 40%, 5%, 0.9) 80%),
              url('/logo.svg')
            `,
              backgroundSize: 'cover, 40%',
              backgroundPosition: 'center, center 25%',
              backgroundRepeat: 'no-repeat, no-repeat',
            }}
          >
            <Hero />
          </div>
        </div>
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
