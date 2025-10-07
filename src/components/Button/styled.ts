import Styled, { DefaultTheme } from 'styled-components';
import { ButtonSize, ButtonType } from './types';

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
            return theme.button.color.main;
        case 'outline':
            return theme.button.color.outline;
        default:
            return theme.button.color.main;
    }
}

const handleBorderHoverColour = (type: ButtonType, theme: DefaultTheme) => {

    switch(type) {
        case 'main':
            return theme.button.color.main.hover.background;
        case 'outline':
            return theme.button.color.outline.hover.border;
        default:
            return theme.button.color.main.hover.background;
    }
}


export const StyledButtonContainer = Styled.div<{
    $fullwidth?: boolean;
}>`
    font-family: 'Pixelify';
    display: flex;
    cursor: pointer;
    width: ${props => props.$fullwidth ? 'width: 100%;' : 'fit-content'};
`;

export const StyledButtonSideContainer = Styled.div<{ 
    $round?: boolean;
}>`
    width: ${props => props.$round ? '15px' : '5px'};
    display: flex;
    align-items: center;
`;

export const StyledTextContainer = Styled.div<{ 
    $size?: ButtonSize;
    $type?: ButtonType;
    $fullwidth?: boolean;
}>`
    ${props => props.$fullwidth ? 'width: 100%;' : ''}
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 5px solid ${props => props.theme.button.color.main.normal.background};
    border-bottom: 5px solid ${props => props.theme.button.color.main.normal.background};
    background: ${props => handleButtonColour(props.$type || 'main', props.theme).normal.background};
    padding: 0 5px;
    color: ${props => handleButtonColour(props.$type || 'main', props.theme).normal.fontColor};
    min-width: ${props => handleButtonSize(props.$size || 'medium', props.theme).width};
    min-height: ${props => handleButtonSize(props.$size || 'medium', props.theme).height};
    font-size: ${props => handleButtonSize(props.$size || 'medium', props.theme).fontSize};

         ${StyledButtonContainer}:hover & {
            background:  ${props => handleButtonColour(props.$type || 'main', props.theme).hover.background};
            border-top: 5px solid ${props => handleBorderHoverColour(props.$type || 'main', props.theme)};
            border-bottom: 5px solid ${props => handleBorderHoverColour(props.$type || 'main', props.theme)};
        }
`;

export const StyledButtonSide = Styled.div<{ 
    $type?: ButtonType;
}>`
    background: ${props => props.theme.button.color.main.normal.background};
    width: 100%;
    height: calc(100% - 10px);
        
    ${StyledButtonContainer}:hover & {
        background: ${props => handleBorderHoverColour(props.$type || 'main', props.theme)};
    }
`;

export const StyledButtonSideRound = Styled(StyledButtonSide)`
    background: red;
    
`;


