import Styled from "styled-components";

export const StyledProgressBarContainer = Styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
    font-family: 'Pixelify Sans', cursive;
`;

export const StyledProgressBarLabel = Styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${(props) => props.theme.general.color.font};
`;

export const StyledProgressBarTrack = Styled.div<{
    $backgroundColor?: string;
}>`
    position: relative;
    width: 100%;
    height: 24px;
    background-color: ${(props) =>
        props.$backgroundColor || props.theme.general.color.light};
    border: 2px solid ${(props) => props.theme.general.color.dark};
    image-rendering: pixelated;
    overflow: hidden;
`;

export const StyledProgressBarFill = Styled.div<{
    $percentage: number;
    $fillColor?: string;
}>`
    height: 100%;
    width: ${(props) => props.$percentage}%;
    background-color: ${(props) =>
        props.$fillColor || props.theme.general.color.primary};
    transition: width 0.2s ease;
    image-rendering: pixelated;
`;

export const StyledProgressBarValue = Styled.div`
    font-size: 12px;
    color: ${(props) => props.theme.general.color.font};
    text-align: right;
`;
