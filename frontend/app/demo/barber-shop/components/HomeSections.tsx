import { HeroSection } from "./HeroSection";
import { ExperienceSection } from "./ExperienceSection";
import { EditorialSection } from "./EditorialSection";
import { ServicesSection } from "./ServicesSection";
import { BoutiqueSection } from "./BoutiqueSection";

export function HomeSections() {
  return (
    <>
      <HeroSection />
      <EditorialSection />
      <ExperienceSection />
      <ServicesSection />
      <BoutiqueSection />
    </>
  );
}
