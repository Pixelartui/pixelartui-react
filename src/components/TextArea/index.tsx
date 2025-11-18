import React from "react";
import { TextAreaProps } from "./types";
import {
    StyledTextArea,
    StyledTextAreaContainer,
    StyledTextAreaWrapper,
} from "./styled";
import { StyledLabel } from "../SharedComponent/StyledLabel";
import { StyledPixelBox } from "../SharedComponent/StyledPixelBox";
import { StyledHelperText } from "../SharedComponent/StyledHelperText";

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
                <StyledLabel
                    text={label!}
                    noLabel={noLabel}
                    name={inputName}
                    style={textAreaStyle}
                />
                <StyledPixelBox
                    className="cp-text-area-box-wrapper"
                    error={error}
                    backgroundColor={backgroundColor}
                    disabled={disabled}
                    style={textAreaStyle}
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
                <StyledHelperText
                    helperText={helperText}
                    error={error}
                    style={textAreaStyle}
                />
            )}
        </StyledTextAreaContainer>
    );
};
