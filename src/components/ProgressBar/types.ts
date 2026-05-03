import { StyledPixelBoxStyle } from "../SharedComponent/StyledPixelBox/types";

export type ProgressBarStyle = StyledPixelBoxStyle;

export interface ProgressBarProps {
    value: number;
    max?: number;
    label?: string;
    showValue?: boolean;
    progressBarStyle?: ProgressBarStyle;
    backgroundColor?: string;
    fillColor?: string;
    className?: string;
}
