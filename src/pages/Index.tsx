import { HeroSection } from "@/components/sections/HeroSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FoundersSection } from "@/components/sections/FoundersSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TestimonialsSection />
      <FoundersSection />
      <ContactSection />
    </main>
  );
};

export default Index;