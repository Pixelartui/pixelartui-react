import { StyledPixelBoxStyle } from "../SharedComponent/StyledPixelBox/types";

export type TabsStyle = StyledPixelBoxStyle;

export interface TabItem {
    label: string;
    content: React.ReactNode;
    disabled?: boolean;
}

export interface TabsProps {
    tabs: TabItem[];
    defaultActiveIndex?: number;
    activeIndex?: number;
    tabsStyle?: TabsStyle;
    backgroundColor?: string;
    className?: string;
    onChange?: (index: number) => void;
}
