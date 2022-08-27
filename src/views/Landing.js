import React from "react";
import Navbar from "components/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./HeroSection";
import AboutUsSection from "./AboutUsSection";
import ServicesOfferedSection from "./ServicesOfferedSection";
import ProjectsSection from "./ProjectsSection";

export default function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutUsSection />
        <ServicesOfferedSection />
      </main>
    </>
  );
}
