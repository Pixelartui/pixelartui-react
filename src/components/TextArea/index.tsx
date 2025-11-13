import React from "react";
import { TextAreaProps } from "./types";
import {
    StyledTextArea,
    StyledTextAreaContainer,
    StyledTextAreaHelperText,
    StyledTextAreaHelperTextWrapper,
    StyledTextAreaWrapper,
} from "./styled";
import { StyledLabel } from "../SharedComponent/StyledLabel";
import { StyledPixelBox } from "../SharedComponent/StyledPixelBox";

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
    width,
    height,
    fullwidth,
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
            $fullwidth={fullwidth}
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
                    fullwidth={fullwidth}
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
                        $width={width}
                        $height={height}
                        $fullwidth={fullwidth}
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
