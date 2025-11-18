import { ReactNode } from "react";
import { StyledPixelBoxStyle } from "../SharedComponent/StyledPixelBox/types";

export interface SelectOption {
    label: string | ReactNode;
    value: string;
}
export type SelectType = "main" | "inline";
export type SelectStyle = StyledPixelBoxStyle;

export interface SelectProps {
    type: SelectType;
    backgroundColor?: string;
    options: SelectOption[];
    display: string;
    selectName: string;
    selectLabel: string;
    noLabel?: boolean;
    disabled?: boolean;
    error?: boolean;
    className?: string;
    selectStyle?: SelectStyle;
    width?: string;
    height?: string;
    fullwidth?: boolean;
    onChange?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export interface SelectIconProps {
    open: boolean;
    disabled?: boolean;
    backgroundColor?: string;
}
