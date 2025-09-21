import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="hero" className="relative bg-secondary/50">
      <div className="container mx-auto max-w-7xl px-4 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            The Golden Spoon
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            Experience the finest dining in town. Fresh ingredients, exquisite flavors, and a passion for food.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
