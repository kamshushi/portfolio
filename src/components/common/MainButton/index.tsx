import React, { HTMLAttributes } from "react";
import classes from "./styles.module.css";

type TProps = HTMLAttributes<HTMLButtonElement> & {
  type?: "primary" | "secondary";
};
export default function MainButton({
  type = "primary",
  children,
  className = "",
  ...props
}: TProps) {
  const typeClassName =
    type === "primary" ? classes.primary : classes.secondary;
  const combinedClassName = `${className} ${typeClassName} ${classes.mainButton}`;
  return (
    <button className={combinedClassName} role="button" {...props}>
      <span className="text">{children}</span>
    </button>
  );
}
