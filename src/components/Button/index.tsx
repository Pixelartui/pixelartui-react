import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import {
    StyledButtonContainer,
    StyledTextContainerSecondLayer,
} from "./styled";
import { ButtonProps, ButtonSize } from "./types";
import { GlobalStyle, theme } from "../../Theme";
import { StyledPixelBox } from "../SharedComponent/StyledPixelBox";

export const Button: React.FC<ButtonProps> = ({
    text,
    buttonSize,
    buttonType,
    fullwidth,
    round,
    backgroundColor,
    disabled,
    onClick,
    width,
    height,
    ...props
}) => {
    const handleOnClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (disabled) return;

        onClick(event);
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

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <StyledButtonContainer
                className="cp-button-container"
                onClick={handleOnClick}
                $disabled={disabled}
                {...props}
            >
                <StyledPixelBox
                    disabled={disabled}
                    backgroundColor={backgroundColor}
                    round={round}
                    minHeight={handleButtonSize(buttonSize, theme)?.height}
                    minWidth={handleButtonSize(buttonSize, theme)?.width}
                    width={width}
                    height={height}
                    fullwidth={fullwidth}
                >
                    <StyledTextContainerSecondLayer
                        className="cp-button-text-container-second-layer"
                        $type={buttonType}
                        $backgroundColor={backgroundColor}
                        $disabled={disabled}
                        $size={buttonSize}
                    >
                        {text}
                    </StyledTextContainerSecondLayer>
                </StyledPixelBox>
            </StyledButtonContainer>
        </ThemeProvider>
    );
};
