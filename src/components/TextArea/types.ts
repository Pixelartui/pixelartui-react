export interface TextAreaProps {
    inputName: string;
    placeholder?: string;
    backgroundColor?: string;
    error?: boolean;
    helperText?: string;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}