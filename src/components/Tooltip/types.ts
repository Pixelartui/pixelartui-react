import { StyledPixelBoxStyle } from "../SharedComponent/StyledPixelBox/types";

export type TooltipPosition = "top" | "bottom" | "left" | "right";
export type TooltipStyle = StyledPixelBoxStyle;

export interface TooltipProps {
    text: string;
    position?: TooltipPosition;
    tooltipStyle?: TooltipStyle;
    backgroundColor?: string;
    className?: string;
    children: React.ReactNode;
}
