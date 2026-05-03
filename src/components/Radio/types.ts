import { StyledPixelBoxStyle } from "../SharedComponent/StyledPixelBox/types";

export type RadioType = "main" | "inline";
export type RadioStyle = StyledPixelBoxStyle;

export interface RadioProps {
    label: string;
    type: RadioType;
    name: string;
    value: string;
    defaultChecked?: boolean;
    checked?: boolean;
    noLabel?: boolean;
    backgroundColor?: string;
    className?: string;
    radioStyle?: RadioStyle;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
