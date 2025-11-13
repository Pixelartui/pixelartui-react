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
            className="cp-box-container"
            {...props}
        >
            <StyledPixelBox
                backgroundColor={backgroundColor}
                type={boxStyle}
                width={width}
                height={height}
                fullwidth={fullwidth}
            >
                {children}
            </StyledPixelBox>
        </StyledContainer>
    );
};
