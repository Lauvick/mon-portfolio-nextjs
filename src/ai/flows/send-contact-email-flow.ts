'use server';
/**
 * @fileOverview A flow for sending a contact form submission email.
 *
 * - sendContactEmail - A function that handles sending the contact email.
 * - SendContactEmailInput - The input type for the sendContactEmail function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { Resend } from 'resend';

const SendContactEmailInputSchema = z.object({
  name: z.string().describe('The name of the person submitting the form.'),
  email: z.string().describe('The email address of the person.'),
  message: z.string().describe('The message content.'),
});
export type SendContactEmailInput = z.infer<typeof SendContactEmailInputSchema>;

export async function sendContactEmail(input: SendContactEmailInput): Promise<void> {
    await sendContactEmailFlow(input);
}


const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: SendContactEmailInputSchema,
    outputSchema: z.void(),
  },
  async (input) => {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    console.log(`[Flow] Sending email for: ${input.name}`);

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev', // Resend requires a verified domain, but this works for testing.
            to: 'nichirenngomalauvick.2000@gmail.com', // Your email address
            subject: `New Contact Form Submission from ${input.name}`,
            html: `
                <h1>New Contact Submission</h1>
                <p><strong>Name:</strong> ${input.name}</p>
                <p><strong>Email:</strong> ${input.email}</p>
                <p><strong>Message:</strong></p>
                <p>${input.message}</p>
            `,
        });
        console.log("[Flow] Email sent successfully.");
    } catch (error) {
        console.error("[Flow] Failed to send email:", error);
        // Optionally re-throw the error if you want the calling action to know about the failure
        // throw new Error("Failed to send email.");
    }
  }
);
