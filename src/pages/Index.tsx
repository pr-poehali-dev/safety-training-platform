import { useState } from "react";
import { Navbar, Footer } from "./Navbar";
import { SectionHome, SectionCourses, SectionTrainingCenter } from "./SectionsLearning";
import { SectionCabinet, SectionAnalytics, SectionUsers, SectionAppeals, SectionPartners, SectionContacts } from "./SectionsManagement";

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background" style={{ backgroundImage: "radial-gradient(ellipse 600px 400px at 20% 20%, rgba(0,255,135,0.06) 0%, transparent 70%), radial-gradient(ellipse 500px 350px at 80% 60%, rgba(0,212,255,0.05) 0%, transparent 70%)" }}>
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="pt-16">
        {activeSection === "home"           && <SectionHome setActiveSection={setActiveSection} />}
        {activeSection === "courses"        && <SectionCourses />}
        {activeSection === "trainingcenter" && <SectionTrainingCenter />}
        {activeSection === "cabinet"        && <SectionCabinet />}
        {activeSection === "analytics"      && <SectionAnalytics />}
        {activeSection === "users"          && <SectionUsers />}
        {activeSection === "appeals"        && <SectionAppeals />}
        {activeSection === "partners"       && <SectionPartners />}
        {activeSection === "contacts"       && <SectionContacts />}
      </main>

      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}
