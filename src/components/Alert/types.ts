import { StyledPixelBoxStyle } from "../SharedComponent/StyledPixelBox/types";

export type AlertVariant = "success" | "error" | "warning" | "info";
export type AlertStyle = StyledPixelBoxStyle;

export interface AlertProps {
    message: string;
    variant?: AlertVariant;
    title?: string;
    dismissible?: boolean;
    alertStyle?: AlertStyle;
    className?: string;
    onDismiss?: () => void;
}
