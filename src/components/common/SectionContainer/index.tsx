import React, { HTMLAttributes } from "react";

type TProps = HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};
export default function SectionContainer({
  children,
  className = "",
  ...props
}: TProps) {
  const combinedClassName = `sm:px-16 md:px-32 lg:px-40 xl:px-52 ${className}`;
  return (
    <section className={combinedClassName} {...props}>
      {children}
    </section>
  );
}
