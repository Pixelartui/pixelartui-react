import React, { useState } from 'react';
import { StyledInput, StyledTextInputContainer, StyledTextInputHelperText, StyledTextInputHelperTextWrapper, StyledTextInputLabel, StyledTextInputWrapper} from './styled';
import { TextInputProps } from './types';
import { StyledPixelBox } from '../SharedComponent/StyledPixelBox';

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
    onChange,
    ...props
}) => {
    const [inputValue, setInputValue] = useState('');
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value);
        if (onChange) {
            onChange(event)
        }
    }
    return (
        <StyledTextInputContainer 
            testId="qa-input-text"  
            className="cp-text-input-container"
        >
            <StyledTextInputWrapper className="cp-text-input-wrapper" $type={type}>
                {!noLabel && <StyledTextInputLabel 
                    className="cp-text-input-label"
                    htmlFor={inputName}
                >{ textLabel }</StyledTextInputLabel>}
                <StyledPixelBox
                    error={error}
                    type={type}
                    backgroundColor={backgroundColor}
                    disabled={disabled}
                >
                    <StyledInput
                        name={inputName}
                        value={inputValue}
                        className='cp-text-input' 
                        id={`cp-input-text-${inputName}`} 
                        type='text'
                        placeholder={placeholder}
                        $backgroundColor={backgroundColor}
                        disabled={disabled}
                        $disabled={disabled}
                        onChange={handleOnChange}
                        {...props}
                    />
                </StyledPixelBox>
                {helperText && type !== 'inline' && <StyledTextInputHelperTextWrapper className="cp-text-input-helper-text-wrapper">
                    <StyledTextInputHelperText className="cp-text-input-helper-text">{helperText}</StyledTextInputHelperText>
                </StyledTextInputHelperTextWrapper>}
            </StyledTextInputWrapper>
            {helperText && type === 'inline' && <StyledTextInputHelperTextWrapper className="cp-text-input-helper-text-wrapper">
                <StyledTextInputHelperText className="cp-text-input-helper-text">{helperText}</StyledTextInputHelperText>
            </StyledTextInputHelperTextWrapper>}
        </StyledTextInputContainer>
    );
};
