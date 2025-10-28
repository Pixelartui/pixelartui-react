import React from "react";
import { StyledLabelProps } from "./types";
import { StyledTextInputLabel } from "./styled";

export const StyledLabel: React.FC<StyledLabelProps> = ({
    text,
    noLabel,
    name,
    ...props
}) => {
    return (
        !noLabel && (
            <StyledTextInputLabel
                className="cp-text-input-label"
                htmlFor={name}
                {...props}
            >
                {text}
            </StyledTextInputLabel>
        )
    );
};
