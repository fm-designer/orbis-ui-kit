import React, { HTMLProps } from 'react';
import clsx from 'clsx';

import './style.scss';
import { Icons, Typography } from '..';

export interface ICheckboxProps extends HTMLProps<HTMLInputElement> {
    indeterminate?: boolean,
    alignment?: 'center' | 'top',
    bold?: boolean
}

export const Checkbox: React.FC<ICheckboxProps> = (props): JSX.Element => {
    const {
        className,
        alignment = 'center',
        bold,
        indeterminate,
        label,
        ...inputProps
    } = props;

    return (
        <label className={clsx(alignment && 'wrapper-checkbox_' + alignment, className)}>
            <label className={clsx({
                'oms-checkbox': !inputProps.checked && !indeterminate,
                'oms-checkbox_checked': inputProps.checked,
                'oms-checkbox_indeterminate': indeterminate
            }, inputProps.disabled && 'oms-checkbox_disabled')}
            >
                <input {...inputProps} type="checkbox" />
                {inputProps.checked && <Icons.Check />}
                {indeterminate && <Icons.Indeterminate />}
            </label>
            {label && (
                <Typography.Text
                    className={clsx(!inputProps.disabled && 'oms-checkbox_label')}
                    bold={bold}
                    disabled={inputProps.disabled}
                >
                    {label}
                </Typography.Text>
            )}
        </label>
    );
};
