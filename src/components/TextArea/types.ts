import { StyledPixelBoxStyle } from "../SharedComponent/StyledPixelBox/types";

export type TextAreaType = "main" | "inline";
export type TextAreaStyle = StyledPixelBoxStyle;
export interface TextAreaProps {
    inputName: string;
    placeholder?: string;
    backgroundColor?: string;
    error?: boolean;
    helperText?: string;
    disabled?: boolean;
    label?: string;
    noLabel?: boolean;
    type: TextAreaType;
    value?: string;
    className?: string;
    textAreaStyle?: TextAreaStyle;
    width?: string;
    height?: string;
    fullwidth?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
