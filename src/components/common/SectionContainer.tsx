import React, { HTMLAttributes } from "react";

type TProps = HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};
export default function SectionContainer({ children, ...props }: TProps) {
  return (
    <section className="sm:px-16 md:px-32 lg:px-40 xl:px-52" {...props}>
      {children}
    </section>
  );
}
