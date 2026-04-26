import Styled from "styled-components";

export const StyledTabsContainer = Styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const StyledTabList = Styled.div`
    display: flex;
    gap: 0;
    border-bottom: 2px solid ${(props) => props.theme.general.color.dark};
`;

export const StyledTab = Styled.button<{
    $isActive?: boolean;
    $backgroundColor?: string;
    $disabled?: boolean;
}>`
    padding: 8px 16px;
    font-family: 'Pixelify Sans', cursive;
    font-size: 16px;
    border: 2px solid ${(props) => props.theme.general.color.dark};
    border-bottom: ${(props) => (props.$isActive ? "none" : `2px solid ${props.theme.general.color.dark}`)};
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
    margin-bottom: ${(props) => (props.$isActive ? "-2px" : "0")};
    image-rendering: pixelated;
    position: relative;
    transition: background-color 0.1s ease;

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
    border: 2px solid ${(props) => props.theme.general.color.dark};
    border-top: none;
    image-rendering: pixelated;
`;
