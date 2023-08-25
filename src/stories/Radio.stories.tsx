import React from "react";
import { StoryFn } from "@storybook/react";
import { Radio, IRadioProps } from "../components";


export default {
    title: "Components/Radio",
    component: Radio,
};

const Template: StoryFn<IRadioProps> = (args) => <Radio {...args} />;

export const NoLabel = Template.bind({});
export const Label = Template.bind({});

NoLabel.argTypes = {
    alignment: {
        table: {
            disable: true
        }
    },
    bold: {
        if: { arg: "label", neq: false }
    },
    checked: { control: "boolean" },
    // indeterminate: { control: "boolean" },
    disabled: { control: "boolean" },
    readOnly: {
        table: {
            disable: true
        }
    },
    label: {
        control: "boolean",
        mapping: {
            true: "label",
            false: "",
        }
    },
};

NoLabel.args = {
    checked: false,
    // indeterminate: false,
    disabled: false,
    readOnly: true,
    label: "label",
    bold: false
};