import Styled, { DefaultTheme } from "styled-components";
import { handleCustomColor } from "../../Theme/helper";

const handleActiveBackground = (
    backgroundColor: string | undefined,
    theme: DefaultTheme
) => {
    if (backgroundColor) {
        return handleCustomColor(backgroundColor).customPrimaryColor;
    }
    return theme.general.color.primary;
};

export const StyledPaginationContainer = Styled.nav`
    display: flex;
    align-items: center;
    gap: 4px;
    font-family: 'Pixelify Sans', cursive;
`;

export const StyledPageButtonContent = Styled.button<{
    $isActive?: boolean;
    $backgroundColor?: string;
}>`
    border: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    font-family: 'Pixelify Sans', cursive;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    background: ${(props) =>
        props.$isActive
            ? handleActiveBackground(props.$backgroundColor, props.theme)
            : "transparent"};
    color: ${(props) =>
        props.$isActive
            ? props.theme.general.color.fontLight
            : props.theme.general.color.font};

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

export const StyledEllipsis = Styled.span`
    min-width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: ${(props) => props.theme.general.color.font};
    user-select: none;
`;
