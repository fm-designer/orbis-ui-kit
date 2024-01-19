import React from "react";
import { Icons } from "../../icons";
import clsx from "clsx";

import "./style.scss";


type TServiceElement = React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

export interface IServiceProps extends TServiceElement {
    variant?: "info" | "warning" | "error" | "success" | "help";
    small?: boolean;
    showIcon?: boolean;
    prefixCls?: string;
}

export const Service: React.FC<IServiceProps> = (
    (props): JSX.Element => {
        const {
            className,
            variant = "info",
            small,
            showIcon,
            prefixCls = "oms",
            children,
            ...rest
        } = props;

        const Icon = Icons[`${variant[0].toUpperCase() + variant.substring(1, variant.length + 1)}`];

        return (
            <p
                className={clsx(
                    variant && prefixCls + "-typography_service-" + variant,
                    small && prefixCls + "-typography_service-small",
                    className
                )}
                {...rest}
            >
                {showIcon && <Icon />}
                {children}
            </p>
        );
    }
);
