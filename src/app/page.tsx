import { HeroSection } from "@/components/home/HeroSection";
import { Highlights } from "@/components/home/Highlights";
import { FlavorShowcase } from "@/components/home/FlavorShowcase";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FlavorShowcase />
      <Highlights />
    </div>
  );
}
