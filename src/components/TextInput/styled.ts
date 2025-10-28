import Styled, { DefaultTheme } from "styled-components";
import { InputType } from "./types";
import { getContrastColor } from "../../Theme/helper";
import { StyledContainer } from "../SharedComponent/StyledContainer";

const handleInputBackgroundColor = (
    backgroundColor: string | undefined,
    disabled: boolean | undefined,
    theme: DefaultTheme
) => {
    if (disabled) {
        return theme.general.color.disabled;
    }

    if (backgroundColor) {
        return backgroundColor;
    }

    return theme.general.color.white;
};

const handleFontColor = (
    bgColor: string | undefined,
    darkColor: string | undefined,
    brightColor: string | undefined
) => {
    if (!bgColor || !darkColor || !brightColor) return;

    return getContrastColor(bgColor, darkColor, brightColor);
};

export const StyledTextInputContainer = Styled(StyledContainer)`
    flex-direction: column;
`;

export const StyledInput = Styled.input<{
    $type?: InputType;
    $backgroundColor?: string;
    $disabled?: boolean;
}>`
    font: inherit;
    border: none;
    background: ${(props) =>
        handleInputBackgroundColor(
            props.$backgroundColor,
            props.disabled,
            props.theme
        )};
    height: ${(props) => props.theme.textInput.size.free?.height};
    width: ${(props) => props.theme.textInput.size.free?.width};
    color: ${(props) =>
        handleFontColor(
            props.$backgroundColor
                ? props.$backgroundColor
                : props.theme.general.color.white,
            props.theme.textInput.color.main?.normal?.font.dark,
            props.theme.textInput.color.main?.normal?.font.bright
        )};
    cursor: ${(props) => (props.$disabled ? "not-allowed" : "")};

    &:focus {
        outline-width: 0;
    }

    &::placeholder {
        color: ${(props) =>
            handleFontColor(
                props.$backgroundColor
                    ? props.$backgroundColor
                    : props.theme.general.color.white,
                props.theme.textInput.color.main?.normal?.font.dark,
                props.theme.textInput.color.main?.normal?.font.bright
            )};
        font-style: italic;
    }
`;

export const StyledTextInputLabel = Styled.label<{
    $text?: string;
}>`
    display: flex;
    align-items: center;
    padding: 5px;
`;

export const StyledTextInputHelperTextWrapper = Styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

export const StyledTextInputHelperText = Styled.div`
    display: flex;
    font-size: 12px;
    color: red;
`;

export const StyledTextInputWrapper = Styled.div<{
    $type?: InputType;
}>`
    display: flex;
    flex-direction: ${(props) => (props.$type === "main" ? "column" : "row")};
`;
