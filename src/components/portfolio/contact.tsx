
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from 'next/link';
import { submitContactForm } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send, Mail, Linkedin, Github } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Veuillez entrer une adresse e-mail valide." }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères." }),
});

const contactInfo = [
    {
        icon: Mail,
        label: "nichirenngomalauvick.2000@gmail.com",
        href: "mailto:nichirenngomalauvick.2000@gmail.com"
    },
    {
        icon: Linkedin,
        label: "linkedin.com/in/lauvick-ngoma",
        href: "https://www.linkedin.com/in/lauvick-ngoma"
    },
    {
        icon: Github,
        label: "github.com/Lauvick",
        href: "https://github.com/Lauvick"
    }
]

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await submitContactForm(values);

    if (result.success) {
      toast({
        title: "Succès!",
        description: result.message,
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: result.message,
      });
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Contactez-moi</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Une question, une proposition ou juste envie de discuter ? N'hésitez pas à m'envoyer un message.
            </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto bg-card p-8 rounded-lg shadow-lg border">
            {/* Colonne d'information */}
            <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6 font-headline">Informations de Contact</h3>
                <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                         <Link key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                            <div className="bg-primary/10 text-primary p-3 rounded-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                                <item.icon className="h-6 w-6"/>
                            </div>
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item.label}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Colonne du formulaire */}
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom</FormLabel>
                          <FormControl>
                            <Input placeholder="Votre nom" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Votre adresse e-mail" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Votre message ici..."
                            className="resize-none"
                            rows={6}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-base py-6" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    ) : (
                      <Send className="mr-2 h-5 w-5" />
                    )}
                    Envoyer le message
                  </Button>
                </form>
              </Form>
            </div>
        </div>
      </div>
    </section>
  );
}
