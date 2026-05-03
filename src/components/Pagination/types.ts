import { StyledPixelBoxStyle } from "../SharedComponent/StyledPixelBox/types";

export type PaginationStyle = StyledPixelBoxStyle;

export interface PaginationProps {
    totalPages: number;
    currentPage?: number;
    defaultPage?: number;
    siblingCount?: number;
    paginationStyle?: PaginationStyle;
    backgroundColor?: string;
    className?: string;
    onChange?: (page: number) => void;
}
