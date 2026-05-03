import { StyledPixelBoxStyle } from "../SharedComponent/StyledPixelBox/types";

export type CardStyle = StyledPixelBoxStyle;

export interface CardProps {
    title?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    cardStyle?: CardStyle;
    backgroundColor?: string;
    className?: string;
}
