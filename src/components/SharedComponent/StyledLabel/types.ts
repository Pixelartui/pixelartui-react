import { StyledPixelBoxStyle } from "../StyledPixelBox/types";

export type StyledLabelStyle = StyledPixelBoxStyle;
export interface StyledLabelProps {
    text: string;
    noLabel?: boolean;
    name: string;
    style?: StyledLabelStyle;
}
