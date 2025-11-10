export type TextAreaType = "main" | "inline";
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
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
