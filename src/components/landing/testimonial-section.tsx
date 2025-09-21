import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { AiTestimonialForm } from "./ai-testimonial-form";

const testimonials = [
  {
    id: "avatar-1",
    name: "Sarah Johnson",
    title: "CEO, Tech Innovators",
    quote: "This app has completely transformed our workflow. The intuitive design and powerful features have boosted our productivity by 50%. I can't recommend it enough!",
  },
  {
    id: "avatar-2",
    name: "Michael Chen",
    title: "Project Manager, Creative Solutions",
    quote: "The collaboration tools are a game-changer. Our team is more aligned than ever, and projects are getting done faster and with fewer roadblocks. Truly impressive.",
  },
];

export function TestimonialSection() {
  return (
    <section id="testimonials" className="bg-secondary/50 py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-8">
          <div>
            <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                Loved by Teams Everywhere
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                See what our users are saying about their experience.
              </p>
            </div>
            <div className="mt-16 space-y-8">
              {testimonials.map((testimonial) => {
                const image = PlaceHolderImages.find((img) => img.id === testimonial.id);
                return (
                  <Card key={testimonial.name}>
                    <CardContent className="pt-6">
                      <p className="italic text-foreground/80">"{testimonial.quote}"</p>
                      <div className="mt-4 flex items-center gap-4">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={testimonial.name}
                            data-ai-hint={image.imageHint}
                            width={48}
                            height={48}
                            className="h-12 w-12 rounded-full object-cover"
                          />
                        )}
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <Card className="p-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-headline text-2xl font-bold tracking-tight sm:text-3xl text-primary">
                  See How It Benefits You
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Tell us what you need in a web app, and our AI will generate a personalized testimonial highlighting how we can help.
                </p>
              </div>
              <AiTestimonialForm />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
