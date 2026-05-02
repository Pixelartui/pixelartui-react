import { StyledPixelBoxStyle } from "../SharedComponent/StyledPixelBox/types";

export type BadgeSize = "small" | "medium" | "large";
export type BadgeStyle = StyledPixelBoxStyle;
export type BadgeVariant = "primary" | "success" | "error" | "warning" | "info";

export interface BadgeProps {
    text: string;
    size?: BadgeSize;
    variant?: BadgeVariant;
    badgeStyle?: BadgeStyle;
    dismissible?: boolean;
    onDismiss?: () => void;
    className?: string;
}
