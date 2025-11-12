import Styled, { DefaultTheme } from "styled-components";
import { ButtonSize, ButtonType } from "./types";
import { getContrastColor, handleCustomColor } from "../../Theme/helper";
import { FontColor } from "../../Theme/styled";
import { StyledPixelBox } from "../SharedComponent/StyledPixelBox";

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
    return getContrastColor(backgroundColor, color.bright, color.dark);
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

export const StyledButtonBox = Styled(StyledPixelBox)<{
    $size?: ButtonSize;
}>`
    min-height: ${(props) =>
        handleButtonSize(props.$size || "medium", props.theme)?.height};
    min-width: ${(props) =>
        handleButtonSize(props.$size || "medium", props.theme)?.width};
`;

export const StyledTextContainerSecondLayer = Styled.button<{
    $type?: ButtonType;
    $backgroundColor?: string;
    $disabled?: boolean;
    $size?: ButtonSize;
}>`
    cursor: pointer;
    color: ${(props) =>
        handleFontColor(
            props.$backgroundColor
                ? handleCustomButtonColor(props.$backgroundColor)
                      ?.customPrimaryColor
                : handleButtonColour(props.$type || "main", props.theme)
                      ?.primary,
            props.$disabled
                ? {
                      dark: props.theme.general.color.fontLight,
                      bright: props.theme.general.color.fontLight,
                  }
                : handleButtonColour(props.$type || "main", props.theme)?.font
        )};
    font-family: inherit;
    font-size: ${(props) =>
        handleButtonSize(props.$size || "medium", props.theme)?.fontSize};
    border: none;
    width: 100%;
    height: 100%;
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

    &:hover {
            background:  ${(props) =>
                handleSecondLayerBackgroundHover(
                    props.$disabled,
                    props.theme,
                    props.$backgroundColor,
                    props.$type
                )};
        }
`;
