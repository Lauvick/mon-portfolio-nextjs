"use server";

import { z } from "zod";
import { firestore } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Veuillez entrer une adresse e-mail valide." }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères." }),
});

export async function submitContactForm(data: z.infer<typeof contactSchema>) {
  const validatedFields = contactSchema.safeParse(data);

  if (!validatedFields.success) {
    const errorMessages = validatedFields.error.flatten().fieldErrors;
    const firstError = Object.values(errorMessages)[0]?.[0] ?? "Erreur de validation.";
    return {
      success: false,
      message: firstError,
    };
  }

  try {
    const docData = {
      ...validatedFields.data,
      submittedAt: serverTimestamp(),
    };
    await addDoc(collection(firestore, "contacts"), docData);

    return {
      success: true,
      message: "Message envoyé avec succès ! Merci de m'avoir contacté.",
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      message: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
    };
  }
}
