import Styled from "styled-components";
import { AvatarSize } from "./types";

const sizeMap: Record<AvatarSize, string> = {
    small: "32px",
    medium: "48px",
    large: "64px",
};

const fontSizeMap: Record<AvatarSize, string> = {
    small: "14px",
    medium: "18px",
    large: "24px",
};

export const StyledAvatarContainer = Styled.div<{
    $size: AvatarSize;
    $backgroundColor?: string;
}>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => sizeMap[props.$size]};
    height: ${(props) => sizeMap[props.$size]};
    border: 2px solid ${(props) => props.theme.general.color.dark};
    background-color: ${(props) =>
        props.$backgroundColor || props.theme.general.color.primary};
    image-rendering: pixelated;
    font-family: 'Pixelify Sans', cursive;
    overflow: hidden;
`;

export const StyledAvatarImage = Styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    image-rendering: pixelated;
`;

export const StyledAvatarInitials = Styled.span<{
    $size: AvatarSize;
}>`
    font-size: ${(props) => fontSizeMap[props.$size]};
    font-weight: bold;
    color: ${(props) => props.theme.general.color.fontLight};
    text-transform: uppercase;
    user-select: none;
`;
