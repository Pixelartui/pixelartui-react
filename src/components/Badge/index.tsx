import React from "react";
import { StyledPixelBox } from "../SharedComponent/StyledPixelBox";
import { BadgeProps } from "./types";
import {
    StyledBadgeWrapper,
    StyledBadgeText,
    StyledDismissButton,
} from "./styled";
import { theme } from "../../Theme";

export const Badge: React.FC<BadgeProps> = ({
    text,
    size = "medium",
    variant = "primary",
    badgeStyle = "dark",
    dismissible = false,
    onDismiss,
    className,
}) => {
    const getVariantColor = () => {
        switch (variant) {
            case "success":
                return theme.general.color.success;
            case "error":
                return theme.general.color.error;
            case "warning":
                return theme.general.color.warning;
            case "info":
                return theme.general.color.info;
            default:
                return theme.general.color.primary;
        }
    };

    return (
        <StyledBadgeWrapper
            $size={size}
            className={`cp-badge ${className || ""}`}
            data-testid="qa-badge"
        >
            <StyledPixelBox
                className="cp-badge-box"
                style={badgeStyle}
                backgroundColor={getVariantColor()}
                round
            >
                <StyledBadgeText
                    $size={size}
                    $variant={variant}
                    className="cp-badge-text"
                >
                    {text}
                </StyledBadgeText>
            </StyledPixelBox>
            {dismissible && (
                <StyledDismissButton
                    $size={size}
                    onClick={onDismiss}
                    className="cp-badge-dismiss"
                    aria-label="Dismiss badge"
                >
                    ×
                </StyledDismissButton>
            )}
        </StyledBadgeWrapper>
    );
};
