import React from 'react';
import { ThemeProvider } from 'styled-components'
import { 
    StyledButtonContainer, 
    StyledButtonSideMainFirst, 
    StyledButtonSideContainer, 
    StyledButtonSideRoundFirst,
    StyledButtonSideRoundInnerLayer,
    StyledButtonSideRoundSecond,
    StyledButtonSideRoundSecondRightSide,
    StyledButtonSideRoundThird,
    StyledTextContainer, 
    StyledTextContainerSecondLayer, 
    StyledButtonSideMainSecond,
    StyledButtonSideMainSecondInner,
    StyledButtonSideMainSecondInnerRight
} from './styled';
import { ButtonProps } from './types';
import { GlobalStyle, theme } from '../../Theme';

export const Button: React.FC<ButtonProps> = ({ 
    text, 
    buttonSize, 
    buttonType, 
    fullwidth, 
    round, 
    backgroundColor,
    onClick,
}) => {
    const handleOnClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        onClick(event);
    }
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <StyledButtonContainer onClick={handleOnClick} $fullwidth={fullwidth}>
                <StyledButtonSideContainer $round={round}>
                    {
                        round ?
                        <>
                                <StyledButtonSideRoundFirst $type={buttonType}/>
                                    
                                <StyledButtonSideRoundSecond $type={buttonType} $backgroundColor={backgroundColor}>
                                    <StyledButtonSideRoundInnerLayer $type={buttonType} $backgroundColor={backgroundColor}/>
                                </StyledButtonSideRoundSecond >
                                <StyledButtonSideRoundThird $type={buttonType} $backgroundColor={backgroundColor}>
                                    <StyledButtonSideRoundInnerLayer $type={buttonType} $backgroundColor={backgroundColor}/>
                                </StyledButtonSideRoundThird> 
                        </> :
                        <>
                            <StyledButtonSideMainFirst $type={buttonType} />
                            <StyledButtonSideMainSecond $type={buttonType} $size={buttonSize}>
                                <StyledButtonSideMainSecondInner $type={buttonType} />
                            </StyledButtonSideMainSecond>
                        </>
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
                                <StyledButtonSideRoundFirst $type={buttonType}/>                                
                        </> :
                        <>
                            <StyledButtonSideMainSecond $type={buttonType} $size={buttonSize}>
                                <StyledButtonSideMainSecondInnerRight $type={buttonType} />
                            </StyledButtonSideMainSecond>
                            <StyledButtonSideMainFirst $type={buttonType} />
                        </>
                    }
                    
                </StyledButtonSideContainer>     
            </StyledButtonContainer>
        </ThemeProvider>
    );
};