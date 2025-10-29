import React from "react";
import { ThemeProvider } from "styled-components";
import {
    StyledButtonContainer,
    StyledButtonSideMainFirst,
    StyledButtonSideContainer,
    StyledButtonSideRoundFirst,
    StyledButtonSideRoundInnerLayer,
    StyledButtonSideRoundSecond,
    StyledButtonSideRoundSecondRightSide,
    StyledButtonSideRoundThird,
    StyledTextContainer,
    StyledTextContainerSecondLayer,
    StyledButtonSideMainSecond,
    StyledButtonSideMainSecondInner,
    StyledButtonSideMainSecondInnerRight,
} from "./styled";
import { ButtonProps } from "./types";
import { GlobalStyle, theme } from "../../Theme";

export const Button: React.FC<ButtonProps> = ({
    text,
    buttonSize,
    buttonType,
    fullwidth,
    round,
    backgroundColor,
    disabled,
    onClick,
    ...props
}) => {
    const handleOnClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (disabled) return;

        onClick(event);
    };
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <StyledButtonContainer
                className="cp-button-container"
                onClick={handleOnClick}
                $fullwidth={fullwidth}
                $disabled={disabled}
                {...props}
            >
                <StyledButtonSideContainer
                    className="cp-button-side-container"
                    $round={round}
                >
                    {round ? (
                        <>
                            <StyledButtonSideRoundFirst
                                className="cp-button-side-round-first"
                                $type={buttonType}
                            />
                            <StyledButtonSideRoundSecond
                                className="cp-button-side-round-second"
                                $type={buttonType}
                                $backgroundColor={backgroundColor}
                                $disabled={disabled}
                            >
                                <StyledButtonSideRoundInnerLayer
                                    className="cp-button-side-roun-inner-layer"
                                    $type={buttonType}
                                    $backgroundColor={backgroundColor}
                                    $disabled={disabled}
                                />
                            </StyledButtonSideRoundSecond>
                            <StyledButtonSideRoundThird
                                className="cp-button-side-round-third"
                                $type={buttonType}
                                $backgroundColor={backgroundColor}
                                $disabled={disabled}
                            >
                                <StyledButtonSideRoundInnerLayer
                                    className="cp-button-side-round-inner-layer"
                                    $type={buttonType}
                                    $backgroundColor={backgroundColor}
                                    $disabled={disabled}
                                />
                            </StyledButtonSideRoundThird>
                        </>
                    ) : (
                        <>
                            <StyledButtonSideMainFirst
                                className="cp-button-side-main-first"
                                $type={buttonType}
                            />
                            <StyledButtonSideMainSecond
                                className="cp-button-side-main-second"
                                $type={buttonType}
                                $size={buttonSize}
                            >
                                <StyledButtonSideMainSecondInner
                                    className="cp-button-side-main-second-inner"
                                    $type={buttonType}
                                    $backgroundColor={backgroundColor}
                                    $disabled={disabled}
                                />
                            </StyledButtonSideMainSecond>
                        </>
                    )}
                </StyledButtonSideContainer>
                <StyledTextContainer
                    className="cp-button-text-container"
                    $size={buttonSize}
                    $type={buttonType}
                    $fullwidth={fullwidth || false}
                    $backgroundColor={backgroundColor}
                    $disabled={disabled}
                >
                    <StyledTextContainerSecondLayer
                        className="cp-button-text-container-second-layer"
                        $type={buttonType}
                        $backgroundColor={backgroundColor}
                        $disabled={disabled}
                    >
                        {text}
                    </StyledTextContainerSecondLayer>
                </StyledTextContainer>
                <StyledButtonSideContainer
                    className="cp-button-side-container"
                    $round={round}
                >
                    {round ? (
                        <>
                            <StyledButtonSideRoundThird
                                className="cp-button-side-round-third"
                                $type={buttonType}
                                $backgroundColor={backgroundColor}
                                $disabled={disabled}
                            >
                                <StyledButtonSideRoundInnerLayer
                                    className="cp-button-side-round-inner-layer"
                                    $type={buttonType}
                                    $backgroundColor={backgroundColor}
                                    $disabled={disabled}
                                />
                            </StyledButtonSideRoundThird>
                            <StyledButtonSideRoundSecondRightSide
                                className="cp-button-side-round-second-right-side"
                                $type={buttonType}
                                $backgroundColor={backgroundColor}
                                $disabled={disabled}
                            >
                                <StyledButtonSideRoundInnerLayer
                                    className="cp-button-side-round-inner-layer"
                                    $type={buttonType}
                                    $backgroundColor={backgroundColor}
                                    $disabled={disabled}
                                />
                            </StyledButtonSideRoundSecondRightSide>
                            <StyledButtonSideRoundFirst
                                className="cp-button-side-round-first"
                                $type={buttonType}
                            />
                        </>
                    ) : (
                        <>
                            <StyledButtonSideMainSecond
                                $type={buttonType}
                                $size={buttonSize}
                            >
                                <StyledButtonSideMainSecondInnerRight
                                    className="cp-button-side-main-second-inner-right"
                                    $type={buttonType}
                                    $backgroundColor={backgroundColor}
                                    $disabled={disabled}
                                />
                            </StyledButtonSideMainSecond>
                            <StyledButtonSideMainFirst
                                className="cp-button-side-main-first"
                                $type={buttonType}
                            />
                        </>
                    )}
                </StyledButtonSideContainer>
            </StyledButtonContainer>
        </ThemeProvider>
    );
};
