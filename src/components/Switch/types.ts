export type SwitchType = "main" | "inline";
export interface SwitchProps {
    label: string;
    type: SwitchType;
    name: string;
    defaultChecked?: boolean;
    noLabel?: boolean;
    backgroundColor?: string;
    checked?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
