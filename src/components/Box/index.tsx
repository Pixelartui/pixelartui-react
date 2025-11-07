import React from "react";
import { BoxProps } from "./types";
import { StyledContainer } from "../SharedComponent/StyledContainer";
import { StyledPixelBox } from "../SharedComponent/StyledPixelBox";

export const Box: React.FC<BoxProps> = ({ backgroundColor, children }) => {
    return (
        <StyledContainer testId="qa-box">
            <StyledPixelBox backgroundColor={backgroundColor}>
                {children}
            </StyledPixelBox>
        </StyledContainer>
    );
};
