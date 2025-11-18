import { StyledPixelBoxStyle } from "../SharedComponent/StyledPixelBox/types";

export type InputType = "main" | "inline";
export type InputStyle = StyledPixelBoxStyle;

export interface TextInputProps {
    inputName: string;
    type: InputType;
    textLabel?: string;
    placeholder?: string;
    backgroundColor?: string;
    noLabel?: boolean;
    error?: boolean;
    helperText?: string;
    disabled?: boolean;
    value?: string;
    className?: string;
    inputStyle?: InputStyle;
    width?: string;
    height?: string;
    fullwidth?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
