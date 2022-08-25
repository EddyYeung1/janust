import React from "react";
import Navbar from "components/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./HeroSection";
import AboutUsSection from "./AboutUsSection";
import ServicesOfferedSection from "./ServicesOfferedSection";

export default function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutUsSection />
        <ServicesOfferedSection />
      </main>
    </>
  );
}
