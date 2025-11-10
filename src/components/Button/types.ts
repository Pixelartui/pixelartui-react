import React from "react";

export type ButtonSize = "small" | "medium" | "large";
export type ButtonType = "main" | "outline";

export interface ButtonProps {
    text: string;
    buttonSize: ButtonSize;
    buttonType: ButtonType;
    fullwidth?: boolean;
    round?: boolean;
    backgroundColor?: string;
    disabled?: boolean;
    width?: string;
    height?: string;
    className?: string;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
