import { ReactNode } from "react";

export interface SelectOption {
    label: string | ReactNode;
    value: string;
}
export type SelectType = "main" | "inline";

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
    helperText?: FunctionStringCallback;
    onChange?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
