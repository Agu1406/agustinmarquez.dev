import { HeroSection } from "./HeroSection";
import { ExperienceSection } from "./ExperienceSection";
import { EditorialSection } from "./EditorialSection";
import { SpaceSection } from "./SpaceSection";
import { ServicesSection } from "./ServicesSection";
import { BoutiqueSection } from "./BoutiqueSection";

export function HomeSections() {
  return (
    <>
      <HeroSection />
      <EditorialSection />
      <ExperienceSection />
      <SpaceSection />
      <ServicesSection />
      <BoutiqueSection />
    </>
  );
}
