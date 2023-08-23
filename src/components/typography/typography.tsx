import React from "react";
import { Title, ITitleProps } from "./typography-title";
import { Text, ITextProps } from "./typography-text";
import { Anchor, IAnchorProps } from "./typography-anchor";
import { Service, IServiceProps } from "./typography-service";

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
