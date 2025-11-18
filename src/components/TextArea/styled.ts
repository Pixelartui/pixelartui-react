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

export const StyledTextAreaContainer = Styled(StyledContainer)<{
    $fullwidth?: boolean;
}>`
    flex-direction: column;
    width: ${(props) => (props.$fullwidth ? "100%" : "fit-content")};

    .cp-pixel-box-outer,
    .cp-pixel-box-content-inner {
        width: ${(props) => (props.$fullwidth ? "100%" : "auto")};
        height: auto;
    }
`;

export const StyledTextArea = Styled.textarea<{
    $backgroundColor?: string;
    $disabled?: boolean;
    $width?: string;
    $height?: string;
    $fullwidth?: boolean;
}>`
    width: ${(props) =>
        props.$fullwidth
            ? "100%"
            : props.$width
            ? props.$width
            : props.theme.textArea.size.free?.width};
    height: ${(props) =>
        props.$height ? props.$height : props.theme.textArea.size.free?.height};
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
            props.theme.textInput.color.main?.normal?.font.bright,
            props.theme.textInput.color.main?.normal?.font.dark
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
                props.theme.textInput.color.main?.normal?.font.bright,
                props.theme.textInput.color.main?.normal?.font.dark
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
