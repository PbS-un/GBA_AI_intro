import { useCallback, useEffect, useState } from "react";
import ContactModal from "./components/ContactModal";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PartnershipSection from "./components/PartnershipSection";
import ProblemSection from "./components/ProblemSection";
import RoadmapSection from "./components/RoadmapSection";
import SafetySection from "./components/SafetySection";
import ScenariosSection from "./components/ScenariosSection";
import SocialImpactSection from "./components/SocialImpactSection";
import TargetUsersSection from "./components/TargetUsersSection";
import TeamSection from "./components/TeamSection";
import WorkflowSection from "./components/WorkflowSection";

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = useCallback(() => setContactOpen(true), []);
  const closeContact = useCallback(() => setContactOpen(false), []);

  useEffect(() => {
    const targetId = window.location.hash.slice(1);
    if (!targetId) return;
    window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ block: "start" });
    });
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">跳至主要內容</a>
      <Navbar onContact={openContact} />
      <main id="main-content">
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <WorkflowSection />
        <TargetUsersSection />
        <ScenariosSection />
        <SafetySection />
        <SocialImpactSection />
        <TeamSection />
        <RoadmapSection />
        <PartnershipSection onContact={openContact} />
      </main>
      <Footer onContact={openContact} />
      <ContactModal open={contactOpen} onClose={closeContact} />
    </>
  );
}
