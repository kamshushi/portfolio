"use client";
import React from "react";
import SectionContainer from "../common/SectionContainer";
import { useScrollContext } from "@/contexts/ScrollContext";

export default function Navbar() {
  const { scrollY, isScrollingUp } = useScrollContext();
  const isHidden = !isScrollingUp && scrollY >= 200;

  const navPosition = isHidden
    ? "top-[calc(var(--navbar-height)*-1)]"
    : "top-0";

  return (
    <SectionContainer
      className={`fixed z-[2] w-full bg-primary-bg overflow-hidden border-b border-gray-700 flex items-center justify-between h-[var(--navbar-height)] transition-[top] duration-500 delay-100 font-nav text-2xl tracking-wider ${navPosition}`}
    >
      <h2 className="font-signature text-secondary-txt">
        {"<"}
        <span className="text-white">Ahmed</span>
        {" />"}
      </h2>

      <ul className="flex gap-8">
        <li>Home</li>
        <li>Work</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </SectionContainer>
  );
}
