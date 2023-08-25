import React from "react";
import { StoryFn } from "@storybook/react";
import { Checkbox, ICheckboxProps } from "../components";


export default {
    title: "Components/Checkbox",
    component: Checkbox,
}

const Template: StoryFn<ICheckboxProps> = (args) => <Checkbox {...args} />;

export const NoLabel = Template.bind({});
export const Label = Template.bind({});
