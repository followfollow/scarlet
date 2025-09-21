import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    id: "feature-1",
    title: "Dynamic Dashboards",
    description: "Visualize your data with our highly customizable and interactive dashboards. Track your progress at a glance.",
  },
  {
    id: "feature-2",
    title: "Seamless Collaboration",
    description: "Work with your team in real-time. Share files, leave comments, and manage projects together effortlessly.",
  },
  {
    id: "feature-3",
    title: "Smart Automation",
    description: "Automate repetitive tasks with our powerful workflow builder. Save time and focus on what's important.",
  },
];

export function FeatureShowcase() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need, All in One Place
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our app is packed with powerful features to help you succeed.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const image = PlaceHolderImages.find((img) => img.id === feature.id);
            return (
              <Card key={feature.title} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                {image && (
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
