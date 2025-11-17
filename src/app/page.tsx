import HeroSection from "@/components/HeroSection";
import CreateDisruptSection from "@/components/CreateDisruptSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ClientsSection from "@/components/ClientsSection";
import AchievementsSection from "@/components/AchievementsSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";
import SuccessStoriesSection from "@/components/SuccessStory";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CreateDisruptSection />
      {/* <ProjectsSection /> */}
      <ServicesSection />
      <ClientsSection />
   <SuccessStoriesSection />
      <CallToActionSection />
      {/* <Footer /> */}
    </>
  );
}