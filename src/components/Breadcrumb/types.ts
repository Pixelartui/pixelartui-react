import { StyledPixelBoxStyle } from "../SharedComponent/StyledPixelBox/types";

export type BreadcrumbStyle = StyledPixelBoxStyle;

export interface BreadcrumbItem {
    label: string;
    href?: string;
    onClick?: () => void;
}

export interface BreadcrumbProps {
    items: BreadcrumbItem[];
    separator?: string;
    breadcrumbStyle?: BreadcrumbStyle;
    className?: string;
}
