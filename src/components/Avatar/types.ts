import { StyledPixelBoxStyle } from "../SharedComponent/StyledPixelBox/types";

export type AvatarSize = "small" | "medium" | "large";
export type AvatarStyle = StyledPixelBoxStyle;

export interface AvatarProps {
    src?: string;
    alt?: string;
    initials?: string;
    size?: AvatarSize;
    avatarStyle?: AvatarStyle;
    backgroundColor?: string;
    className?: string;
}
