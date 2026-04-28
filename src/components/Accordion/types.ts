import { StyledPixelBoxStyle } from "../SharedComponent/StyledPixelBox/types";

export type AccordionStyle = StyledPixelBoxStyle;

export interface AccordionItem {
    title: string;
    content: React.ReactNode;
    disabled?: boolean;
}

export interface AccordionProps {
    items: AccordionItem[];
    allowMultiple?: boolean;
    defaultOpenIndexes?: number[];
    accordionStyle?: AccordionStyle;
    backgroundColor?: string;
    className?: string;
    onChange?: (openIndexes: number[]) => void;
}
