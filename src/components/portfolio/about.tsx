import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { academicData } from "@/lib/portfolio-data";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">À Propos de Moi</h2>
            <p className="text-muted-foreground leading-relaxed">
              Spécialisé dans la conception de systèmes intelligents et l’automatisation industrielle, je combine expertise matérielle et logicielle pour développer des solutions innovantes, précises et adaptées aux enjeux industriels. Mon approche allie rigueur technique, créativité et optimisation des processus.
            </p>
            <h3 className="text-2xl font-bold tracking-tighter font-headline mt-6">Ce qui me motive</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Innover pour rendre les processus industriels plus précis, fiables et accessibles.</li>
                <li>Relever des défis techniques où l’électronique et l’informatique se rencontrent.</li>
                <li>Partager mes connaissances via des projets open-source et des documentations claires.</li>
            </ul>
          </div>
          <div className="md:col-span-3 space-y-6">
             <h3 className="text-2xl font-bold tracking-tighter font-headline">Mon Parcours</h3>
            {academicData.map((item, index) => (
              <Card key={index} className="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>{item.degree}</CardTitle>
                    <CardDescription>{item.institution} &bull; {item.years}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
