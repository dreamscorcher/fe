import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import SocialProofBar from "@/components/SocialProofBar";
import WhyUsSection from "@/components/WhyUsSection";
import WhySpecializedSection from "@/components/WhySpecializedSection";
import UseCasesSection from "@/components/UseCasesSection";
import StepsSection from "@/components/StepsSection";
import PropertyTypesSection from "@/components/PropertyTypesSection";
import FAQSection from "@/components/FAQSection";
import ProblemSection from "@/components/ProblemSection";
import BottomCTASection from "@/components/BottomCTASection";
import Footer from "@/components/Footer";
import UrgencyBar from "@/components/UrgencyBar";
import SocialProofToast from "@/components/SocialProofToast";
import StickyBottomBar from "@/components/StickyBottomBar";

const Index = () => (
  <div className="min-h-screen bg-background">
    <UrgencyBar />
    <Navbar />
    <div id="kontakt">
      <HeroSection />
    </div>
    <StatsBar />
    <SocialProofBar />
    <div className="py-4 md:py-6" />
    <WhyUsSection />
    <div className="py-4 md:py-6" />
    <WhySpecializedSection />
    <div className="py-4 md:py-6" />
    <UseCasesSection />
    <div className="py-4 md:py-6" />
    <StepsSection />
    <div className="py-4 md:py-6" />
    <PropertyTypesSection />
    <div className="py-4 md:py-6" />
    <FAQSection />
    <div className="py-4 md:py-6" />
    <ProblemSection />
    <div className="py-4 md:py-6" />
    <BottomCTASection />
    <div className="pb-16">
      <Footer />
    </div>
    <SocialProofToast />
    <StickyBottomBar />
  </div>
);

export default Index;
