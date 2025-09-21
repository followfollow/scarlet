import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-last lg:order-first">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We believe that great software should be accessible to everyone. Our mission is to build powerful, intuitive tools that help teams and individuals achieve their goals without complexity or compromise. We're passionate about design, performance, and customer success.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Scarlet Launchpad is the culmination of our dedication to crafting an exceptional user experience, and we're just getting started.
            </p>
          </div>
          <div>
            <Image
              src="https://picsum.photos/seed/team/800/600"
              alt="Our Team"
              data-ai-hint="team working"
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
