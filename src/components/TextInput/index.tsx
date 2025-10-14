import React from 'react';
import { ThemeProvider } from 'styled-components'
import { StyledInput, StyledInputSideFirst, StyledInputSideSecond, StyledInputSideSecondInnerLeft, StyledInputSideSecondInnerRight, StyledInputTextInner, StyledInputTextOuter, StyledTextInputContainer, StyledTextInputError, StyledTextInputErrorWrapper, StyledTextInputLabel, StyledTextInputSideWrapper, StyledTextInputWrapper } from './styled';
import { TextInputProps } from './types';
import { GlobalStyle, theme } from '../../Theme';

export const TextInput: React.FC<TextInputProps> = ({ 
    inputName,
    type,
    backgroundColor,
    placeholder,
    textLabel,
    noLabel,
    error,
    onChange,
}) => {
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event)
        }
    }
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <StyledTextInputContainer data-testid="qa-input-text" className='cp-text-input-container' $type={type}>
                {!noLabel && <StyledTextInputLabel 
                    className="cp-text-input-label"
                    htmlFor={inputName}
                >{ textLabel }</StyledTextInputLabel>}
                <StyledTextInputWrapper className='cp-text-input-wrapper'>
                    <StyledTextInputSideWrapper className='cp-text-input-side-wrapper'>
                        <StyledInputSideFirst className='cp-text-input-side-first'/>
                        <StyledInputSideSecond className='cp-text-input-side-second'>
                            <StyledInputSideSecondInnerLeft $error={error} $type={type} $backgroundColor={backgroundColor} className='cp-text-input-side-second-inner-left'/>
                        </StyledInputSideSecond>
                    </StyledTextInputSideWrapper>
                    <StyledInputTextOuter>
                        <StyledInputTextInner 
                            className='cp-text-input-inner' 
                            $backgroundColor={backgroundColor}
                            $error={error}
                        >
                            <StyledInput
                                name={inputName}
                                className='cp-text-input' 
                                id={`cp-input-text-${inputName}`} 
                                type='text'
                                placeholder={placeholder}
                                $backgroundColor={backgroundColor}
                                onChange={handleOnChange}
                            />
                        </StyledInputTextInner>
                    </StyledInputTextOuter>
                    <StyledTextInputSideWrapper className='cp-text-input-side-wrapper'>
                        <StyledInputSideSecond className='cp-text-input-side-second'>
                            <StyledInputSideSecondInnerRight $error={error} $type={type} $backgroundColor={backgroundColor} className='cp-text-input-side-second-inner-left'/>
                        </StyledInputSideSecond>
                        <StyledInputSideFirst className='cp-text-input-side-first'/>
                    </StyledTextInputSideWrapper>
                </StyledTextInputWrapper>
                {error && <StyledTextInputErrorWrapper>
                    <StyledTextInputError>{error}</StyledTextInputError>
                </StyledTextInputErrorWrapper>}
            </StyledTextInputContainer>
        </ThemeProvider>
    );
};