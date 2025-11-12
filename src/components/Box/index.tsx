import React from "react";
import { BoxProps } from "./types";
import { StyledContainer } from "../SharedComponent/StyledContainer";
import { StyledPixelBox } from "../SharedComponent/StyledPixelBox";

export const Box: React.FC<BoxProps> = ({
    backgroundColor,
    children,
    boxStyle = "dark",
    ...props
}) => {
    return (
        <StyledContainer testId="qa-box" className="cp-box-container">
            <StyledPixelBox
                backgroundColor={backgroundColor}
                type={boxStyle}
                {...props}
            >
                {children}
            </StyledPixelBox>
        </StyledContainer>
    );
};
