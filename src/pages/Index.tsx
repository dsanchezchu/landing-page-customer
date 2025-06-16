import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ImageCarousel } from "@/components/ImageCarousel";
import { CTASection } from "@/components/CTASection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ColorPaletteSection } from "@/components/ColorPaletteSection";
import { TypographySection } from "@/components/TypographySection";
import { LinksSection } from "../components/LinksSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <ImageCarousel />
      <CTASection />
      <TestimonialsSection />
      {/* <ColorPaletteSection /> */}
      {/* <TypographySection /> */}
      {/* <LinksSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
