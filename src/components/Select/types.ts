import { ReactNode } from "react";

export interface SelectOption {
    label: string | ReactNode;
    value: string;
}

export interface SelectProps {
   type: 'main' | 'inline';
   backgroundColor?: string;
   options: SelectOption[];
   display: string;
   selectName: string;
   selectLabel: string;
   noLabel?: boolean;
   disabled?: boolean;
   error?: boolean;
   helperText?: FunctionStringCallback;
   onChange?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}