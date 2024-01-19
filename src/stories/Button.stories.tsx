import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, Icons } from "../components";

const story: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {},
  argTypes: {
    children: {
      table: {
        type: { summary: "string" },
        defaultValue: { summary: null }
      },
    },
    icon: {
      control: "boolean",
      table: {
        type: { summary: "JSX.Element" },
        defaultValue: { summary: null }
      },
      mapping: {
        true: <Icons.ArrowBottom />,
        false: null,
      }
    },
    variant: { control: "select" },
    size: { control: "select" },
    round: {
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" }
      },
    },
    disabled: {
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" }
      },
    },
    prefixCls: {
      control: "string",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "oms" }
      },
      description: "Используется для переопределения префикса класса"
    }
  },
  args: {
    children: "button",
    icon: <Icons.ArrowBottom />,
    variant: "contained",
    size: "large",
    round: false,
    disabled: false
  },
};

export default story;

type Story = StoryObj<typeof Button>;

export const Playground: Story = {};
export const Square: Story = {
  parameters: {
    controls: {
      exclude: ["icon", "children"]
    },
  },
  args: {
    children: null
  }
};

console.log('gg');
