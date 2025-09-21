import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/restaurant/hero-section";
import { MenuSection } from "@/components/restaurant/menu-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MenuSection />
      </main>
      <Footer />
    </div>
  );
}
