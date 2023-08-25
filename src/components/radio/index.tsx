import React, { HTMLProps } from 'react';
import { Typography } from '..';
import clsx from 'clsx';

import './style.scss';

export interface IRadioProps extends HTMLProps<HTMLInputElement> {
    className?: string,
    alignment?: 'center' | 'top',
    bold?: boolean
}

export const Radio: React.FC<IRadioProps> = (props): JSX.Element => {
    const {
        className,
        alignment = 'center',
        bold,
        label,
        ...inputProps
    } = props;

    return (
        <label className={clsx(alignment && 'wrapper-radio_' + alignment, className)}>
            <label className={clsx({
                'oms-radio': !inputProps.checked,
                'oms-radio_checked': inputProps.checked
            }, inputProps.disabled && 'oms-radio_disabled')}
            >
                <input {...inputProps} type="radio" />
            </label>
            {label && (
                <Typography.Text
                    className={clsx(!inputProps.disabled && 'oms-radio_label')}
                    bold={bold}
                    disabled={inputProps.disabled}
                >
                    {label}
                </Typography.Text>
            )}
        </label>
    );
};
