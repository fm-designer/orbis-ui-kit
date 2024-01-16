import * as React from 'react';
import clsx from 'clsx';
import { Typography } from '..';

import './style.scss';

export interface ITextareaProps
    extends Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'className'> {
    onChange: (value: string, original_event: React.ChangeEvent<HTMLTextAreaElement>) => any;
    isFocus?: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
    description?: string;
    hasError?: boolean;
    hasErrorMessage?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, ITextareaProps>(
    ({
        className,
        description,
        hasError,
        hasErrorMessage,
        placeholder,
        required,
        onFocus,
        isFocus,
        onBlur,
        onChange,
        ...restInputProps
    }, ref) => {
        const [focus, setFocus] = React.useState<boolean>(false);

        return (
            <div className={clsx(className, 'oms-textarea_wrapper')}>
                <div className={clsx({
                    'oms-textarea': !restInputProps.disabled && !hasError,
                    'oms-textarea_disabled': restInputProps.disabled,
                    'oms-textarea_error': hasError
                })}
                >
                    <textarea
                        ref={ref}
                        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                            if (onChange) {
                                let { value } = event.currentTarget;
                                onChange(value, event);
                            }
                        }}
                        onFocus={(...args) => {
                            setFocus(true);
                            if (isFocus) {
                                isFocus(true);
                            }
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
                        {...restInputProps}
                    />
                    {(placeholder && !focus && !restInputProps.value) && (
                        <div className="wrapper-placeholder">
                            <Typography.Text
                                className="oms-textarea_placeholder"
                                disabled={restInputProps.disabled}
                            >
                                {placeholder}
                            </Typography.Text>
                            {required && (
                                <Typography.Service
                                    className="oms-textarea_required"
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
                {hasErrorMessage && hasError && (
                    <Typography.Service variant="error">
                        {hasErrorMessage}
                    </Typography.Service>
                )}
            </div>
        );
    }
);
