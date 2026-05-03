import { StyledPixelBoxStyle } from "../SharedComponent/StyledPixelBox/types";

export type CheckboxType = "main" | "inline";
export type CheckboxStyle = StyledPixelBoxStyle;

export interface CheckboxProps {
    label: string;
    type: CheckboxType;
    name: string;
    defaultChecked?: boolean;
    noLabel?: boolean;
    backgroundColor?: string;
    className?: string;
    checkboxStyle?: CheckboxStyle;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
