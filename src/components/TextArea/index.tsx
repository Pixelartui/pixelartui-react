import React from "react";
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
    value,
    textAreaStyle = "dark",
    onChange,
    ...props
}) => {
    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange) {
            onChange(event);
        }
    };
    return (
        <StyledTextAreaContainer
            testId="qa-text-area"
            className="cp-text-area-container"
            {...props}
        >
            <StyledTextAreaWrapper
                $type={type}
                className="cp-text-area-wrapper"
            >
                <StyledLabel text={label!} noLabel={noLabel} name={inputName} />
                <StyledPixelBox
                    error={error}
                    backgroundColor={backgroundColor}
                    disabled={disabled}
                    type={textAreaStyle}
                >
                    <StyledTextArea
                        name={inputName}
                        value={value}
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
