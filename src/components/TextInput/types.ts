export type InputType = "main" | "inline";

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
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
