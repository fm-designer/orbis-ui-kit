import React, { forwardRef } from "react";
import clsx from "clsx";

import "./style.scss";


type TTileElement = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export interface ITitleProps extends TTileElement {
    level?: "H1" | "H2" | "H3" | "H4";
    prefixCls?: string;
}

export const Title: React.FC<ITitleProps> = forwardRef<HTMLHeadingElement, ITitleProps>(
    (props, ref): JSX.Element => {
        const {
            className,
            level,
            prefixCls = "oms",
            ...rest
        } = props;

        switch (level) {
            case "H1": return (
                <h1
                    ref={ref}
                    className={clsx(prefixCls + "-typography_title-1", className)}
                    {...rest}
                />
            );
            case "H2": return (
                <h2
                    ref={ref}
                    className={clsx(prefixCls + "-typography_title-2", className)}
                    {...rest}
                />
            );
            case "H3": return (
                <h3
                    ref={ref}
                    className={clsx(prefixCls + "-typography_title-3", className)}
                    {...rest}
                />
            );
            case "H4": return (
                <h4
                    ref={ref}
                    className={clsx(prefixCls + "-typography_title-4", className)}
                    {...rest}
                />
            );
            default: return (
                <h3
                    ref={ref}
                    className={clsx(prefixCls + "-typography_title-3", className)}
                    {...rest}
                />
            );
        }
    }
);
