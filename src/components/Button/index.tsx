import React from 'react';
import { ThemeProvider } from 'styled-components'
import { StyledButtonContainer, StyledButtonSide, StyledButtonSideContainer, StyledButtonSideRound, StyledTextContainer } from './styled';
import { ButtonProps } from './types';
import { GlobalStyle, theme } from '../../Theme';

export const Button: React.FC<ButtonProps> = ({ text, buttonSize, buttonType, fullwidth, round }) => {
    return (
       
        <ThemeProvider theme={theme}>
             <GlobalStyle />
            <StyledButtonContainer $fullwidth={fullwidth}>
                <StyledButtonSideContainer $round={round}>
                    {
                        round ?
                        <>
                                <StyledButtonSideRound $type={buttonType} />
                                <StyledButtonSideRound $type={buttonType} />
                                <StyledButtonSideRound $type={buttonType} /> </>:
                            <StyledButtonSide $type={buttonType} />
                    }
                    
                </StyledButtonSideContainer>            
                <StyledTextContainer 
                    $size={buttonSize}
                    $type={buttonType}
                    $fullwidth={fullwidth || false}
                >
                        {text}
                </StyledTextContainer>
                <StyledButtonSideContainer $round={round}>
                    <StyledButtonSide $type={buttonType}>
                    
                    </StyledButtonSide>
                </StyledButtonSideContainer>
            </StyledButtonContainer>
        </ThemeProvider>
    );
};