import Styled from "styled-components";

export const StyledTabsContainer = Styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const StyledTabList = Styled.div`
    display: flex;
    gap: 0;
    border-bottom: 3px solid ${(props) => props.theme.general.color.dark};
    align-items: flex-end;
`;

export const StyledTab = Styled.button<{
    $isActive?: boolean;
    $backgroundColor?: string;
    $disabled?: boolean;
}>`
    padding: 8px 16px;
    font-family: 'Pixelify Sans', cursive;
    font-size: 16px;
    border: 3px solid ${(props) => props.theme.general.color.dark};
    border-bottom: ${(props) => (props.$isActive ? "none" : `3px solid ${props.theme.general.color.dark}`)};
    background-color: ${(props) => {
        if (props.$disabled) return props.theme.general.color.disabled;
        if (props.$isActive) return props.$backgroundColor || props.theme.general.color.white;
        return props.theme.general.color.light;
    }};
    color: ${(props) => {
        if (props.$disabled) return props.theme.general.color.fontDisabled;
        return props.theme.general.color.font;
    }};
    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
    opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
    margin-bottom: ${(props) => (props.$isActive ? "-3px" : "0")};
    image-rendering: pixelated;
    position: relative;
    transition: background-color 0.1s ease;
    clip-path: polygon(
        0 6px,
        3px 6px,
        3px 3px,
        6px 3px,
        6px 0,
        calc(100% - 6px) 0,
        calc(100% - 6px) 3px,
        calc(100% - 3px) 3px,
        calc(100% - 3px) 6px,
        100% 6px,
        100% 100%,
        0 100%
    );

    &:hover {
        background-color: ${(props) => {
            if (props.$disabled) return props.theme.general.color.disabled;
            if (props.$isActive) return props.$backgroundColor || props.theme.general.color.white;
            return props.theme.general.color.white;
        }};
    }
`;

export const StyledTabPanel = Styled.div`
    padding: 16px;
    border: 3px solid ${(props) => props.theme.general.color.dark};
    border-top: none;
    image-rendering: pixelated;
`;
