import Styled from "styled-components";

export const StyledDropdownContainer = Styled.div`
    position: relative;
    display: inline-block;
`;

export const StyledDropdownTrigger = Styled.div`
    cursor: pointer;
`;

export const StyledDropdownList = Styled.ul<{
    $isOpen?: boolean;
}>`
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    min-width: 160px;
    padding: 0;
    margin: 0;
    list-style: none;
    background-color: ${(props) => props.theme.general.color.white};
    border: 2px solid ${(props) => props.theme.general.color.dark};
    image-rendering: pixelated;
    z-index: 1000;
    display: ${(props) => (props.$isOpen ? "block" : "none")};
    box-shadow: 2px 2px 0 0 ${(props) => props.theme.general.color.black}40;
`;

export const StyledDropdownItem = Styled.li<{
    $disabled?: boolean;
    $backgroundColor?: string;
}>`
    padding: 8px 12px;
    font-family: 'Pixelify Sans', cursive;
    font-size: 14px;
    color: ${(props) =>
        props.$disabled
            ? props.theme.general.color.fontDisabled
            : props.theme.general.color.font};
    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
    opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
    transition: background-color 0.1s ease;

    &:hover {
        background-color: ${(props) => {
            if (props.$disabled) return "transparent";
            return props.$backgroundColor || props.theme.general.color.light;
        }};
    }
`;
