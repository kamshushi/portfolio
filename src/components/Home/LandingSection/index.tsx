import SectionContainer from "@/components/common/SectionContainer";
import React from "react";
import ImageSection from "./ImageSection";
import IconsSection from "./IconsSection";
import MainButton from "@/components/common/MainButton";

export default function LandingSection() {
  return (
    <SectionContainer className="">
      <div className="h-auto pt-[var(--navbar-height)] flex items-center  lg:h-svh">
        <div className="mt-20 lg:mt-0 h-full w-full flex gap-32 items-center  flex-nowrap flex-col lg:flex-row">
          <div className="shrink-0 w-4/5 md:w-4/6 lg:w-[28vw]	">
            <ImageSection />
          </div>
          <div className="w-full flex items-center">
            <div className="w-full">
              <h6 className="font-main-header text-[10vw] sm:text-[9vw] lg:text-[4.5vw] font-black">
                CREATIVE <span className="text-secondary-txt block">WEB</span>
                DEVELOPER
              </h6>

              <div className="mt-10 flex gap-5 flex-col lg:flex-row">
                <MainButton className="flex-1">hire me</MainButton>

                <MainButton type="secondary" className="flex-1">
                  work
                </MainButton>
              </div>
              <div className="mt-7">
                <IconsSection />
              </div>
            </div>
            {/* <div className="font-main">
              <h4 className="text-2xl font-bold text-[var(--clr-font-secondary-txt)]">
                Ahmed Elkamshoushy
              </h4>
              <span className="mt-3 text-slate-400">Web Developer</span>
              <p className="mt-16 text-lg">
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
              <div className="mt-7">
                <IconsSection />
                <div className="mt-5">
                  <button className="button-48" role="button">
                    <span className="text">Hire Me</span>
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
