import Styled, { DefaultTheme } from "styled-components";
import { ButtonSize, ButtonType } from "./types";
import {
    adjust,
    getContrastColor,
    handleCustomColor,
} from "../../Theme/helper";
import { FontColor } from "../../Theme/styled";

const handleButtonSize = (size: ButtonSize, theme: DefaultTheme) => {
    switch (size) {
        case "small":
            return theme.button.size.small;
        case "medium":
            return theme.button.size.medium;
        case "large":
            return theme.button.size.large;
        default:
            return theme.button.size.medium;
    }
};

const handleButtonColour = (type: ButtonType, theme: DefaultTheme) => {
    switch (type) {
        case "main":
            return theme.button.color.main?.normal;
        case "outline":
            return theme.button.color.outline?.normal;
        default:
            return theme.button.color.main?.normal;
    }
};

const handleHoverColour = (type: ButtonType, theme: DefaultTheme) => {
    switch (type) {
        case "main":
            return theme.button.color.main?.hover;
        case "outline":
            return theme.button.color.outline?.hover;
        default:
            return theme.button.color.main?.hover;
    }
};

const handleCustomButtonColor = (customColor: string | undefined) => {
    if (!customColor) return;
    return handleCustomColor(customColor);
};

const handleFontColor = (
    backgroundColor: string | undefined,
    color: FontColor | undefined
) => {
    if (!backgroundColor || !color) return;
    return getContrastColor(backgroundColor, color.dark, color.bright);
};

const handleSecondLayerBackground = (
    disabled: boolean | undefined,
    theme: DefaultTheme,
    backgroundColor: string | undefined,
    type: ButtonType | undefined
) => {
    if (disabled) {
        return theme.general.color.disabled;
    }

    if (backgroundColor) {
        return type === "outline"
            ? "transparent"
            : handleCustomButtonColor(backgroundColor)?.customPrimaryColor;
    }

    return handleButtonColour(type || "main", theme)?.primary;
};

const handleSecondLayerBackgroundHover = (
    disabled: boolean | undefined,
    theme: DefaultTheme,
    backgroundColor: string | undefined,
    type: ButtonType | undefined
) => {
    if (disabled) {
        return theme.general.color.disabled;
    }

    if (backgroundColor) {
        return handleCustomButtonColor(backgroundColor)?.customHover;
    }

    return handleHoverColour(type || "main", theme)?.primary;
};

const handleSecondLayerTopBorder = (
    disabled: boolean | undefined,
    theme: DefaultTheme,
    backgroundColor: string | undefined,
    type: ButtonType | undefined
) => {
    if (disabled) {
        return adjust(theme.general.color.disabled, 40);
    }

    if (backgroundColor) {
        return handleCustomButtonColor(backgroundColor)?.customSecondaryColor;
    }

    return handleButtonColour(type || "main", theme)?.secondary;
};

const handleSecondLayerBottomBorder = (
    disabled: boolean | undefined,
    theme: DefaultTheme,
    backgroundColor: string | undefined,
    type: ButtonType | undefined
) => {
    if (disabled) {
        return adjust(theme.general.color.disabled, -30);
    }

    if (backgroundColor) {
        return handleCustomButtonColor(backgroundColor)?.customTertiaryColor;
    }

    return handleButtonColour(type || "main", theme)?.tertiary;
};

export const StyledButtonContainer = Styled.div<{
    $fullwidth?: boolean;
    $disabled?: boolean;
}>`
    font-family: 'Pixelify Sans';
    display: flex;
    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
    width: ${(props) => (props.$fullwidth ? "width: 100%;" : "fit-content")};
`;

export const StyledButtonSideContainer = Styled.div<{
    $round?: boolean;
}>`
    display: flex;
    align-items: center;
`;

export const StyledTextContainer = Styled.div<{
    $size?: ButtonSize;
    $type?: ButtonType;
    $fullwidth?: boolean;
    $backgroundColor?: string;
}>`
    ${(props) => (props.$fullwidth ? "width: 100%;" : "")}
    display: flex;
    background: transparent;
    color: ${(props) =>
        handleFontColor(
            props.$backgroundColor
                ? handleCustomButtonColor(props.$backgroundColor)
                      ?.customPrimaryColor
                : handleButtonColour(props.$type || "main", props.theme)
                      ?.primary,
            handleButtonColour(props.$type || "main", props.theme)?.font
        )};

    min-width: ${(props) =>
        handleButtonSize(props.$size || "medium", props.theme)?.width};
    height: ${(props) =>
        handleButtonSize(props.$size || "medium", props.theme)?.height};
    font-size: ${(props) =>
        handleButtonSize(props.$size || "medium", props.theme)?.fontSize};
    border-top: 3px solid black;
    border-bottom: 3px solid black;
`;

export const StyledTextContainerSecondLayer = Styled.div<{
    $type?: ButtonType;
    $backgroundColor?: string;
    $disabled?: boolean;
}>`
    border-top: 3px solid ${(props) =>
        handleSecondLayerTopBorder(
            props.$disabled,
            props.theme,
            props.$backgroundColor,
            props.$type
        )};
    border-bottom: 3px solid ${(props) =>
        handleSecondLayerBottomBorder(
            props.$disabled,
            props.theme,
            props.$backgroundColor,
            props.$type
        )};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) =>
        handleSecondLayerBackground(
            props.$disabled,
            props.theme,
            props.$backgroundColor,
            props.$type
        )};

    ${StyledButtonContainer}:hover & {
            background:  ${(props) =>
                handleSecondLayerBackgroundHover(
                    props.$disabled,
                    props.theme,
                    props.$backgroundColor,
                    props.$type
                )};
        }
`;

