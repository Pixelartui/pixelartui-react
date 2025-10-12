import Styled from 'styled-components';
import { InputType } from './types';
import { getContrastColor, handleCustomColor } from '../../Theme/helper';

const handleCustomInputColor = (customColor: string) => {
    return handleCustomColor(customColor);
}


export const StyledTextInputContainer = Styled.div<{
    $type?: InputType;
}>`
    display: flex;
`;

export const StyledTextInputWrapper = Styled.div<{
    $type?: InputType;
}>`
    display: flex;
`;


export const StyledTextInputSideWrapper = Styled.div<{
    $type?: InputType;
}>`
    display: flex;
    align-items: center;
`;

export const StyledInputSideFirst = Styled.div`
    display: flex;
    width: 3px;
    background: black;
    height: calc(100% - 12px);
`;

export const StyledInputSideSecond = Styled.div`
    display: flex;
    width: 3px;
    height: calc(100% - 12px);
    border-top: 3px solid ${props =>  props.theme.inputText.color.border};
    border-bottom: 3px solid ${props => props.theme.inputText.color.border};
`;

export const StyledInputSideSecondInnerLeft = Styled.div<{
    $type?: InputType;
    $backgroundColor?: string;
}>`
    display: flex;
    width: 100%;
    border-bottom: 3px solid ${props => props.$backgroundColor ? handleCustomInputColor(props.$backgroundColor).customTertiaryColor : props.theme.inputText.color.tertiary};
    background: ${props => props.$backgroundColor ? handleCustomInputColor(props.$backgroundColor).customSecondaryColor : props.theme.inputText.color.secondary};
`;

export const StyledInputSideSecondInnerRight = Styled.div<{
    $type?: InputType;
    $backgroundColor?: string;
}>`
    display: flex;
    width: 100%;
    border-top: 3px solid ${props => props.$backgroundColor ? handleCustomInputColor(props.$backgroundColor).customSecondaryColor : props.theme.inputText.color.secondary};
    background: ${props => props.$backgroundColor ? handleCustomInputColor(props.$backgroundColor).customTertiaryColor : props.theme.inputText.color.tertiary};
`;


export const StyledInputTextOuter = Styled.div<{
    $type?: InputType;
}>`
    display: flex;
    border-top: 3px solid ${props =>  props.theme.inputText.color.border};
    border-bottom: 3px solid ${props => props.theme.inputText.color.border};
`;

export const StyledInputTextInner = Styled.div<{
    $type?: InputType;
    $backgroundColor?: string;
}>`
    display: flex;
    border-top: 3px solid ${props => props.$backgroundColor ? handleCustomInputColor(props.$backgroundColor).customSecondaryColor : props.theme.inputText.color.secondary};
    border-bottom: 3px solid ${props => props.$backgroundColor ? handleCustomInputColor(props.$backgroundColor).customTertiaryColor : props.theme.inputText.color.tertiary};

`;


export const StyledInput = Styled.input<{
    $type?: InputType;
    $backgroundColor?: string;
}>`
    font-family: 'Pixelify Sans';
    border: none;
    background: ${props => props.$backgroundColor ? props.$backgroundColor : props.theme.general.color.white};
    height: ${props => props.theme.inputText.size.height};
    width: ${props => props.theme.inputText.size.width};
    color: ${props => getContrastColor(
        props.$backgroundColor ? props.$backgroundColor : props.theme.general.color.white,
        props.theme.inputText.color.font.dark,
        props.theme.inputText.color.font.bright,
    )};

    &:focus {
        outline-width: 0;
    }
`;

