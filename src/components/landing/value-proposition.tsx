import { Zap, ShieldCheck, LayoutGrid } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const valueProps = [
  {
    icon: Zap,
    title: "Blazing Fast Performance",
    description: "Experience unparalleled speed and responsiveness. Our app is optimized for performance, ensuring a seamless workflow.",
  },
  {
    icon: ShieldCheck,
    title: "Rock-Solid Security",
    description: "Your data is protected with enterprise-grade security. We prioritize your privacy and peace of mind.",
  },
  {
    icon: LayoutGrid,
    title: "Intuitive Design",
    description: "A clean, modern, and user-friendly interface that requires no learning curve. Get started in minutes.",
  },
];

export function ValueProposition() {
  return (
    <section id="value-proposition" className="bg-secondary/50 py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Why Our App is Different
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We focus on what matters most to deliver a superior experience.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {valueProps.map((prop) => (
            <Card key={prop.title} className="border-none bg-transparent shadow-none">
              <CardHeader className="items-center text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <prop.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">{prop.title}</CardTitle>
                <CardDescription className="pt-2 text-base">
                  {prop.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
