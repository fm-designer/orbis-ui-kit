import React from "react";
import { StoryFn } from "@storybook/react";
import {
    Typography,
    ITitleProps,
    ITextProps,
    IAnchorProps,
    IServiceProps,
} from "../components";


export default {
    title: "Components/Typography",
    component: Typography
};

export const Title: StoryFn<ITitleProps> = (args) => <Typography.Title {...args} />;

Title.argTypes = {
    children: {
        table: {
            type: { summary: "string" },
            defaultValue: { summary: "null" }
        }
    },
    level: {
        control: "select",
        options: [ "H1", "H2", "H3", "H4" ],
        table: {
            type: { summary: "string" },
            defaultValue: { summary: `"H3"` }
        }
    },
    prefixCls: {
        table: {
            type: { summary: "string" },
            defaultValue: { summary: `"oms"` }
        },
        description: "Используется для переопределения префикса класса"
    }
};

Title.args = {
    children: "Title",
    level: "H3",
    prefixCls: "oms"
};

export const Text: StoryFn<ITextProps> = (args) => <Typography.Text {...args} />;

Text.argTypes = {
    children: {
        table: {
            type: { summary: "string" },
            defaultValue: { summary: "null" }
        }
    },
    bold: {
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: "false" }
        }
    },
    small: {
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: "false" }
        }
    },
    disabled: {
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: "false" }
        }
    },
    prefixCls: {
        table: {
            type: { summary: "string" },
            defaultValue: { summary: `"oms"` }
        },
        description: "Используется для переопределения префикса класса"
    }
};

Text.args = {
    children: "some text",
    bold: false,
    small: false,
    disabled: false,
    prefixCls: "oms"
};

export const Service: StoryFn<IServiceProps> = (args) => <Typography.Service {...args} />;

Service.argTypes = {
    children: {
        table: {
            type: { summary: "string" },
            defaultValue: { summary: "null" }
        }
    },
    variant: {
        control: "select",
        options: ["info", "warning", "error", "success", "help"],
        table: {
            type: { summary: "string" },
            defaultValue: { summary: `"info"` }
        }
    },
    small: {
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: "false" }
        }
    },
    showIcon: {
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: "false" }
        }
    },
    prefixCls: {
        table: {
            type: { summary: "string" },
            defaultValue: { summary: `"oms"` }
        },
        description: "Используется для переопределения префикса класса"
    }
};

Service.args = {
    children: "some message",
    variant: "info",
    showIcon: false,
    small: false,
    prefixCls: "oms"
};

export const Anchor: StoryFn<IAnchorProps> = (args) => <Typography.Anchor {...args} />;

Anchor.argTypes = {
    children: {
        table: {
            type: { summary: "string" },
            defaultValue: { summary: "null" }
        }
    },
    href: {
        table: {
            type: { summary: "string" },
            defaultValue: { summary: "" }
        }
    },
    small: {
        control: "boolean",
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: "false" }
        }
    },
    prefixCls: {
        table: {
            type: { summary: "string" },
            defaultValue: { summary: `"oms"` }
        },
        description: "Используется для переопределения префикса класса"
    }
};
Anchor.parameters = {
    controls: {
        exclude: ["target"]
    }
};

Anchor.args = {
    children: "click me",
    href: "https://upload.wikimedia.org/wikipedia/ru/thumb/f/f9/Film_2567_03.jpg/274px-Film_2567_03.jpg",
    target: "_blank",
    small: false,
    prefixCls: "oms"
};
