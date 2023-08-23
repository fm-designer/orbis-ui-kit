import React, { forwardRef } from "react";
import clsx from "clsx";

import "./style.scss";

type TAnchorElement = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export interface IAnchorProps extends TAnchorElement {
    small?: boolean;
    iconPrefix: JSX.Element;
    iconSuffix: JSX.Element;
}

export const Anchor: React.FC<IAnchorProps> = forwardRef<HTMLAnchorElement, IAnchorProps>(
    (props, ref): JSX.Element => {
        const {
            className,
            small,
            iconPrefix,
            iconSuffix,
            children,
            ...rest
        } = props;

        return (
            <a
                ref={ref}
                className={clsx("oms-typography_anchor", small && "oms-typography_small", className)}
                {...rest}
            >
                {iconPrefix && iconPrefix}
                {children}
                {iconSuffix && iconSuffix}
            </a>
        );
    }
);
