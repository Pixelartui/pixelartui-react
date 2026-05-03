import React from "react";
import { AlertProps } from "./types";
import {
    StyledAlertInner,
    StyledAlertContent,
    StyledAlertTitle,
    StyledAlertMessage,
    StyledAlertDismiss,
    variantColorMap,
} from "./styled";
import { StyledContainer } from "../SharedComponent/StyledContainer";
import { StyledPixelBox } from "../SharedComponent/StyledPixelBox";

export const Alert: React.FC<AlertProps> = ({
    message,
    variant = "info",
    title,
    dismissible = false,
    alertStyle = "dark",
    className,
    onDismiss,
    ...props
}) => {
    return (
        <StyledContainer testId="qa-alert" className={`cp-alert ${className || ""}`}>
            <StyledPixelBox
                style={alertStyle}
                backgroundColor={variantColorMap[variant]}
                fullwidth
                {...props}
            >
                <StyledAlertInner
                    $variant={variant}
                    role="alert"
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
                </StyledAlertInner>
            </StyledPixelBox>
        </StyledContainer>
    );
};
