import Styled, { DefaultTheme } from "styled-components";
import { StyledContainer } from "../SharedComponent/StyledContainer";
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

export const StyledChatPromptContainer = Styled(StyledContainer)<{
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

export const StyledChatPromptInner = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    width: 100%;
`;

export const StyledChatPromptTextArea = Styled.textarea<{
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
            : "400px"};
    height: ${(props) => (props.$height ? props.$height : "60px")};
    min-height: 40px;
    max-height: 200px;
    font: inherit;
    border: none;
    resize: none;
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

export const StyledSendButton = Styled.button<{
    $disabled?: boolean;
}>`
    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
    background: ${(props) =>
        props.$disabled
            ? props.theme.general.color.disabled
            : props.theme.general.color.primary};
    color: ${(props) => props.theme.general.color.fontLight};
    border: none;
    font-family: inherit;
    font-size: 20px;
    padding: 8px 16px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;

    &:hover {
        background: ${(props) =>
            props.$disabled
                ? props.theme.general.color.disabled
                : props.theme.general.color.secondary};
    }
`;
