import { HeroSection } from "./HeroSection";
import { ExperienceSection } from "./ExperienceSection";
import { EditorialSection } from "./EditorialSection";
import { SpaceSection } from "./SpaceSection";
import { BoutiqueSection } from "./BoutiqueSection";
import { ServicesSection } from "./ServicesSection";

export function HomeSections() {
  return (
    <>
      <HeroSection />
      <EditorialSection />
      <ExperienceSection />
      <SpaceSection />
      <BoutiqueSection />
      <ServicesSection />
    </>
  );
}
