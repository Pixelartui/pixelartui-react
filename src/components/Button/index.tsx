import React from 'react';
import { ThemeProvider } from 'styled-components'
import { 
    StyledButtonContainer, 
    StyledButtonSide, 
    StyledButtonSideContainer, 
    StyledButtonSideRoundFirst,
    StyledButtonSideRoundInnerLayer,
    StyledButtonSideRoundOuterInnerLayer,
    StyledButtonSideRoundSecond,
    StyledButtonSideRoundSecondRightSide,
    StyledButtonSideRoundThird,
    StyledTextContainer, 
    StyledTextContainerSecondLayer 
} from './styled';
import { ButtonProps } from './types';
import { GlobalStyle, theme } from '../../Theme';

export const Button: React.FC<ButtonProps> = ({ text, buttonSize, buttonType, fullwidth, round, backgroundColor }) => {
    return (
       
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <StyledButtonContainer $fullwidth={fullwidth}>
                <StyledButtonSideContainer $round={round}>
                    {
                        round ?
                        <>
                                <StyledButtonSideRoundFirst $type={buttonType}>
                                    <StyledButtonSideRoundOuterInnerLayer $type={buttonType}/>
                                </StyledButtonSideRoundFirst>
                                <StyledButtonSideRoundSecond $type={buttonType} $backgroundColor={backgroundColor}>
                                    <StyledButtonSideRoundInnerLayer $type={buttonType} $backgroundColor={backgroundColor}/>
                                </StyledButtonSideRoundSecond >
                                <StyledButtonSideRoundThird $type={buttonType} $backgroundColor={backgroundColor}>
                                    <StyledButtonSideRoundInnerLayer $type={buttonType} $backgroundColor={backgroundColor}/>
                                </StyledButtonSideRoundThird> 
                        </> :
                            <StyledButtonSide $type={buttonType} />
                    }
                    
                </StyledButtonSideContainer>            
                <StyledTextContainer 
                    $size={buttonSize}
                    $type={buttonType}
                    $fullwidth={fullwidth || false}
                    $backgroundColor={backgroundColor}
                >
                    <StyledTextContainerSecondLayer $type={buttonType} $backgroundColor={backgroundColor}>
                        {text}
                    </StyledTextContainerSecondLayer>
                </StyledTextContainer>
                <StyledButtonSideContainer $round={round}>
                    {
                        round ?
                        <>
                                <StyledButtonSideRoundThird $type={buttonType} $backgroundColor={backgroundColor}>
                                    <StyledButtonSideRoundInnerLayer $type={buttonType} $backgroundColor={backgroundColor}/>
                                </StyledButtonSideRoundThird> 
                                <StyledButtonSideRoundSecondRightSide $type={buttonType} $backgroundColor={backgroundColor}>
                                    <StyledButtonSideRoundInnerLayer $type={buttonType} $backgroundColor={backgroundColor}/>
                                </StyledButtonSideRoundSecondRightSide >
                                <StyledButtonSideRoundFirst $type={buttonType}>
                                    <StyledButtonSideRoundOuterInnerLayer $type={buttonType}/>
                                </StyledButtonSideRoundFirst>
                                
                        </> :
                            <StyledButtonSide $type={buttonType} />
                    }
                    
                </StyledButtonSideContainer>     
            </StyledButtonContainer>
        </ThemeProvider>
    );
};