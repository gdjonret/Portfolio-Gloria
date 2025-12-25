import HeroSection from "@/components/hero/heroSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
