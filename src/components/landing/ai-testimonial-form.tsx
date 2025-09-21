"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { generatePersonalizedTestimonial } from "@/ai/flows/generate-personalized-testimonial";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Wand2 } from "lucide-react";

const formSchema = z.object({
  needs: z.string().min(10, { message: "Please describe your needs in a bit more detail." }),
});

export function AiTestimonialForm() {
  const [generatedTestimonial, setGeneratedTestimonial] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      needs: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedTestimonial("");
    try {
      const result = await generatePersonalizedTestimonial({ needs: values.needs });
      if (result.testimonial) {
        setGeneratedTestimonial(result.testimonial);
      } else {
        throw new Error("Failed to generate testimonial.");
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "We couldn't generate your testimonial. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="mt-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="needs"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Your needs</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., 'I need a tool to manage multiple projects with a remote team and track our time effectively.'"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Generate My Testimonial
          </Button>
        </form>
      </Form>

      {generatedTestimonial && (
        <div className="mt-8">
          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle className="text-lg">Here's Your Personalized Preview:</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="italic">"{generatedTestimonial}"</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
