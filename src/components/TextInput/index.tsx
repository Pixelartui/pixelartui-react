import React from 'react';
import { ThemeProvider } from 'styled-components'
import { StyledInput, StyledInputSideFirst, StyledInputSideSecond, StyledInputSideSecondInnerLeft, StyledInputSideSecondInnerRight, StyledInputTextInner, StyledInputTextOuter, StyledTextInputContainer, StyledTextInputSideWrapper, StyledTextInputWrapper } from './styled';
import { InputTextProps } from './types';
import { GlobalStyle, theme } from '../../Theme';

export const InputText: React.FC<InputTextProps> = ({ 
    type,
    backgroundColor,
}) => {
    console.log('Input Text', backgroundColor)
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <StyledTextInputContainer data-testid="qa-input-text" className='cp-text-input-container' $type={type}>
                <StyledTextInputWrapper className='cp-text-input-wrapper'>
                    <StyledTextInputSideWrapper className='cp-text-input-side-wrapper'>
                        <StyledInputSideFirst className='cp-text-input-side-first'/>
                        <StyledInputSideSecond className='cp-text-input-side-second'>
                            <StyledInputSideSecondInnerLeft $type={type} $backgroundColor={backgroundColor} className='cp-text-input-side-second-inner-left'/>
                        </StyledInputSideSecond>
                    </StyledTextInputSideWrapper>
                    <StyledInputTextOuter>
                        <StyledInputTextInner className='cp-text-input-inner' $backgroundColor={backgroundColor}>
                            <StyledInput className='cp-text-input' id="cp-input-text" type='text' $backgroundColor={backgroundColor}/>
                        </StyledInputTextInner>
                    </StyledInputTextOuter>
                    <StyledTextInputSideWrapper className='cp-text-input-side-wrapper'>
                        <StyledInputSideSecond className='cp-text-input-side-second'>
                            <StyledInputSideSecondInnerRight $type={type} $backgroundColor={backgroundColor} className='cp-text-input-side-second-inner-left'/>
                        </StyledInputSideSecond>
                        <StyledInputSideFirst className='cp-text-input-side-first'/>
                    </StyledTextInputSideWrapper>
                </StyledTextInputWrapper>
            </StyledTextInputContainer>
        </ThemeProvider>
    );
};