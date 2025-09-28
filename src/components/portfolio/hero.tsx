"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };
  return (
    <section id="home" className="relative w-full h-[calc(100vh-5rem)] min-h-[600px] flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-center md:text-left">
            <span className="font-semibold text-primary tracking-wider">LAUVICK NGOMA</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter font-headline">
              Ingénieur Electronique embarquée et informatique industrielle
            </h1>
            <p className="max-w-xl mx-auto md:mx-0 text-muted-foreground md:text-lg">
             Passionné par les systèmes numériques et l'innovation, avec une double compétence en électronique et développement web. Bienvenue sur mon portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#contact" onClick={handleScrollToContact}>Me Contacter</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#projects">
                  Voir mes projets <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center items-center -translate-y-8">
            <div className="absolute -inset-2 bg-gradient-to-br from-primary via-accent to-secondary rounded-full opacity-50 blur-2xl"></div>
            <Image
              src="/lauvick-ngoma.jpg"
              alt="Lauvick Ngoma's profile picture"
              width={400}
              height={400}
              className="relative rounded-full object-cover aspect-square shadow-2xl"
              data-ai-hint="profile picture"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
