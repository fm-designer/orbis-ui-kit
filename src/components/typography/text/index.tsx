import React, { forwardRef } from "react";
import clsx from "clsx";

import "./style.scss";

type TTextElement = React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

export interface ITextProps extends TTextElement {
    bold?: boolean;
    small?: boolean;
    disabled?: boolean;
    prefixCls?: string;
}

export const Text: React.FC<ITextProps> = forwardRef<HTMLParagraphElement, ITextProps>(
    (props, ref): JSX.Element => {
        const {
            className,
            bold,
            small,
            disabled,
            prefixCls = "oms",
            ...rest
        } = props;

        return (
            <p
                ref={ref}
                className={clsx(
                    bold ? prefixCls + "-typography_text-bold" : "oms-typography_text",
                    small && prefixCls + "-typography_text-small",
                    disabled && prefixCls + "-typography_text-disabled",
                    className
                )}
                {...rest}
            />
        );
    }
);
