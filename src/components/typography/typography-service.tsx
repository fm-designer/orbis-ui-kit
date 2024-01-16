import React from "react";
import { Icons } from "..";
import clsx from "clsx";

import "./style.scss";

type TServiceElement = React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

export interface IServiceProps extends TServiceElement {
    variant?: "info" | "warning" | "error" | "success" | "help";
    small?: boolean;
    showIcon?: boolean;
}

export const Service: React.FC<IServiceProps> = (
    (props): JSX.Element => {
        const {
            className,
            variant = "info",
            small,
            showIcon,
            children,
            ...rest
        } = props;

        return (
            <p
                className={clsx(
                    variant && "oms-typography_service-" + variant,
                    small && "oms-typography_small",
                    className
                )}
                {...rest}
            >
                {showIcon && variant === "info" && <Icons.Info />}
                {showIcon && variant === "warning" && <Icons.Warning />}
                {showIcon && variant === "error" && <Icons.Error />}
                {showIcon && variant === "success" && <Icons.Success />}
                {showIcon && variant === "help" && <Icons.Help />}
                {children}
            </p>
        );
    }
);
