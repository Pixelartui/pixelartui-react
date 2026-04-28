import Styled from "styled-components";
import { AlertVariant } from "./types";

const variantColorMap: Record<AlertVariant, string> = {
    success: "#10B981",
    error: "#EF4444",
    warning: "#F59E0B",
    info: "#3B82F6",
};

export const StyledAlertContainer = Styled.div<{
    $variant: AlertVariant;
}>`
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 12px 16px;
    border: 2px solid ${(props) => variantColorMap[props.$variant]};
    background-color: ${(props) => variantColorMap[props.$variant]}20;
    image-rendering: pixelated;
    font-family: 'Pixelify Sans', cursive;
`;

export const StyledAlertContent = Styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const StyledAlertTitle = Styled.div<{
    $variant: AlertVariant;
}>`
    font-size: 16px;
    font-weight: bold;
    color: ${(props) => variantColorMap[props.$variant]};
`;

export const StyledAlertMessage = Styled.div`
    font-size: 14px;
    color: ${(props) => props.theme.general.color.font};
`;

export const StyledAlertDismiss = Styled.button<{
    $variant: AlertVariant;
}>`
    background: none;
    border: none;
    padding: 0;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    color: ${(props) => variantColorMap[props.$variant]};
    line-height: 1;

    &:hover {
        opacity: 0.7;
    }
`;
