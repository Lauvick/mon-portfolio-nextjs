"use server";

import { z } from "zod";
import { firestore } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { sendContactEmail } from "@/ai/flows/send-contact-email-flow";

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
    const formData = validatedFields.data;
    
    // 1. Save to Firestore
    const docData = {
      ...formData,
      submittedAt: serverTimestamp(),
    };
    await addDoc(collection(firestore, "contacts"), docData);

    // 2. Trigger email sending flow (fire and forget)
    sendContactEmail(formData).catch(emailError => {
        // Log the error, but don't block the user response
        console.error("Failed to send contact email:", emailError);
    });

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
