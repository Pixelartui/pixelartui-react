import Styled, { DefaultTheme } from 'styled-components';
import { ButtonSize, ButtonType } from './types';
import { adjust } from '../../Theme/helper';

const handleButtonSize = (size: ButtonSize, theme: DefaultTheme) => {
    switch(size) {
        case 'small':
            return theme.button.size.small;
        case 'medium':
            return theme.button.size.medium;
        case 'large':
            return theme.button.size.large;
        default:
            return theme.button.size.medium;
    }
}

const handleButtonColour = (type: ButtonType, theme: DefaultTheme) => {
    switch(type) {
        case 'main':
            return theme.button.color.main.normal;
        case 'outline':
            return theme.button.color.outline.normal;
        default:
            return theme.button.color.main.normal;
    }
}

const handleHoverColour = (type: ButtonType, theme: DefaultTheme) => {

    switch(type) {
        case 'main':
            return theme.button.color.main.hover;
        case 'outline':
            return theme.button.color.outline.hover;
        default:
            return theme.button.color.main.hover;
    }
}

const handleCustomButtonColor = (customColor: string) => {
    const customPrimaryColor = customColor;
    const customSecondaryColor = adjust(customColor, 40);
    const customTertiaryColor = adjust(customColor, -30);
    const customHover = adjust(customPrimaryColor, -10);

    return {
        customPrimaryColor,
        customSecondaryColor,
        customTertiaryColor,
        customHover,
    }
}


export const StyledButtonContainer = Styled.div<{
    $fullwidth?: boolean;
}>`
    font-family: 'Pixelify Sans';
    display: flex;
    cursor: pointer;
    width: ${props => props.$fullwidth ? 'width: 100%;' : 'fit-content'};
`;

export const StyledButtonSideContainer = Styled.div<{ 
    $round?: boolean;
}>`
    width: ${props => props.$round ? '9px' : '3px'};
    display: flex;
    align-items: center;
`;

export const StyledTextContainer = Styled.div<{ 
    $size?: ButtonSize;
    $type?: ButtonType;
    $fullwidth?: boolean;
    $backgroundColor?: string;
}>`
    ${props => props.$fullwidth ? 'width: 100%;' : ''}
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 3px solid ${props => handleButtonColour(props.$type || 'main', props.theme).border};
    border-bottom: 3px solid ${props => handleButtonColour(props.$type || 'main', props.theme).border};
    background: ${props => props.$backgroundColor ? handleCustomButtonColor(props.$backgroundColor).customPrimaryColor : handleButtonColour(props.$type || 'main', props.theme).primary};
    color: ${props => handleButtonColour(props.$type || 'main', props.theme).font};
    min-width: ${props => handleButtonSize(props.$size || 'medium', props.theme).width};
    min-height: ${props => handleButtonSize(props.$size || 'medium', props.theme).height};
    font-size: ${props => handleButtonSize(props.$size || 'medium', props.theme).fontSize};

        ${StyledButtonContainer}:hover & {
            background:  ${props => props.$backgroundColor ? handleCustomButtonColor(props.$backgroundColor).customHover : handleHoverColour(props.$type || 'main', props.theme).primary};
            border-top: 3px solid ${props => handleHoverColour(props.$type || 'main', props.theme).border};
            border-bottom: 3px solid ${props => handleHoverColour(props.$type || 'main', props.theme).border};
        }
`;

export const StyledTextContainerSecondLayer = Styled.div<{ 
    $type?: ButtonType;
    $backgroundColor?: string;
}>`
    border-top: 3px solid ${props => props.$backgroundColor ? handleCustomButtonColor(props.$backgroundColor).customSecondaryColor : handleButtonColour(props.$type || 'main', props.theme).secondary};
    border-bottom: 3px solid ${props => props.$backgroundColor ? handleCustomButtonColor(props.$backgroundColor).customTertiaryColor : handleButtonColour(props.$type || 'main', props.theme).tertiary};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledButtonSide = Styled.div<{ 
    $type?: ButtonType;
    $backgroundColor?: string;
}>`
    background: ${props => handleButtonColour(props.$type || 'main', props.theme).border};
    width: 100%;
    height: calc(100% - 6px);
    display: flex;
        
`;

export const StyledButtonSideRoundFirst = Styled(StyledButtonSide)`
    height: calc(100% - 24px);
    border-top: 3px solid ${props => handleButtonColour(props.$type || 'main', props.theme).border};
    border-bottom: 3px solid ${props => handleButtonColour(props.$type || 'main', props.theme).border};
    background: ${props => handleButtonColour(props.$type || 'main', props.theme).border};

`;

export const StyledButtonSideRoundSecond = Styled(StyledButtonSide)`
    height: calc(100% - 18px);
    border-top: 3px solid ${props => handleButtonColour(props.$type || 'main', props.theme).border};
    border-bottom: 3px solid ${props => handleButtonColour(props.$type || 'main', props.theme).border};
    background: ${props => props.$backgroundColor ? handleCustomButtonColor(props.$backgroundColor).customSecondaryColor : handleButtonColour(props.$type || 'main', props.theme).secondary};

`;

export const StyledButtonSideRoundSecondRightSide = Styled(StyledButtonSideRoundSecond)`
    background: ${props => props.$backgroundColor ? handleCustomButtonColor(props.$backgroundColor).customTertiaryColor : handleButtonColour(props.$type || 'main', props.theme).tertiary};
`;


export const StyledButtonSideRoundThird = Styled(StyledButtonSide)`
    height: calc(100% - 12px);
    border-top: 3px solid ${props => handleButtonColour(props.$type || 'main', props.theme).border};
    border-bottom: 3px solid ${props => handleButtonColour(props.$type || 'main', props.theme).border};
    background: ${props => props.$backgroundColor ? handleCustomButtonColor(props.$backgroundColor).customPrimaryColor : handleButtonColour(props.$type || 'main', props.theme).primary};
        ${StyledButtonContainer}:hover & {
            background:  ${props => props.$backgroundColor ? handleCustomButtonColor(props.$backgroundColor).customHover : handleHoverColour(props.$type || 'main', props.theme).primary};
        }

`;

export const StyledButtonSideRoundInnerLayer = Styled(StyledTextContainerSecondLayer)`
`;

export const StyledButtonSideRoundOuterInnerLayer = Styled(StyledTextContainerSecondLayer)`
    border: none;
`;

