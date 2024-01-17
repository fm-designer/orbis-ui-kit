import React from "react";
import { Title, ITitleProps } from "./title";
import { Text, ITextProps } from "./text";
import { Anchor, IAnchorProps } from "./anchor";
import { Service, IServiceProps } from "./service";

export interface ITypography {
    Title: React.FC<ITitleProps>;
    Text: React.FC<ITextProps>;
    Anchor: React.FC<IAnchorProps>;
    Service: React.FC<IServiceProps>;
}

export const Typography: ITypography = {
    Title,
    Text,
    Anchor,
    Service
};
