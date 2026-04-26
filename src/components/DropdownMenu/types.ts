import { StyledPixelBoxStyle } from "../SharedComponent/StyledPixelBox/types";

export type DropdownMenuStyle = StyledPixelBoxStyle;

export interface DropdownMenuItem {
    label: string;
    value: string;
    disabled?: boolean;
    onClick?: (value: string) => void;
}

export interface DropdownMenuProps {
    items: DropdownMenuItem[];
    trigger: React.ReactNode;
    dropdownStyle?: DropdownMenuStyle;
    backgroundColor?: string;
    className?: string;
    onSelect?: (value: string) => void;
}
