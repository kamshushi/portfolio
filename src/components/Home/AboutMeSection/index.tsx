import SectionContainer from "@/components/common/SectionContainer";
import React from "react";

export default function AboutMeSection() {
  return (
    <SectionContainer>
      <h2 className="text-5xl font-about-me-header font-bold text-center">
        Hi, I'm <span className="">Ahmed Elkamshoushy</span>
      </h2>
      <p className="mt-16 text-xl font-about-me-body">
        I'm a web developer, I live in Egypt and I work with the technical team
        that is currently maintaining this website. I enjoy building websites
        and the best thing about my job is that I get to build something that
        can be used by a lot of people to make them have a better learning
        experience with the school.
        <br />
        <br /> I enjoy playing guitar and video games in my free time. I will
        also respond to any technical issues and new features with the website.
      </p>
    </SectionContainer>
  );
}
