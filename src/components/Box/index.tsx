import React from "react";
import { BoxProps } from "./types";
import { StyledContainer } from "../SharedComponent/StyledContainer";
import { StyledPixelBox } from "../SharedComponent/StyledPixelBox";

export const Box: React.FC<BoxProps> = ({
    backgroundColor,
    children,
    boxStyle = "dark",
    width,
    height,
    fullwidth,
    ...props
}) => {
    return (
        <StyledContainer
            testId="qa-box"
            fullwidth={fullwidth}
            className="cp-box-container"
            {...props}
        >
            <StyledPixelBox
                className="cp-box-wrapper"
                backgroundColor={backgroundColor}
                style={boxStyle}
                width={width}
                height={height}
                fullwidth={fullwidth}
            >
                {children}
            </StyledPixelBox>
        </StyledContainer>
    );
};
