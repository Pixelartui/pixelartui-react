import React, { useState } from 'react';
import { TextAreaProps } from './types';
import { StyledPixelBox } from '../SharedComponent/StyledPixelBox';
import { StyledContainer } from '../SharedComponent/StyledContainer';
import { StyledTextArea, StyledTextAreaHelperText, StyledTextAreaHelperTextWrapper } from './styled';

export const TextArea: React.FC<TextAreaProps> = ({ 
    inputName,
    backgroundColor,
    placeholder,
    error,
    helperText,
    disabled,
    onChange,
    ...props
}) => {
    const [inputValue, setInputValue] = useState('');
    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(event.currentTarget.value);
        if (onChange) {
            onChange(event)
        }
    }
    return (
        <StyledContainer 
            testId="qa-text-area"  
        >
            
            <StyledPixelBox
                error={error}
                backgroundColor={backgroundColor}
                disabled={disabled}
            >
                <StyledTextArea
                    name={inputName}
                    value={inputValue}
                    className='cp-text-area' 
                    id={`cp-text-area-${inputName}`} 
                    placeholder={placeholder}
                    $backgroundColor={backgroundColor}
                    disabled={disabled}
                    $disabled={disabled}
                    onChange={handleOnChange}
                    {...props}
                />
            </StyledPixelBox>
                
            {helperText && <StyledTextAreaHelperTextWrapper className="cp-text-area-helper-text-wrapper">
                <StyledTextAreaHelperText className="cp-text-area-helper-text">{helperText}</StyledTextAreaHelperText>
            </StyledTextAreaHelperTextWrapper>}
        </StyledContainer>
    );
};
