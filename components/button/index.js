import React from "react";
import styles from "./button.module.scss";
import cn from "classnames";

export default function Button({ children, className, ...props }) {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  );
}
