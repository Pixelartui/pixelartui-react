import { StyledPixelBoxStyle } from "../SharedComponent/StyledPixelBox/types";

export type SwitchType = "main" | "inline";
export type SwitchStyle = StyledPixelBoxStyle;

export interface SwitchProps {
    label: string;
    type: SwitchType;
    name: string;
    defaultChecked?: boolean;
    noLabel?: boolean;
    backgroundColor?: string;
    className?: string;
    switchStyle?: SwitchStyle;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
