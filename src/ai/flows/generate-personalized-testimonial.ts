'use server';

/**
 * @fileOverview A flow for generating personalized testimonials based on user input.
 *
 * - generatePersonalizedTestimonial - A function that generates a personalized testimonial.
 * - GeneratePersonalizedTestimonialInput - The input type for the generatePersonalizedTestimonial function.
 * - GeneratePersonalizedTestimonialOutput - The return type for the generatePersonalizedTestimonial function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedTestimonialInputSchema = z.object({
  needs: z
    .string()
    .describe('The needs and preferences of the user regarding the web app.'),
});

export type GeneratePersonalizedTestimonialInput = z.infer<
  typeof GeneratePersonalizedTestimonialInputSchema
>;

const GeneratePersonalizedTestimonialOutputSchema = z.object({
  testimonial: z
    .string()
    .describe('A personalized testimonial highlighting the benefits of the web app.'),
});

export type GeneratePersonalizedTestimonialOutput = z.infer<
  typeof GeneratePersonalizedTestimonialOutputSchema
>;

export async function generatePersonalizedTestimonial(
  input: GeneratePersonalizedTestimonialInput
): Promise<GeneratePersonalizedTestimonialOutput> {
  return generatePersonalizedTestimonialFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalizedTestimonialPrompt',
  input: {schema: GeneratePersonalizedTestimonialInputSchema},
  output: {schema: GeneratePersonalizedTestimonialOutputSchema},
  prompt: `You are a marketing expert specializing in creating personalized testimonials.

  Based on the user's needs and preferences, generate a testimonial that highlights the most relevant benefits of the web app.

  User Needs: {{{needs}}}

  Testimonial:`,
});

const generatePersonalizedTestimonialFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedTestimonialFlow',
    inputSchema: GeneratePersonalizedTestimonialInputSchema,
    outputSchema: GeneratePersonalizedTestimonialOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
