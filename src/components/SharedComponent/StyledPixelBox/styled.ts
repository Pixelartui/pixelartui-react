import Styled, { DefaultTheme } from "styled-components";
import { adjust, handleCustomColor } from "../../../Theme/helper";

const handleSecondaryColor = (arg: {
    error: boolean | undefined;
    backgroundColor: string | undefined;
    theme: DefaultTheme;
    disabled?: boolean;
}) => {
    if (arg.disabled) {
        return adjust(arg.theme.general.color.disabled, 40);
    }

    if (arg.error) {
        const errorColor = adjust("#ff0000", 40);
        return errorColor;
    }

    if (arg.backgroundColor) {
        return handleCustomColor(arg.backgroundColor).customSecondaryColor;
    }

    return arg.theme.textInput.color.main?.normal?.secondary;
};

const handleTertiaryColor = (arg: {
    error: boolean | undefined;
    backgroundColor: string | undefined;
    theme: DefaultTheme;
    disabled?: boolean;
}) => {
    if (arg.disabled) {
        return adjust(arg.theme.general.color.disabled, -30);
    }

    if (arg.error) {
        const errorColor = adjust("#ff0000", -30);
        return errorColor;
    }

    if (arg.backgroundColor) {
        return handleCustomColor(arg.backgroundColor).customTertiaryColor;
    }

    return arg.theme.textInput.color.main?.normal?.tertiary;
};

export const StyledPixelBoxWrapper = Styled.div`
    display: flex;
`;

export const StyledPixelBoxSideWrapper = Styled.div`
    display: flex;
    align-items: center;
`;

export const StyledPixelBoxSideFirst = Styled.div`
    display: flex;
    width: 3px;
    background: black;
    height: calc(100% - 12px);
`;

export const StyledPixelBoxSideSecond = Styled.div`
    display: flex;
    width: 3px;
    height: calc(100% - 12px);
    border-top: 3px solid ${(props) =>
        props.theme.textInput.color.main?.normal?.border};
    border-bottom: 3px solid ${(props) =>
        props.theme.textInput.color.main?.normal?.border};
`;

export const StyledPixelBoxSideSecondInnerLeft = Styled.div<{
    $type?: string;
    $backgroundColor?: string;
    $error?: boolean;
    $disabled?: boolean;
}>`
    display: flex;
    width: 100%;
    border-bottom: 3px solid ${(props) =>
        handleTertiaryColor({
            error: props.$error,
            backgroundColor: props.$backgroundColor,
            theme: props.theme,
            disabled: props.$disabled,
        })};
    background: ${(props) =>
        handleSecondaryColor({
            error: props.$error,
            backgroundColor: props.$backgroundColor,
            theme: props.theme,
            disabled: props.$disabled,
        })};
`;

export const StyledPixelBoxSideSecondInnerRight = Styled.div<{
    $type?: string;
    $backgroundColor?: string;
    $error?: boolean;
    $disabled?: boolean;
}>`
    display: flex;
    width: 100%;
    border-top: 3px solid ${(props) =>
        handleSecondaryColor({
            error: props.$error,
            backgroundColor: props.$backgroundColor,
            theme: props.theme,
            disabled: props.$disabled,
        })};
    background: ${(props) =>
        handleTertiaryColor({
            error: props.$error,
            backgroundColor: props.$backgroundColor,
            theme: props.theme,
            disabled: props.$disabled,
        })};
`;

export const StyledPixelBoxContentOuter = Styled.div`
    display: flex;
    border-top: 3px solid ${(props) =>
        props.theme.textInput.color.main?.normal?.border};
    border-bottom: 3px solid ${(props) =>
        props.theme.textInput.color.main?.normal?.border};
`;

export const StyledPixelBoxContentInner = Styled.div<{
    $backgroundColor?: string;
    $error?: boolean;
    $disabled?: boolean;
}>`
    display: flex;
    border-top: 3px solid ${(props) =>
        handleSecondaryColor({
            error: props.$error,
            backgroundColor: props.$backgroundColor,
            theme: props.theme,
            disabled: props.$disabled,
        })};
    border-bottom: 3px solid ${(props) =>
        handleTertiaryColor({
            error: props.$error,
            backgroundColor: props.$backgroundColor,
            theme: props.theme,
            disabled: props.$disabled,
        })};
`;
