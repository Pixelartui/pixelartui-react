import Styled from "styled-components";
import { StyledContainer } from "../SharedComponent/StyledContainer";
import { SliderType } from "./types";

export const StyledSliderContainer = Styled(StyledContainer)<{
    $type?: SliderType;
}>`
    flex-direction: ${(props) => (props.$type === "main" ? "column" : "row")};
    align-items: ${(props) => (props.$type === "inline" ? "center" : "flex-start")};
    gap: ${(props) => (props.$type === "inline" ? "12px" : "8px")};
`;

export const StyledSliderWrapper = Styled.div<{
    $disabled?: boolean;
}>`
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
    opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
`;

export const StyledSliderTrack = Styled.div<{
    $backgroundColor?: string;
}>`
    position: relative;
    flex: 1;
    height: 8px;
    image-rendering: pixelated;
    box-shadow:
        inset 0 0 0 2px ${(props) => props.$backgroundColor || props.theme.general.color.primary},
        inset 2px 2px 0 0 ${(props) => props.theme.general.color.black}40;
`;

export const StyledSliderFill = Styled.div<{
    $fillPercentage: number;
    $backgroundColor?: string;
}>`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${(props) => props.$fillPercentage}%;
    background-color: ${(props) => props.$backgroundColor || props.theme.general.color.primary};
    transition: width 0.1s ease;
`;

export const StyledSliderInput = Styled.input`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    margin: 0;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    z-index: 10;

    &::-webkit-slider-thumb {
        width: 16px;
        height: 16px;
        cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    }

    &::-moz-range-thumb {
        width: 16px;
        height: 16px;
        cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    }
`;

export const StyledSliderThumb = Styled.div<{
    $position: number;
    $backgroundColor?: string;
}>`
    position: absolute;
    left: calc(${(props) => props.$position}% - 8px);
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-color: ${(props) => props.$backgroundColor || props.theme.general.color.primary};
    border: 2px solid ${(props) => props.theme.general.color.black};
    image-rendering: pixelated;
    pointer-events: none;
    transition: left 0.1s ease;
    box-shadow:
        inset 1px 1px 0 0 ${(props) => props.theme.general.color.white}40,
        2px 2px 0 0 ${(props) => props.theme.general.color.black}20;
`;

export const StyledSliderValue = Styled.div`
    min-width: 40px;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: ${(props) => props.theme.general.color.font};
`;
