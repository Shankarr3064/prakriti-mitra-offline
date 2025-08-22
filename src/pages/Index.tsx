import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import TechSection from "@/components/TechSection";
import MeshNetworkSection from "@/components/MeshNetworkSection";
import ImpactSection from "@/components/ImpactSection";
import RoadmapSection from "@/components/RoadmapSection";
import CallToActionSection from "@/components/CallToActionSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <div id="problem">
          <ProblemSection />
        </div>
        <div id="technology">
          <TechSection />
        </div>
        <MeshNetworkSection />
        <div id="impact">
          <ImpactSection />
        </div>
        <div id="roadmap">
          <RoadmapSection />
        </div>
        <CallToActionSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
