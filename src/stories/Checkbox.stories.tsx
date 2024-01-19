import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../components";


const story: Meta<typeof Checkbox> = {
    title: "Components/Checkbox",
    component: Checkbox,
    parameters: {},
    argTypes: {
        label: {
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "null" }
            }
        },
        labelBold: {
            control: "boolean",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" }
            },
         },
        checked: { 
            control: "boolean",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" }
            }
         },
        indeterminate: { 
            control: "boolean",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" }
            }
         },
        disabled: { 
            control: "boolean",
            table: {
                type: { summary: "false" },
                defaultValue: { summary: "false" }
            }
         },
        align: { 
            control: "select",
            table: {
                defaultValue: { summary: `"center"` }
            },
            description: "Используется для выравнивания checkbox относительно label"
        },
        prefixCls: {
            table: {
                defaultValue: { summary: `"oms"` }
            }
        }
    },
    args: {
        label: "some text",
        labelBold: false,
        checked: false,
        indeterminate: false,
        disabled: false,
        align: "center",
        prefixCls: "oms",
        readOnly: true
    }
}

export default story;

type Story = StoryObj<typeof Checkbox>;

export const Checked: Story = {
    parameters: {
        controls: {
            exclude: [ "indeterminate", "readOnly" ]
        }
    }
};
export const Indeterminate: Story = {
    parameters: {
        controls: {
            exclude: [ "checked", "readOnly" ]
        }
    }
};
