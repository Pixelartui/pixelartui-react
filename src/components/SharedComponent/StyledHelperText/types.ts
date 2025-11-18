import { StyledPixelBoxStyle } from "../StyledPixelBox/types";

export type StyledHelperTextStyle = StyledPixelBoxStyle;
export interface StyledHelperTextProps {
    style?: StyledHelperTextStyle;
    error?: boolean;
    helperText?: string;
}
