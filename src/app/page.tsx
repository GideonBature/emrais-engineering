import {
  AboutSection,
  ContactSection,
  EquipmentSection,
  HeroSection,
  ProjectsSection,
  ServicesSection,
  SiteFooter,
  SiteHeader,
  StatsSection,
} from "@/components/site";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <EquipmentSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
