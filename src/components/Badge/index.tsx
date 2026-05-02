import React from "react";
import { StyledPixelBox } from "../SharedComponent/StyledPixelBox";
import { StyledContainer } from "../SharedComponent/StyledContainer";
import { BadgeProps } from "./types";
import {
    StyledBadgeWrapper,
    StyledBadgeText,
    StyledDismissButton,
} from "./styled";
import { theme } from "../../Theme";

const variantColorMap: Record<string, string> = {
    success: "#10B981",
    error: "#EF4444",
    warning: "#F59E0B",
    info: "#3B82F6",
};

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
        return variantColorMap[variant] || theme.general.color.primary;
    };

    return (
        <StyledContainer testId="qa-badge" className={`cp-badge ${className || ""}`}>
            <StyledBadgeWrapper $size={size}>
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
        </StyledContainer>
    );
};
