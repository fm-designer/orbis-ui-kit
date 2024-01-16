import React from "react";
import { StoryFn } from "@storybook/react";
import { Button, IButtonProps, Icons } from "../components";


export default {
  title: "Components/Button",
  component: Button,
  tags: ['autodocs'],
  parameters: {
    description: 'Overwritten description',
  },
  argTypes: {
    children: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null }
      },
    },
    icon: {
      control: "boolean",
      table: {
        type: { summary: 'JSX.Element' },
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
        type: { summary: 'boolean' },
        defaultValue: { summary: "false" }
      },
    },
    disabled: {
      control: "boolean",
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: "false" }
      },
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

const Template: StoryFn<IButtonProps> = (args) => <Button {...args} />;
// export const API = Template.bind({});
export const withChildren = Template.bind({});
export const noChildren = Template.bind({});

withChildren.args = {
  children: "some text"
}

noChildren.args = {
  children: null
}

