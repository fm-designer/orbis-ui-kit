import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Radio } from "../components";


const story: Meta<typeof Radio> = {
    title: "Components/Radio",
    component: Radio,
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
            description: "Используется для выравнивания Radio относительно label"
        },
        prefixCls: {
            table: {
                defaultValue: { summary: `"oms"` }
            },
            description: "Используется для переопределения префикса класса"
        }
    },
    args: {
        label: "some text",
        labelBold: false,
        checked: false,
        disabled: false,
        align: "center",
        prefixCls: "oms",
        readOnly: true
    }
}

export default story;

type Story = StoryObj<typeof Radio>;

export const Playground: Story = {
    parameters: {
        controls: {
            exclude: [ "readOnly" ]
        }
    }
};

