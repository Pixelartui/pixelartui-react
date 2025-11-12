import { StyledPixelBoxType } from "../SharedComponent/StyledPixelBox/types";

export type SwitchType = "main" | "inline";
export type SwitchStyle = StyledPixelBoxType;

export interface SwitchProps {
    label: string;
    type: SwitchType;
    name: string;
    defaultChecked?: boolean;
    noLabel?: boolean;
    backgroundColor?: string;
    checked?: boolean;
    className?: string;
    switchStyle?: SwitchStyle;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
