import Header from "./components/header";
import HeroSection from "./components/hero-section";
import ProofSection from "./components/proof-section";
import CoreCapabilities from "./components/core-capabilities";
import CaseStudies from "./components/case-studies";
import AISystemsShowcase from "./components/ai-systems-showcase";
import ContentCreation from "./components/content-creation";
import SystemThinking from "./components/system-thinking";
import Experience from "./components/experience";
import Contact from "./components/contact";
import WhyHireMe from "./components/why-hire-me";
import Reviews from "./components/reviews";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProofSection />
      <CoreCapabilities />
      <CaseStudies />
      <AISystemsShowcase />
      <ContentCreation />
      <SystemThinking />
      <Experience />
      <WhyHireMe />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}