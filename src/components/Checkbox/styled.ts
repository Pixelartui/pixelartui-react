import Styled from "styled-components";
import { StyledContainer } from "../SharedComponent/StyledContainer";
import { CheckboxType } from "./types";

export const StyledCheckboxContainer = Styled(StyledContainer)<{
    $type?: CheckboxType;
}>`
    flex-direction: ${(props) => (props.$type === "main" ? "column" : "row")};
    align-items: ${(props) => (props.$type === "inline" ? "center" : "flex-start")};
    gap: ${(props) => (props.$type === "inline" ? "8px" : "4px")};
`;

export const StyledCheckboxWrapper = Styled.div<{
    $isChecked?: boolean;
    $backgroundColor?: string;
    $disabled?: boolean;
}>`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
    opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
`;

export const StyledCheckbox = Styled.input`
    position: absolute;
    opacity: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    margin: 0;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export const StyledCheckmark = Styled.div<{
    $isChecked?: boolean;
    $backgroundColor?: string;
}>`
    width: 12px;
    height: 8px;
    border-left: 3px solid ${(props) =>
        props.$backgroundColor
            ? props.$backgroundColor
            : props.theme.general.color.primary};
    border-bottom: 3px solid ${(props) =>
        props.$backgroundColor
            ? props.$backgroundColor
            : props.theme.general.color.primary};
    transform: rotate(-45deg) translateY(-2px);
    opacity: ${(props) => (props.$isChecked ? 1 : 0)};
    transition: opacity 0.1s ease;
`;
