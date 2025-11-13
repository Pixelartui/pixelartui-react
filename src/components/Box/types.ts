import { ReactNode } from "react";
import { StyledPixelBoxType } from "../SharedComponent/StyledPixelBox/types";

export type BoxStyle = StyledPixelBoxType;
export interface BoxProps {
    children: ReactNode;
    backgroundColor?: string;
    className?: string;
    boxStyle?: BoxStyle;
    width?: string;
    height?: string;
    fullwidth?: boolean;
}
