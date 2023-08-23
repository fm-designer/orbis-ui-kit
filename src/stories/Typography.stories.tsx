import React from "react";
import { StoryFn } from "@storybook/react";
import {
    Typography,
    ITitleProps,
    ITextProps,
    IAnchorProps,
    IServiceProps,
    Icons,
} from "../components";


export default {
    title: "Components/Typography",
    component: Typography
};

const TypographyTitle: StoryFn<ITitleProps> = (args) => <Typography.Title {...args} />;
const TypographyText: StoryFn<ITextProps> = (args) => <Typography.Text {...args} />;
const TypographyAnchor: StoryFn<IAnchorProps> = (args) => <Typography.Anchor {...args} />;
const TypographyService: StoryFn<IServiceProps> = (args) => <Typography.Service {...args} />;

export const Title = TypographyTitle.bind({});
export const Text = TypographyText.bind({});
export const Anchor = TypographyAnchor.bind({});
export const Service = TypographyService.bind({});

Title.argTypes = {
    level: {
        control: "select",
        options: ["H1", "H2", "H3", "H4"]
    }
};
Title.args = {
    children: "Title",
    level: "H1"
};

Text.argTypes = {
    bold: { control: "boolean" },
    small: { control: "boolean" },
    disabled: { control: "boolean" }
};

Text.args = {
    children: "some text",
    bold: false,
    small: false,
    disabled: false
};

Anchor.argTypes = {
    small: { control: "boolean" },
    iconPrefix: {
        control: "boolean",
        mapping: {
            true: <Icons.Open />,
            false: null,
        }
    },
    iconSuffix: {
        control: "boolean",
        mapping: {
            true: <Icons.Open />,
            false: null,
        }
    },
    href: {
        table: {
            disable: true
        }
    },
    target: {
        table: {
            disable: true
        }
    },
};

Anchor.args = {
    children: "click me",
    href: "https://upload.wikimedia.org/wikipedia/ru/thumb/f/f9/Film_2567_03.jpg/274px-Film_2567_03.jpg",
    target: "_blank",
    iconPrefix: false,
    iconSuffix: <Icons.Open />,
    small: false
};

Service.argTypes = {
    variant: {
        control: "select",
        options: ["info", "warning", "danger", "success", "help"]
    },
    small: { control: "boolean" },
    showIcon: { control: "boolean" }
};

Service.args = {
    children: "message",
    variant: "info",
    showIcon: false,
    small: false
};
