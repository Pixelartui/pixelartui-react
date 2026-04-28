import React from "react";
import { AvatarProps } from "./types";
import {
    StyledAvatarContainer,
    StyledAvatarImage,
    StyledAvatarInitials,
} from "./styled";

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
        <StyledAvatarContainer
            $size={size}
            $backgroundColor={backgroundColor}
            data-testid="qa-avatar"
            className={`cp-avatar ${className || ""}`}
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
    );
};
