import Styled from "styled-components";
import { StyledContainer } from "../SharedComponent/StyledContainer";
import { Pixel } from "../Pixel";

export const StyledPixelatorContainer = Styled(StyledContainer)`
    position: relative;
`;

export const StyledGridWrapper = Styled.div<{
    $pixelPerRow?: number;
    $pixelPerCol?: number;
    $pixelSize?: number;
}>`
    display: grid;
    position: relative;
    grid-template-columns: repeat(${(props) => props.$pixelPerRow}, ${(props) =>
    props.$pixelSize}px);
    grid-template-rows: repeat(${(props) => props.$pixelPerCol}, ${(props) =>
    props.$pixelSize}px);
    grid-auto-flow: column;
`;

export const StyledGrid = Styled.div<{
    $isAlt?: boolean;
}>`
    background: ${(props) => (props.$isAlt ? "#FFFFFF" : "#DEDEDE")}
`;

export const StyledPixelWrapper = Styled(StyledGridWrapper)`
    position: absolute;
    top: 0;
    left: 0;
`;

// for unite test purpose
export const StyledPixel = Styled(Pixel)``;
