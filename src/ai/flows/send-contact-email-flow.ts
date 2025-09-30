'use server';
/**
 * @fileOverview A flow for sending a contact form submission email.
 *
 * - sendContactEmail - A function that handles sending the contact email.
 * - SendContactEmailInput - The input type for the sendContactEmail function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SendContactEmailInputSchema = z.object({
  name: z.string().describe('The name of the person submitting the form.'),
  email: z.string().describe('The email address of the person.'),
  message: z.string().describe('The message content.'),
});
export type SendContactEmailInput = z.infer<typeof SendContactEmailInputSchema>;

export async function sendContactEmail(input: SendContactEmailInput): Promise<void> {
    // In a real-world scenario, you would integrate with an email service
    // like SendGrid, Mailgun, or Resend here.
    // For this example, we'll just log the action to the console
    // as if the email was sent.
    console.log(`Simulating sending email for: ${input.name}`);
    await sendContactEmailFlow(input);
}


const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: SendContactEmailInputSchema,
    outputSchema: z.void(),
  },
  async (input) => {
    // This flow is a placeholder. To send a real email, you would:
    // 1. Add an email sending library (e.g., 'resend', 'nodemailer').
    // 2. Configure it with your API keys (using environment variables).
    // 3. Call the library to send the email with the input data.
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'nichirenngomalauvick.2000@gmail.com',
    //   subject: `New Contact Form Submission from ${input.name}`,
    //   html: `<p>Name: ${input.name}</p><p>Email: ${input.email}</p><p>Message: ${input.message}</p>`,
    // });

    console.log(`[Flow] Received request to send email to nichirenngomalauvick.2000@gmail.com`);
    console.log(`[Flow] Name: ${input.name}`);
    console.log(`[Flow] Email: ${input.email}`);
    console.log(`[Flow] Message: ${input.message}`);
  }
);
