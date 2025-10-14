import Styled, { DefaultTheme } from 'styled-components';
import { InputType } from './types';
import { adjust, getContrastColor, handleCustomColor } from '../../Theme/helper';

const handleCustomInputColor = (customColor: string) => {
    return handleCustomColor(customColor);
}

const handleSecondaryColor = (arg: {
    error: string | undefined;
    backgroundColor : string | undefined;
    theme: DefaultTheme
}) => {

    if (arg.error) {
        const errorColor = adjust('#ff0000', 40);
        return errorColor
    }

    if (arg.backgroundColor) {
        return handleCustomInputColor(arg.backgroundColor).customSecondaryColor;
    }


    return arg.theme.textInput.color.secondary;
}

const handleTertiaryColor = (arg: {
    error: string | undefined;
    backgroundColor : string | undefined;
    theme: DefaultTheme
}) => {

    if (arg.error) {
        const errorColor = adjust('#ff0000', -30);
        return errorColor
    }

    if (arg.backgroundColor) {
        return handleCustomInputColor(arg.backgroundColor).customTertiaryColor;
    }


    return arg.theme.textInput.color.tertiary;
}


export const StyledTextInputContainer = Styled.div<{
    $type?: InputType;
}>`
    font-family: 'Pixelify Sans';
    display: flex;
    width: fit-content;
    flex-direction: ${props =>  props.$type === 'main' ? 'column' : 'row' };
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
    border-top: 3px solid ${props =>  props.theme.textInput.color.border};
    border-bottom: 3px solid ${props => props.theme.textInput.color.border};
`;

export const StyledInputSideSecondInnerLeft = Styled.div<{
    $type?: InputType;
    $backgroundColor?: string;
    $error?: string;
}>`
    display: flex;
    width: 100%;
    border-bottom: 3px solid ${props => handleTertiaryColor({
        error: props.$error,
        backgroundColor: props.$backgroundColor,
        theme: props.theme,
    })};
    background: ${props => handleSecondaryColor({
        error: props.$error,
        backgroundColor: props.$backgroundColor,
        theme: props.theme,
    })};
`;

export const StyledInputSideSecondInnerRight = Styled.div<{
    $type?: InputType;
    $backgroundColor?: string;
    $error?: string;
}>`
    display: flex;
    width: 100%;
    border-top: 3px solid ${props => handleSecondaryColor({
        error: props.$error,
        backgroundColor: props.$backgroundColor,
        theme: props.theme,
    })};
    background: ${props => handleTertiaryColor({
        error: props.$error,
        backgroundColor: props.$backgroundColor,
        theme: props.theme,
    })};
`;


export const StyledInputTextOuter = Styled.div<{
    $type?: InputType;
}>`
    display: flex;
    border-top: 3px solid ${props =>  props.theme.textInput.color.border};
    border-bottom: 3px solid ${props => props.theme.textInput.color.border};
`;

export const StyledInputTextInner = Styled.div<{
    $type?: InputType;
    $backgroundColor?: string;
    $error?: string;
}>`
    display: flex;
    border-top: 3px solid ${props => handleSecondaryColor({
        error: props.$error,
        backgroundColor: props.$backgroundColor,
        theme: props.theme,
    })};
    border-bottom: 3px solid ${props => handleTertiaryColor({
        error: props.$error,
        backgroundColor: props.$backgroundColor,
        theme: props.theme,
    })};
`;


export const StyledInput = Styled.input<{
    $type?: InputType;
    $backgroundColor?: string;
}>`
    font: inherit;
    border: none;
    background: ${props => props.$backgroundColor ? props.$backgroundColor : props.theme.general.color.white};
    height: ${props => props.theme.textInput.size.height};
    width: ${props => props.theme.textInput.size.width};
    color: ${props => getContrastColor(
        props.$backgroundColor ? props.$backgroundColor : props.theme.general.color.white,
        props.theme.textInput.color.font.dark,
        props.theme.textInput.color.font.bright,
    )};

    &:focus {
        outline-width: 0;
    }
`;

export const StyledTextInputLabel = Styled.label<{
    $text?: string;
}>`
    display: flex;
    align-items: center;
    padding: 5px;
`;

export const StyledTextInputErrorWrapper = Styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 50px;
`;

export const StyledTextInputError = Styled.div`
    display: flex;
    font-size: 12px;
    color: red;
`;



