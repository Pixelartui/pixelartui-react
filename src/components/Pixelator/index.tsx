import React from "react";
import { PixelatorProps } from "./types";
import {
    StyledGrid,
    StyledGridWrapper,
    StyledPixel,
    StyledPixelatorContainer,
    StyledPixelWrapper,
} from "./styled";

export const Pixelator: React.FC<PixelatorProps> = ({
    pixelPerRow,
    pixelPerCol,
    pixelSize = 10,
    showgrid,
    pixels,
}) => {
    return (
        <StyledPixelatorContainer
            testId="qa-pixelator"
            className="cp-pixelator-container"
            $width={pixelPerRow * pixelSize}
            $height={pixelPerCol * pixelSize}
        >
            {showgrid && (
                <StyledGridWrapper
                    test-id="qa-pixelator-grid-wrapper"
                    className="cp-pixelator-grid-wrapper"
                    $pixelPerRow={pixelPerRow}
                    $pixelPerCol={pixelPerCol}
                    $pixelSize={pixelSize}
                >
                    {[...Array(pixelPerRow * pixelPerCol).keys()].map((key) => {
                        const row = Math.floor(key / pixelPerCol);
                        const col = key % pixelPerCol;
                        const isLight = (row + col) % 2 === 0;
                        return (
                            <StyledGrid
                                className="cp-pixelator-grid"
                                key={key}
                                $isAlt={isLight}
                            ></StyledGrid>
                        );
                    })}
                </StyledGridWrapper>
            )}
            <StyledPixelWrapper
                className="cp-pixelator-pixel-wrapper"
                $pixelPerRow={pixelPerRow}
                $pixelPerCol={pixelPerCol}
                $pixelSize={pixelSize}
            >
                {[...Array(pixelPerRow * pixelPerCol).keys()].map((key) => {
                    return (
                        <StyledPixel
                            className="cp-pixelator-grid"
                            key={`pixel-${key}`}
                            backgroundColor={
                                pixels[key]?.color || "transparent"
                            }
                            width={`${pixelSize}px`}
                            height={`${pixelSize}px`}
                        />
                    );
                })}
            </StyledPixelWrapper>
        </StyledPixelatorContainer>
    );
};
