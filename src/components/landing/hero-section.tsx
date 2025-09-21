import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            New Web App
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            Discover a revolutionary new way to manage your tasks, collaborate with your team, and boost your productivity to new heights.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">
              Get Started Now
              <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
