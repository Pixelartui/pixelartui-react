import { ReactNode } from "react";
import { StyledPixelBoxType } from "../SharedComponent/StyledPixelBox/types";

export interface SelectOption {
    label: string | ReactNode;
    value: string;
}
export type SelectType = "main" | "inline";
export type SelectStyle = StyledPixelBoxType;

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
    helperText?: FunctionStringCallback;
    onChange?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export interface SelectIconProps {
    open: boolean;
    disabled?: boolean;
    backgroundColor?: string;
}
