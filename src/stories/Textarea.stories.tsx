import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "../components";


const story: Meta<typeof Textarea> = {
    title: "Components/Textarea",
    component: Textarea,
    parameters: {},
    argTypes: {
        value: {
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "" }
            }
        },
        placeholder: {
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "" }
            }
        },
        description: {
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "" }
            }
        },
        disabled: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" }
            }
        },
        required: {
            control: "boolean",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" }
            },
            if: { arg: "disabled", truthy: false }
        },
        resize: {
            control: "boolean",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" }
            },
            if: { arg: "disabled", truthy: false }
        },
        error: {
            control: "boolean",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" }
            },
            if: { arg: "disabled", truthy: false }
        },
        errorMessage: {
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "" }
            },
            if: { arg: "error", truthy: true }
        },
        prefixCls: {
            table: {
                defaultValue: { summary: `"oms"` }
            },
            description: "Используется для переопределения префикса класса"
        }
    },
    args: {
        value: "",
        placeholder: "some text",
        description: "some desc",
        disabled: false,
        required: false,
        resize: false,
        error: false,
        errorMessage: "some error message",
        prefixCls: "oms"
    }

};

export default story;

type Story = StoryObj<typeof Textarea>;

export const Playground: Story = {
    parameters: {
        controls: {
            // exclude: [ "onChange" ]
        }
    }
};
