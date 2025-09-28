'use server';

/**
 * @fileOverview Summarizes skills from a CV using AI.
 *
 * - summarizeSkills - A function that takes CV text as input and returns a summarized list of skills.
 * - SummarizeSkillsInput - The input type for the summarizeSkills function.
 * - SummarizeSkillsOutput - The return type for the summarizeSkills function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeSkillsInputSchema = z.object({
  cvText: z.string().describe('The text content of the CV.'),
});
export type SummarizeSkillsInput = z.infer<typeof SummarizeSkillsInputSchema>;

const SummarizeSkillsOutputSchema = z.object({
  skillsSummary: z.string().describe('A summarized list of skills extracted from the CV.'),
});
export type SummarizeSkillsOutput = z.infer<typeof SummarizeSkillsOutputSchema>;

export async function summarizeSkills(input: SummarizeSkillsInput): Promise<SummarizeSkillsOutput> {
  return summarizeSkillsFlow(input);
}

const summarizeSkillsPrompt = ai.definePrompt({
  name: 'summarizeSkillsPrompt',
  input: {schema: SummarizeSkillsInputSchema},
  output: {schema: SummarizeSkillsOutputSchema},
  prompt: `You are an expert in extracting skills from resumes.

  Based on the following CV text, provide a summarized list of skills.

  CV Text: {{{cvText}}}
  \n  Skills Summary:`,
});

const summarizeSkillsFlow = ai.defineFlow(
  {
    name: 'summarizeSkillsFlow',
    inputSchema: SummarizeSkillsInputSchema,
    outputSchema: SummarizeSkillsOutputSchema,
  },
  async input => {
    const {output} = await summarizeSkillsPrompt(input);
    return output!;
  }
);
