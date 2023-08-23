import React, { forwardRef } from "react";
import clsx from "clsx";

import "./style.scss";

type TTextElement = React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

export interface ITextProps extends TTextElement {
    bold?: boolean;
    small?: boolean;
    disabled?: boolean;
    iconPrefix: JSX.Element;
    iconSuffix: JSX.Element;
}

export const Text: React.FC<ITextProps> = forwardRef<HTMLParagraphElement, ITextProps>(
    (props, ref): JSX.Element => {
        const {
            className,
            bold,
            small,
            disabled,
            ...rest
        } = props;

        return (
            <p
                ref={ref}
                className={clsx(
                    bold ? "oms-typography_text-bold" : "oms-typography_text",
                    small && "oms-typography_small",
                    disabled && "oms-typography_disabled",
                    className
                )}
                {...rest}
            />
        );
    }
);
