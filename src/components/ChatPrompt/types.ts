import { StyledPixelBoxStyle } from "../SharedComponent/StyledPixelBox/types";

export type ChatPromptStyle = StyledPixelBoxStyle;
export interface ChatPromptProps {
    inputName: string;
    placeholder?: string;
    backgroundColor?: string;
    disabled?: boolean;
    value?: string;
    className?: string;
    chatPromptStyle?: ChatPromptStyle;
    width?: string;
    height?: string;
    fullwidth?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onSend?: (value: string) => void;
}
