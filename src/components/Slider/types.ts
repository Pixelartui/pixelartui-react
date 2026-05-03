import { StyledPixelBoxStyle } from "../SharedComponent/StyledPixelBox/types";

export type SliderType = "main" | "inline";
export type SliderStyle = StyledPixelBoxStyle;

export interface SliderProps {
    label: string;
    type: SliderType;
    name: string;
    min?: number;
    max?: number;
    step?: number;
    defaultValue?: number;
    value?: number;
    noLabel?: boolean;
    showValue?: boolean;
    backgroundColor?: string;
    className?: string;
    sliderStyle?: SliderStyle;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
