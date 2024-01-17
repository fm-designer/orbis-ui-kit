import React from "react";
import clsx from "clsx";
import "./styles.scss";


export interface IButtonProps extends
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement> {
  size?: "large" | "medium" | "small";
  variant?: "contained" | "outlined" | "ghost";
  round?: boolean;
  icon?: JSX.Element;
  prefixCls?: string;
}

export const Button = ({
  className,
  size = "large",
  variant = "contained",
  round,
  icon,
  prefixCls = "oms",
  children,
  ...rest
}: IButtonProps) => {

  return (
    <button
      type="button"
      className={clsx(
        size && prefixCls + "-button_" + size,
        variant && prefixCls + "-button_" + variant,
        round && prefixCls + "-button_round",
        !children && prefixCls + "-button_square",
        className
      )}
      {...rest}
    >
      {icon && icon}
      {children && (
        <span
          className={clsx(prefixCls + "-button_text")}
        >
          {children}
        </span>
      )}
    </button>
  );
};
