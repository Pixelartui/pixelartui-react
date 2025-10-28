import Styled, { DefaultTheme } from "styled-components";
import { StyledContainer } from "../SharedComponent/StyledContainer";
import { TextAreaType } from "./types";
import { getContrastColor } from "../../Theme/helper";

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

export const StyledTextAreaContainer = Styled(StyledContainer)`
    flex-direction: column;
`;

export const StyledTextArea = Styled.textarea<{
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

export const StyledTextAreaWrapper = Styled.div<{
    $type: TextAreaType;
}>`
    display: flex;
    flex-direction: ${(props) => (props.$type === "main" ? "column" : "row")};
`;
export const StyledTextAreaHelperTextWrapper = Styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const StyledTextAreaHelperText = Styled.div<{
    $error?: boolean;
    $backgroundColor?: string;
}>`
    color: ${(props) =>
        props.$error ? "red" : props.theme.general.color.font};
`;
