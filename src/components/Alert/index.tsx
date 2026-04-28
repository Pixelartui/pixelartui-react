import React from "react";
import { AlertProps } from "./types";
import {
    StyledAlertContainer,
    StyledAlertContent,
    StyledAlertTitle,
    StyledAlertMessage,
    StyledAlertDismiss,
} from "./styled";

export const Alert: React.FC<AlertProps> = ({
    message,
    variant = "info",
    title,
    dismissible = false,
    className,
    onDismiss,
    ...props
}) => {
    return (
        <StyledAlertContainer
            $variant={variant}
            data-testid="qa-alert"
            className={`cp-alert ${className || ""}`}
            role="alert"
            {...props}
        >
            <StyledAlertContent className="cp-alert-content">
                {title && (
                    <StyledAlertTitle
                        $variant={variant}
                        className="cp-alert-title"
                    >
                        {title}
                    </StyledAlertTitle>
                )}
                <StyledAlertMessage className="cp-alert-message">
                    {message}
                </StyledAlertMessage>
            </StyledAlertContent>
            {dismissible && (
                <StyledAlertDismiss
                    $variant={variant}
                    className="cp-alert-dismiss"
                    onClick={onDismiss}
                    aria-label="Dismiss alert"
                    type="button"
                >
                    x
                </StyledAlertDismiss>
            )}
        </StyledAlertContainer>
    );
};
