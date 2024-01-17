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

NoLabel.args = {
    checked: false,
    disabled: false,
    label: "some text"
}
