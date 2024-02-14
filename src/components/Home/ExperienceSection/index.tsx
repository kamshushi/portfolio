import SectionContainer from "@/components/common/SectionContainer";
import React from "react";

const experienceList = [
  {
    title: "The origin",
    subtitle: "Acme was founded in Milan, Italy",
    description:
      "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.Adipiscing enim eu neque aliquam vestibulum morbi blandit cursusrisus.",
    date: "May, 2022",
  },
  {
    title: "The origin",
    subtitle: "Acme was founded in Milan, Italy",
    description:
      "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.Adipiscing enim eu neque aliquam vestibulum morbi blandit cursusrisus.",
    date: "May, 2022",
  },
  {
    title: "The origin",
    subtitle: "Acme was founded in Milan, Italy",
    description:
      "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.Adipiscing enim eu neque aliquam vestibulum morbi blandit cursusrisus.",
    date: "May, 2022",
  },
  {
    title: "The origin",
    subtitle: "Acme was founded in Milan, Italy",
    description:
      "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.Adipiscing enim eu neque aliquam vestibulum morbi blandit cursusrisus.",
    date: "May, 2022",
  },
];

export default function ExperienceSection() {
  return (
    <SectionContainer>
      <h2 className="text-4xl font-main-header">Experience</h2>
      {/*  */}
      <div
        className="mt-12"
        //    className="-my-6"
      >
        {experienceList.map((experience) => {
          const { title, subtitle, description, date } = experience;
          return (
            <div className="relative pl-8 sm:pl-32 py-6 group">
              <div className="font-main-header font-medium text-2xl text-secondary-txt mb-1 sm:mb-0 ">
                {title}
              </div>
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-secondary-txt sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-secondary-txt after:border-4 after:box-content after:border-secondary-txt after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-orange-700 bg-orange-50 rounded-full">
                  {date}
                </time>
                <div className="text-xl font-bold text-primary-txt italic">
                  {subtitle}
                </div>
              </div>
              <div className="text-primary-txt">{description}</div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
