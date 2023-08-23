import React from "react";
import clsx from "clsx";
import "./styles.scss";


/* eslint-disable-next-line */
export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: "large" | "medium" | "small";
  variant?: "contained" | "outlined" | "ghost";
  round?: boolean;
  icon?: JSX.Element;
}

export const Button = ({
  className,
  size = "large",
  variant = "contained",
  round = false,
  icon,
  children,
  ...props
}: IButtonProps) => {

  return (
    <button
      type="button"
      className={clsx(
        size && "oms-button_" + size,
        variant && "oms-button_" + variant,
        round && "oms-button_round",
        !children && "no-text",
        className
      )}
      {...props}
    >
      {icon && icon}
      {children && (
        <span className="wrapper-text">{children}</span>
      )}
    </button>
  );
};
