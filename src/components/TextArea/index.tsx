import React, { useState } from "react";
import { TextAreaProps } from "./types";
import { StyledPixelBox } from "../SharedComponent/StyledPixelBox";
import {
    StyledTextArea,
    StyledTextAreaContainer,
    StyledTextAreaHelperText,
    StyledTextAreaHelperTextWrapper,
    StyledTextAreaWrapper,
} from "./styled";
import { StyledLabel } from "../SharedComponent/StyledLabel";

export const TextArea: React.FC<TextAreaProps> = ({
    inputName,
    backgroundColor,
    placeholder,
    error,
    helperText,
    disabled,
    label,
    noLabel,
    type,
    onChange,
    ...props
}) => {
    const [inputValue, setInputValue] = useState("");
    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(event.currentTarget.value);
        if (onChange) {
            onChange(event);
        }
    };
    return (
        <StyledTextAreaContainer testId="qa-text-area">
            <StyledTextAreaWrapper
                $type={type}
                className="cp-text-area-wrapper"
            >
                <StyledLabel text={label!} noLabel={noLabel} name={inputName} />
                <StyledPixelBox
                    error={error}
                    backgroundColor={backgroundColor}
                    disabled={disabled}
                >
                    <StyledTextArea
                        name={inputName}
                        value={inputValue}
                        className="cp-text-area"
                        id={`cp-text-area-${inputName}`}
                        placeholder={placeholder}
                        $backgroundColor={backgroundColor}
                        disabled={disabled}
                        $disabled={disabled}
                        onChange={handleOnChange}
                        {...props}
                    />
                </StyledPixelBox>
            </StyledTextAreaWrapper>

            {helperText && (
                <StyledTextAreaHelperTextWrapper className="cp-text-area-helper-text-wrapper">
                    <StyledTextAreaHelperText
                        $error={error}
                        $backgroundColor={backgroundColor}
                        className="cp-text-area-helper-text"
                    >
                        {helperText}
                    </StyledTextAreaHelperText>
                </StyledTextAreaHelperTextWrapper>
            )}
        </StyledTextAreaContainer>
    );
};
