import React from "react";
import { StyledButtonBox, StyledTextContainerSecondLayer } from "./styled";
import { ButtonProps } from "./types";
import { StyledContainer } from "../SharedComponent/StyledContainer";

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
    buttonStyle = "dark",
    ...props
}) => {
    const handleOnClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (disabled) return;

        onClick(event);
    };

    return (
        <StyledContainer
            testId="qa-button"
            className="cp-button-container"
            onClick={handleOnClick}
            {...props}
        >
            <StyledButtonBox
                $size={buttonSize}
                disabled={disabled}
                backgroundColor={backgroundColor}
                round={round}
                width={width}
                height={height}
                fullwidth={fullwidth}
                type={buttonStyle}
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
            </StyledButtonBox>
        </StyledContainer>
    );
};
