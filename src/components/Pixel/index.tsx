import React from "react";
import { PixelProps } from "./types";
import { StyledContainer } from "../SharedComponent/StyledContainer";
import { StyledPixelSolid } from "./styled";

export const Pixel: React.FC<PixelProps> = ({
    backgroundColor,
    width = "5px",
    height = "5px",
    ...props
}) => {
    return (
        <StyledContainer
            testId="qa-pixel"
            className="cp-box-container"
            {...props}
        >
            <StyledPixelSolid
                $backgroundColor={backgroundColor}
                $width={width}
                $height={height}
            />
        </StyledContainer>
    );
};
