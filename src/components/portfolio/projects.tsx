import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectData } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Mes Réalisations</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Voici une sélection de projets sur lesquels j'ai travaillé, illustrant mes compétences et mes centres d'intérêt.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="p-0">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48"
                  data-ai-hint={project.imageHint}
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="mb-2 font-headline">{project.title}</CardTitle>
                <CardDescription className="mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="flex gap-2">
                  {project.links.map((link, linkIndex) => (
                    <Button key={linkIndex} variant={linkIndex === 0 ? "outline" : "default"} asChild size="sm">
                      <Link href={link.url} target="_blank" rel="noopener noreferrer">
                        <link.icon className="h-4 w-4 mr-2" />
                        {link.icon.displayName === 'Github' ? 'Code Source' : 'Démo Live'}
                      </Link>
                    </Button>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
