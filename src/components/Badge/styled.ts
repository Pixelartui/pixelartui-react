import Styled from "styled-components";
import { BadgeSize, BadgeVariant } from "./types";

const variantColorMap: Record<string, string> = {
    success: "#10B981",
    error: "#EF4444",
    warning: "#F59E0B",
    info: "#3B82F6",
};

export const StyledBadgeWrapper = Styled.div<{
    $size?: BadgeSize;
}>`
    display: inline-flex;
    align-items: center;
    gap: ${(props) =>
        props.$size === "small" ? "4px" : props.$size === "large" ? "8px" : "6px"};
`;

export const StyledBadgeText = Styled.span<{
    $size?: BadgeSize;
    $variant?: BadgeVariant;
}>`
    font-size: ${(props) =>
        props.$size === "small" ? "10px" : props.$size === "large" ? "14px" : "12px"};
    font-weight: 600;
    padding: ${(props) =>
        props.$size === "small" ? "2px 6px" : props.$size === "large" ? "4px 10px" : "3px 8px"};
    color: ${(props) =>
        (props.$variant && variantColorMap[props.$variant]) ||
        props.theme.general.color.primary};
`;

export const StyledDismissButton = Styled.button<{
    $size?: BadgeSize;
}>`
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    font-size: ${(props) =>
        props.$size === "small" ? "12px" : props.$size === "large" ? "16px" : "14px"};
    line-height: 1;
    color: inherit;
    opacity: 0.7;
    transition: opacity 0.1s ease;

    &:hover {
        opacity: 1;
    }

    &:active {
        transform: scale(0.95);
    }
`;
