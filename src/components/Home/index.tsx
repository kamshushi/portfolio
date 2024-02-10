import React from "react";
import LandingSection from "./LandingSection";
import Navbar from "../Navbar";

export default function HomePageComponent() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <LandingSection />
      </div>
    </div>
  );
}
