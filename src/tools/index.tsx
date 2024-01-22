import React, { useEffect } from "react";
import { useGlobals, useParameter } from "@storybook/api";
import { IconButton, Icons, WithTooltip, TooltipLinkList } from "@storybook/components";
import { PARAM_KEY } from "./constants";

type TVariantTheme = "light" | "dark";
type TVariantColor = "blue" | "green" | "orange" | "red";

interface IDefaultConfig {
    default: [TVariantTheme, TVariantColor]
}

export const ToolContextTheme = () => {
    const defaultConfig: IDefaultConfig = {
        default: ["light", "blue"]
    }

    const userConfig = useParameter<typeof defaultConfig>(
        PARAM_KEY,
        defaultConfig
    );

    const colorConfig: TVariantColor[] = [
        "blue", "green", "orange", "red"
    ];

    const [{ context_theme }, updateGlobals] = useGlobals();

    useEffect(() => {
        if (typeof context_theme === "undefined") {
            updateGlobals({
                context_theme: userConfig.default,
            });
        }
    }, [userConfig]);

    useEffect(() => {
        const iframe = document.getElementById(
            "storybook-preview-iframe"
        ) as HTMLIFrameElement;

        const iframeDocument =
            iframe.contentDocument || iframe.contentWindow?.document;

        const element = iframeDocument.querySelector("html");
        if (context_theme) {
            element.className = `theme-${context_theme[0]} color-${context_theme[1]}`;
        }
    }, [context_theme]);

    const setTheme = (variant_theme: TVariantTheme) => {
        updateGlobals({
            context_theme: [variant_theme, context_theme[1]],
        });
    };

    const setColor = (variant_color: TVariantColor) => {
        updateGlobals({
            context_theme: [context_theme[0], variant_color],
        });
    };

    if (!context_theme) return null;

    return (
        <>
            <IconButton key="change-theme" title="Change theme">
                {context_theme[0] === "light"
                    ? <Icons icon="sun" onClick={() => setTheme("dark")} />
                    : <Icons icon="moon" onClick={() => setTheme("light")} />
                }
            </IconButton>
            <WithTooltip
                placement="top"
                trigger="click"
                closeOnClick
                tooltip={() => {
                    return (
                        <TooltipLinkList
                            links={colorConfig.map((color) => {
                                return {
                                    id: color,
                                    title: color,
                                    active: context_theme[1] === color,
                                    onClick: () => setColor(color),
                                    value: color,
                                };
                            })}
                        />
                    );
                }}
            >
                <IconButton key="change-color" title="Change primary color">
                    <Icons icon="circle" style={{ color: context_theme[1] }} />
                </IconButton>
            </WithTooltip>
        </>
    );
};
