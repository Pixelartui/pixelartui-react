import React from "react";
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
import { theme } from "../../Theme";

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
    inputStyle = "dark",
    width,
    height,
    fullwidth,
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
            fullwidth={fullwidth}
            {...props}
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
                    className="cp-text-input-box-wrapper"
                    error={error}
                    type={inputStyle}
                    backgroundColor={backgroundColor}
                    disabled={disabled}
                    width={width ? width : theme.textInput.size.free?.width}
                    height={height ? height : theme.textInput.size.free?.height}
                    fullwidth={fullwidth}
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
