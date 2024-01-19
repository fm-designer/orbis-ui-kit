import React, { forwardRef } from "react";
import clsx from "clsx";

import "./style.scss";


type TAnchorElement = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export interface IAnchorProps extends TAnchorElement {
    small?: boolean;
    prefixCls?: string;
}

export const Anchor: React.FC<IAnchorProps> = forwardRef<HTMLAnchorElement, IAnchorProps>(
    (props, ref): JSX.Element => {
        const {
            className,
            small,
            prefixCls = "oms",
            children,
            ...rest
        } = props;

        return (
            <a
                ref={ref}
                className={clsx(
                    prefixCls + "-typography_anchor",
                    small && prefixCls + "-typography_anchor-small",
                    className
                )}
                {...rest}
            >
                {children}
            </a>
        );
    }
);
