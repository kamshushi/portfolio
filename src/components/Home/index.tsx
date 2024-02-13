import React from "react";
import LandingSection from "./LandingSection";
import Navbar from "../Navbar";
import AboutMeSection from "./AboutMeSection";

export default function HomePageComponent() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <LandingSection />
      </div>
      <div>
        <AboutMeSection />
      </div>
    </div>
  );
}
