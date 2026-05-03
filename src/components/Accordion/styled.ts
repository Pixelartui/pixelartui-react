import Styled from "styled-components";

export const StyledAccordionContainer = Styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid ${(props) => props.theme.general.color.dark};
    font-family: 'Pixelify Sans', cursive;
    image-rendering: pixelated;
    overflow: hidden;
`;

export const StyledAccordionItem = Styled.div`
    &:not(:last-child) {
        border-bottom: 2px solid ${(props) => props.theme.general.color.dark};
    }
`;

export const StyledAccordionHeader = Styled.button<{
    $isOpen: boolean;
    $disabled?: boolean;
    $backgroundColor?: string;
}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 12px 16px;
    border: none;
    background-color: ${(props) =>
        props.$backgroundColor || props.theme.general.color.white};
    color: ${(props) =>
        props.$disabled
            ? props.theme.general.color.fontDisabled
            : props.theme.general.color.font};
    font-family: 'Pixelify Sans', cursive;
    font-size: 16px;
    font-weight: bold;
    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
    text-align: left;

    &:hover {
        opacity: ${(props) => (props.$disabled ? 1 : 0.8)};
    }
`;

export const StyledAccordionIcon = Styled.span<{
    $isOpen: boolean;
}>`
    font-size: 14px;
    transition: transform 0.2s ease;
    transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0)")};
`;

export const StyledAccordionPanel = Styled.div<{
    $isOpen: boolean;
}>`
    display: ${(props) => (props.$isOpen ? "block" : "none")};
    padding: 12px 16px;
    color: ${(props) => props.theme.general.color.font};
    border-top: 1px solid ${(props) => props.theme.general.color.disabled};
`;
