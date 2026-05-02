import React from "react";
import { AvatarProps } from "./types";
import {
    StyledAvatarContainer,
    StyledAvatarImage,
    StyledAvatarInitials,
} from "./styled";
import { StyledContainer } from "../SharedComponent/StyledContainer";

export const Avatar: React.FC<AvatarProps> = ({
    src,
    alt = "",
    initials,
    size = "medium",
    backgroundColor,
    className,
    ...props
}) => {
    return (
        <StyledContainer testId="qa-avatar" className={`cp-avatar ${className || ""}`}>
            <StyledAvatarContainer
                $size={size}
                $backgroundColor={backgroundColor}
                role="img"
                aria-label={alt || initials || "Avatar"}
                {...props}
            >
                {src ? (
                    <StyledAvatarImage
                        src={src}
                        alt={alt}
                        className="cp-avatar-image"
                    />
                ) : (
                    <StyledAvatarInitials
                        $size={size}
                        className="cp-avatar-initials"
                    >
                        {initials || "?"}
                    </StyledAvatarInitials>
                )}
            </StyledAvatarContainer>
        </StyledContainer>
    );
};
