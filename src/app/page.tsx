import HeroSection from "@/components/HeroSection";
import CreateDisruptSection from "@/components/CreateDisruptSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ClientsSection from "@/components/ClientsSection";
import AchievementsSection from "@/components/AchievementsSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CreateDisruptSection />
      <ProjectsSection />
      <ServicesSection />
      <ClientsSection />
   
      <CallToActionSection />
      <Footer />
    </>
  );
}