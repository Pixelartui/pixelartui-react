import { RefObject } from "react";

export interface StyledContainerProps {
    children: React.ReactNode;
    testId: string;
    className?: string;
    fullwidth?: boolean;
    ref?: RefObject<HTMLDivElement | null>;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
