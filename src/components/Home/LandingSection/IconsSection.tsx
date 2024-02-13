import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const icons = [
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/ahmed-elkamshoushy-299b75197/",
    title: "Linkedin",
  },
  {
    icon: FaGithub,
    link: "https://github.com/kamshushi",
    title: "Github",
  },
  {
    icon: FaFacebook,
    link: "https://www.facebook.com/ahmed.elkamshoushyii/",
    title: "Facebook",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/ahmedelkamshoushy/",
    title: "Instagram",
  },
];
export default function IconsSection() {
  return (
    <ul className="flex gap-5">
      {icons.map(({ icon: Icon, link, title }) => {
        return (
          <li key={link}>
            <Icon className="text-3xl hover:text-secondary-txt cursor-pointer" />
          </li>
        );
      })}
    </ul>
  );
}
