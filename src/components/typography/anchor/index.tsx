import React, { forwardRef } from "react";
import clsx from "clsx";

import "./style.scss";

type TAnchorElement = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export interface IAnchorProps extends TAnchorElement {
    small?: boolean;
    prefixClsCls?: string;
}

export const Anchor: React.FC<IAnchorProps> = forwardRef<HTMLAnchorElement, IAnchorProps>(
    (props, ref): JSX.Element => {
        const {
            className,
            small,
            prefixClsCls = "oms",
            children,
            ...rest
        } = props;

        return (
            <a
                ref={ref}
                className={clsx(
                    prefixClsCls + "-typography_anchor",
                    small && prefixClsCls + "-typography_anchor-small",
                    className
                )}
                {...rest}
            >
                {children}
            </a>
        );
    }
);
