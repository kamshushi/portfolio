import SectionContainer from "@/components/common/SectionContainer";
import React from "react";
import ImageSection from "./ImageSection";

export default function LandingSection() {
  return (
    <SectionContainer>
      <div className="h-svh pt-[var(--navbar-height)] flex items-center">
        <div className="flex gap-32 justify-center sm:flex-wrap xl:flex-nowrap">
          <div className="shrink-0 w-[400px]	">
            <ImageSection />
          </div>
          <div>
            <div className="font-main">
              <h4 className="text-2xl font-bold text-[var(--clr-font-secondary)]">
                Ahmed Elkamshoushy
              </h4>
              <span className="mt-3 text-slate-400">Web Developer</span>
              <p className="mt-16">
                Hey, I'm Ahmed and I'm a web developer, I live in Egypt and I
                work with the technical team that is currently maintaining this
                website. I enjoy building websites and the best thing about my
                job is that I get to build something that can be used by a lot
                of people to make them have a better learning experience with
                the school.
                <br />
                <br /> I enjoy playing guitar and video games in my free time. I
                will also respond to any technical issues and new features with
                the website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
