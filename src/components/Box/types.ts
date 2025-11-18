import { ReactNode } from "react";
import { StyledPixelBoxStyle } from "../SharedComponent/StyledPixelBox/types";

export type BoxStyle = StyledPixelBoxStyle;
export interface BoxProps {
    children: ReactNode;
    backgroundColor?: string;
    className?: string;
    boxStyle?: BoxStyle;
    width?: string;
    height?: string;
    fullwidth?: boolean;
}
