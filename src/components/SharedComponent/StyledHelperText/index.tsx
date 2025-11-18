import React from "react";
import { StyledHelperTextProps } from "./types";
import { StyledHelperTextWrapper, StyledHelperTextContent } from "./styled";

export const StyledHelperText: React.FC<StyledHelperTextProps> = ({
    style = "dark",
    error,
    helperText,
    ...props
}) => {
    return (
        <StyledHelperTextWrapper
            className="cp-text-input-helper-text-wrapper"
            {...props}
        >
            <StyledHelperTextContent
                $error={error}
                className="cp-text-input-helper-text"
                $style={style}
            >
                {helperText}
            </StyledHelperTextContent>
        </StyledHelperTextWrapper>
    );
};
