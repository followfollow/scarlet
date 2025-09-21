import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { ValueProposition } from "@/components/landing/value-proposition";
import { FeatureShowcase } from "@/components/landing/feature-showcase";
import { TestimonialSection } from "@/components/landing/testimonial-section";
import { AboutSection } from "@/components/landing/about-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ValueProposition />
        <FeatureShowcase />
        <TestimonialSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
