import React from "react";
import { StoryFn } from "@storybook/react";
import { Textarea, ITextareaProps } from "../components";


export default {
    title: "Components/Textarea",
    component: Textarea,
};

const Template: StoryFn<ITextareaProps> = (args) => <Textarea {...args} />;

export const NoLabel = Template.bind({});
// export const Label = Template.bind({});

NoLabel.argTypes = {
    // alignment: {
    //     table: {
    //         disable: true
    //     }
    // },
    // bold: {
    //     if: { arg: "label", neq: false }
    // },
    // checked: { control: "boolean" },
    // // indeterminate: { control: "boolean" },
    // disabled: { control: "boolean" },
    // readOnly: {
    //     table: {
    //         disable: true
    //     }
    // },
    // label: {
    //     control: "boolean",
    //     mapping: {
    //         true: "label",
    //         false: "",
    //     }
    // },
};

NoLabel.args = {
    hasError: true,
    placeholder: "some text",
    required: true,
    value: "fijfifgjifgjfg"
};