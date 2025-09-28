import { experienceData } from "@/lib/portfolio-data";
import { CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Expérience Professionnelle</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            De stages formateurs à des missions freelance, chaque expérience a été une opportunité de grandir et d'apprendre.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
          {experienceData.map((job, index) => (
            <div key={index} className="relative mb-12 md:mb-16">
              <div className="md:absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-background p-2 rounded-full border-2 border-primary">
                <job.icon className="h-6 w-6 text-primary" />
              </div>
              <div
                className={`flex flex-col items-center md:items-start md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:ml-auto md:pl-8 md:text-left" : "md:mr-auto md:pr-8 md:text-right"
                }`}
              >
                <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm w-full transition-shadow hover:shadow-primary/20 hover:shadow-md">
                    <p className="text-sm text-muted-foreground mb-1">{job.period}</p>
                    <h3 className="text-xl font-bold font-headline">{job.role}</h3>
                    <p className="font-semibold text-primary mb-3">{job.company}</p>
                    <ul className="space-y-2 text-left">
                    {job.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary/70 shrink-0" />
                        <span>{task}</span>
                        </li>
                    ))}
                    </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
