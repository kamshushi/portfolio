import React from "react";
import LandingSection from "./LandingSection";
import Navbar from "../Navbar";
import AboutMeSection from "./AboutMeSection";
import ExperienceSection from "./ExperienceSection";

export default function HomePageComponent() {
  return (
    <div className="font-main">
      <div>
        <Navbar />
      </div>
      <div>
        <LandingSection />
      </div>
      <div className="mt-16">
        <AboutMeSection />
      </div>
      <div className="mt-44">
        <ExperienceSection />
      </div>
    </div>
  );
}