export const StyledButtonSideMainFirst = Styled.div<{
    $type?: ButtonType;
    $backgroundColor?: string;
}>`
    background: ${(props) =>
        handleButtonColour(props.$type || "main", props.theme)?.border};
    width: 3px;
    height: calc(100% - 6px);
    display: flex;
        
`;

export const StyledButtonSideMainSecond = Styled.div<{
    $size?: ButtonSize;
    $type?: ButtonType;
}>`
    border-bottom: 3px solid ${(props) =>
        handleButtonColour(props.$type || "main", props.theme)?.border};
    border-top: 3px solid ${(props) =>
        handleButtonColour(props.$type || "main", props.theme)?.border};
    height: ${(props) =>
        handleButtonSize(props.$size || "medium", props.theme)?.height};
    display: flex;
    width: 3px;
`;

export const StyledButtonSideMainSecondInner = Styled.div<{
    $backgroundColor?: string;
    $type?: ButtonType;
    $disabled?: boolean;
}>`
    width: 100%;
    display: flex;
    background: ${(props) =>
        handleSecondLayerTopBorder(
            props.$disabled,
            props.theme,
            props.$backgroundColor,
            props.$type
        )};
    border-bottom: 3px solid ${(props) =>
        handleSecondLayerBottomBorder(
            props.$disabled,
            props.theme,
            props.$backgroundColor,
            props.$type
        )};
`;

export const StyledButtonSideMainSecondInnerRight = Styled.div<{
    $backgroundColor?: string;
    $type?: ButtonType;
    $disabled?: boolean;
}>`
    width: 100%;
    display: flex;
    background: ${(props) =>
        handleSecondLayerBottomBorder(
            props.$disabled,
            props.theme,
            props.$backgroundColor,
            props.$type
        )};
    border-top: 3px solid ${(props) =>
        handleSecondLayerTopBorder(
            props.$disabled,
            props.theme,
            props.$backgroundColor,
            props.$type
        )};
`;

export const StyledButtonSideRoundFirst = Styled.div<{
    $backgroundColor?: string;
    $type?: ButtonType;
}>`
    width: 3px;
    height: calc(100% - 18px);
    background: ${(props) =>
        handleButtonColour(props.$type || "main", props.theme)?.border};

`;

export const StyledButtonSideRoundSecond = Styled.div<{
    $backgroundColor?: string;
    $type?: ButtonType;
    $disabled?: boolean;
}>`
    width: 3px;
    display: flex;
    height: calc(100% - 18px);
    border-top: 3px solid ${(props) =>
        handleButtonColour(props.$type || "main", props.theme)?.border};
    border-bottom: 3px solid ${(props) =>
        handleButtonColour(props.$type || "main", props.theme)?.border};
    background: ${(props) =>
        handleSecondLayerTopBorder(
            props.$disabled,
            props.theme,
            props.$backgroundColor,
            props.$type
        )};

`;

export const StyledButtonSideRoundSecondRightSide = Styled.div<{
    $backgroundColor?: string;
    $type?: ButtonType;
    $disabled?: boolean;
}>`
    width: 3px;
    height: calc(100% - 18px);
    border-top: 3px solid ${(props) =>
        handleButtonColour(props.$type || "main", props.theme)?.border};
    border-bottom: 3px solid ${(props) =>
        handleButtonColour(props.$type || "main", props.theme)?.border};
    background: ${(props) =>
        handleSecondLayerBottomBorder(
            props.$disabled,
            props.theme,
            props.$backgroundColor,
            props.$type
        )};
`;

export const StyledButtonSideRoundThird = Styled.div<{
    $backgroundColor?: string;
    $type?: ButtonType;
    $disabled?: boolean;
}>`
    width: 3px;
    display: flex;
    height: calc(100% - 12px);
    border-top: 3px solid ${(props) =>
        handleButtonColour(props.$type || "main", props.theme)?.border};
    border-bottom: 3px solid ${(props) =>
        handleButtonColour(props.$type || "main", props.theme)?.border};
    background: ${(props) =>
        handleSecondLayerBackground(
            props.$disabled,
            props.theme,
            props.$backgroundColor,
            props.$type
        )};
        ${StyledButtonContainer}:hover & {
            background:  ${(props) =>
                handleSecondLayerBackgroundHover(
                    props.$disabled,
                    props.theme,
                    props.$backgroundColor,
                    props.$type
                )};
        }

`;

export const StyledButtonSideRoundInnerLayer = Styled.div<{
    $backgroundColor?: string;
    $type?: ButtonType;
    $disabled?: boolean;
}>`
    width: 100%;
    border-top: 3px solid ${(props) =>
        handleSecondLayerTopBorder(
            props.$disabled,
            props.theme,
            props.$backgroundColor,
            props.$type
        )};
    border-bottom: 3px solid ${(props) =>
        handleSecondLayerBottomBorder(
            props.$disabled,
            props.theme,
            props.$backgroundColor,
            props.$type
        )};
    display: flex;
`;
