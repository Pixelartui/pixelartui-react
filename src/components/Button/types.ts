import React from "react";
import { StyledPixelBoxStyle } from "../SharedComponent/StyledPixelBox/types";

export type ButtonSize = "small" | "medium" | "large";
export type ButtonType = "main" | "outline";
export type ButtonStyle = StyledPixelBoxStyle;

export interface ButtonProps {
    text: string;
    buttonSize: ButtonSize;
    buttonType: ButtonType;
    buttonStyle?: ButtonStyle;
    fullwidth?: boolean;
    round?: boolean;
    backgroundColor?: string;
    disabled?: boolean;
    width?: string;
    height?: string;
    className?: string;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
