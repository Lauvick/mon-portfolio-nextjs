"use client";

import { useState } from "react";
import { summarizeSkills } from "@/ai/flows/ai-summarize-skills";
import { cvContent } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wand2, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function SkillsAI() {
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSummarize = async () => {
    setIsLoading(true);
    setSummary("");
    try {
      const result = await summarizeSkills({ cvText });
      setSummary(result.skillsSummary);
    } catch (error) {
      console.error("Failed to summarize skills:", error);
      toast({
        variant: "destructive",
        title: "Erreur de l'IA",
        description: "Impossible de générer le résumé. Veuillez réessayer.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Résumé de Compétences par IA</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Utilisez l'IA pour extraire et synthétiser les compétences clés de mon CV.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-xl font-semibold mb-2">Contenu du CV</h3>
            <Textarea
              value={cvContent}
              readOnly
              className="h-96 resize-none bg-muted/50"
              aria-label="Contenu du Curriculum Vitae"
            />
          </div>
          <div className="space-y-4">
            <Button onClick={handleSummarize} disabled={isLoading} className="w-full md:w-auto bg-accent hover:bg-accent/90">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Génération en cours...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Générer le résumé
                </>
              )}
            </Button>
            <Card className="min-h-96">
              <CardHeader>
                <CardTitle>Synthèse des Compétences</CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading && (
                  <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
                    <Loader2 className="h-8 w-8 animate-spin mb-4" />
                    <p>L'IA analyse le CV...</p>
                  </div>
                )}
                {!isLoading && !summary && (
                  <Alert>
                    <Wand2 className="h-4 w-4" />
                    <AlertTitle>En attente de génération</AlertTitle>
                    <AlertDescription>
                      Cliquez sur le bouton pour que l'IA génère un résumé des compétences.
                    </AlertDescription>
                  </Alert>
                )}
                {summary && (
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap">{summary}</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
