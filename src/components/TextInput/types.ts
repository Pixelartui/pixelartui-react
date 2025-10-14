export type InputType = 'main' | 'inline';

export interface TextInputProps {
    inputName: string;
    type: InputType;
    textLabel?: string;
    placeholder?: string;
    backgroundColor?: string;
    noLabel?: boolean;
    error?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}