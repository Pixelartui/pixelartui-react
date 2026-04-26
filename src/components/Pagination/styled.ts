import Styled from "styled-components";

export const StyledPaginationContainer = Styled.nav`
    display: flex;
    align-items: center;
    gap: 4px;
    font-family: 'Pixelify Sans', cursive;
`;

export const StyledPageButton = Styled.button<{
    $isActive?: boolean;
    $backgroundColor?: string;
}>`
    min-width: 32px;
    height: 32px;
    padding: 4px 8px;
    border: 2px solid ${(props) => props.theme.general.color.dark};
    background-color: ${(props) => {
        if (props.$isActive) return props.$backgroundColor || props.theme.general.color.primary;
        return props.theme.general.color.white;
    }};
    color: ${(props) =>
        props.$isActive
            ? props.theme.general.color.fontLight
            : props.theme.general.color.font};
    font-family: 'Pixelify Sans', cursive;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    image-rendering: pixelated;
    transition: background-color 0.1s ease;

    &:hover:not(:disabled) {
        background-color: ${(props) =>
            props.$isActive
                ? props.$backgroundColor || props.theme.general.color.primary
                : props.theme.general.color.light};
    }

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
