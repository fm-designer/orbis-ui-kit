import React from "react";
import { StoryFn } from "@storybook/react";
import { Button, IButtonProps, Icons } from "../components";


export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    icon: {
      control: "boolean",
      mapping: {
        true: <Icons.ArrowBottom />,
        false: null,
      }
    },
    size: { control: "select" },
    variant: {
      table: {
        disable: true
      }
    },
  },
  args: {
    children: "button",
    size: "large",
    icon: <Icons.ArrowBottom />,
    round: false,
    disabled: false
  },
};

const Template: StoryFn<IButtonProps> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
export const Outlined = Template.bind({});
export const Ghost = Template.bind({});

Contained.args = {
  variant: "contained",
};

Outlined.args = {
  variant: "outlined",
};

Ghost.args = {
  variant: "ghost",
};
