import * as React from "react";
import { Typography } from "..";
import clsx from "clsx";

import "./style.scss";


export interface ITextareaProps
    extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
    onChange: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    description?: string;
    hasError?: boolean;
    errorMessage?: string;
    resize?: boolean;
    prefixCls?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, ITextareaProps>(
    ({
        description,
        hasError,
        errorMessage,
        resize,
        prefixCls = "oms",
        className,
        placeholder,
        required,
        onFocus,
        onBlur,
        onChange,
        ...rest
    }, ref) => {
        const [ focus, setFocus ] = React.useState<boolean>(false);

        return (
            <div className={clsx(prefixCls + "-textarea_container", className)}>
                <div className={prefixCls + "-textarea_wrapper"}>
                    <textarea
                        className={clsx({
                            [`${prefixCls + "-textarea"}`]: !rest.disabled && !hasError,
                            [`${prefixCls + "-textarea_disabled"}`]: rest.disabled,
                            [`${prefixCls + "-textarea_error"}`]: hasError
                        }, resize && prefixCls + "-textarea_resize")}
                        ref={ref}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            let { value } = e.currentTarget;
                            onChange(value, e);
                        }}
                        onFocus={(...args) => {
                            setFocus(true);
                            if (onFocus) {
                                onFocus(...args);
                            }
                        }}
                        onBlur={(...args) => {
                            setFocus(false);
                            if (onBlur) {
                                onBlur(...args);
                            }
                        }}
                        {...rest}
                    />
                    {(placeholder && !focus && !rest.value) && (
                        <div className={prefixCls + "-textarea_wrapper-placeholder"}>
                            <Typography.Text
                                className={prefixCls + "-textarea_placeholder"}
                                disabled={rest.disabled}
                            >
                                {placeholder}
                            </Typography.Text>
                            {required && !rest.disabled && (
                                <Typography.Service
                                    className={prefixCls + "-textarea_required"}
                                    variant="error"
                                >
                                    *
                                </Typography.Service>
                            )}
                        </div>
                    )}
                </div>
                {description && !hasError && (
                    <Typography.Text disabled>
                        {description}
                    </Typography.Text>
                )}
                {errorMessage && hasError && (
                    <Typography.Service variant="error">
                        {errorMessage}
                    </Typography.Service>
                )}
            </div>
        );
    }
);
