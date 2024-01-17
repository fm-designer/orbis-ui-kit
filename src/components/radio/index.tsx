import React, { HTMLProps } from "react";
import { Typography } from "..";
import clsx from "clsx";

import "./style.scss";

export interface IRadioProps extends HTMLProps<HTMLInputElement> {
    align?: "center" | "top";
    bold?: boolean;
    prefixCls?: string;
}

export const Radio: React.FC<IRadioProps> = (props): JSX.Element => {
    const {
        align = "center",
        bold,
        prefixCls = "oms",
        label,
        className,
        ...rest
    } = props;

    return (
        <label className={clsx(prefixCls + "-radio_align-" + align, className)}>
            <label className={clsx({
                [`${prefixCls}-radio`]: !rest.checked,
                [`${prefixCls}-radio_checked`]: rest.checked
            }, rest.disabled && prefixCls + "-radio_disabled")}
            >
                <input {...rest} type="radio" />
            </label>
            {label && (
                <Typography.Text
                    className={clsx(!rest.disabled && prefixCls + "-radio_label")}
                    bold={bold}
                    disabled={rest.disabled}
                >
                    {label}
                </Typography.Text>
            )}
        </label>
    );
};
