import React from "react";
import { StoryFn } from "@storybook/react";
import { Checkbox, ICheckboxProps } from "../components";


export default {
    title: "Components/Checkbox",
    component: Checkbox,
}

const Template: StoryFn<ICheckboxProps> = (args) => <Checkbox {...args} />;

export const Check = Template.bind({});
export const Indeterminate = Template.bind({});

Check.args = {
    checked: true,
    label: "some text",
    disabled: false
}

Indeterminate.args = {
    // indeterminate: true,
    label: "some text",
    disabled: false
}
