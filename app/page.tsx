import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { TeamSection } from "@/components/sections/team";
import { DownloadSection } from "@/components/sections/download";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min">
      <HeroSection />
      <FeaturesSection />
      <TeamSection />
      <DownloadSection />
      <Footer />
    </main>
  );
}