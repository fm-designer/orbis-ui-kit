import React, { HTMLProps } from "react";
import { Icons, Typography } from "..";
import clsx from "clsx";

import "./style.scss";

export interface ICheckboxProps extends HTMLProps<HTMLInputElement> {
    indeterminate?: boolean;
    align?: "center" | "top";
    bold?: boolean;
    prefixCls?: string;
}

export const Checkbox: React.FC<ICheckboxProps> = (props): JSX.Element => {
    const {
        indeterminate,
        align = "center",
        bold,
        prefixCls = "oms",
        label,
        className,
        ...rest
    } = props;

    console.log(label);

    return (
        <label className={clsx(prefixCls + "-checkbox_align-" + align, className)}>
            <label className={clsx({
                [`${prefixCls}-checkbox`]: !rest.checked && !indeterminate,
                [`${prefixCls}-checkbox_checked`]: rest.checked,
                [`${prefixCls}-checkbox_indeterminate`]: indeterminate,
            }, rest.disabled && prefixCls + "-checkbox_disabled")}
            >
                <input {...rest} type="checkbox" />
                {rest.checked && <Icons.Check />}
                {indeterminate && <Icons.Indeterminate />}
            </label>
            {label && (
                <Typography.Text
                    className={clsx(!rest.disabled && prefixCls + "-checkbox_label")}
                    bold={bold}
                    disabled={rest.disabled}
                >
                    {label}
                </Typography.Text>
            )}
        </label>
    );
};
