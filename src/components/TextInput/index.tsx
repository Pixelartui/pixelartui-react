import React, { useState } from "react";
import {
    StyledInput,
    StyledTextInputContainer,
    StyledTextInputHelperText,
    StyledTextInputHelperTextWrapper,
    StyledTextInputWrapper,
} from "./styled";
import { TextInputProps } from "./types";
import { StyledPixelBox } from "../SharedComponent/StyledPixelBox";
import { StyledLabel } from "../SharedComponent/StyledLabel";

export const TextInput: React.FC<TextInputProps> = ({
    inputName,
    type,
    backgroundColor,
    placeholder,
    textLabel,
    noLabel,
    error,
    helperText,
    disabled,
    value,
    onChange,
    ...props
}) => {
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event);
        }
    };
    return (
        <StyledTextInputContainer
            testId="qa-input-text"
            className="cp-text-input-container"
        >
            <StyledTextInputWrapper
                className="cp-text-input-wrapper"
                $type={type}
            >
                <StyledLabel
                    text={textLabel!}
                    noLabel={noLabel}
                    name={inputName}
                />
                <StyledPixelBox
                    error={error}
                    type={type}
                    backgroundColor={backgroundColor}
                    disabled={disabled}
                >
                    <StyledInput
                        name={inputName}
                        value={value}
                        className="cp-text-input"
                        id={`cp-input-text-${inputName}`}
                        type="text"
                        placeholder={placeholder}
                        $backgroundColor={backgroundColor}
                        disabled={disabled}
                        $disabled={disabled}
                        onChange={handleOnChange}
                        {...props}
                    />
                </StyledPixelBox>
                {helperText && type !== "inline" && (
                    <StyledTextInputHelperTextWrapper className="cp-text-input-helper-text-wrapper">
                        <StyledTextInputHelperText
                            $error={error}
                            $backgroundColor={backgroundColor}
                            className="cp-text-input-helper-text"
                        >
                            {helperText}
                        </StyledTextInputHelperText>
                    </StyledTextInputHelperTextWrapper>
                )}
            </StyledTextInputWrapper>
            {helperText && type === "inline" && (
                <StyledTextInputHelperTextWrapper className="cp-text-input-helper-text-wrapper">
                    <StyledTextInputHelperText
                        $error={error}
                        $backgroundColor={backgroundColor}
                        className="cp-text-input-helper-text"
                    >
                        {helperText}
                    </StyledTextInputHelperText>
                </StyledTextInputHelperTextWrapper>
            )}
        </StyledTextInputContainer>
    );
};
