export type ButtonSize = "small" | "medium" | "large";
export type ButtonType = "main" | "outline";

export interface ButtonProps {
    text: string;
    buttonSize: ButtonSize;
    buttonType: ButtonType;
    fullwidth?: boolean;
    round?: boolean;
}