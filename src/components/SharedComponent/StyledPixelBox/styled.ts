import Styled, { DefaultTheme } from "styled-components";
import { adjust, handleCustomColor } from "../../../Theme/helper";
import { StyledPixelBoxType } from "./types";

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

export const StyledPixelBoxWrapper = Styled.div<{
    $width?: string;
    $height?: string;
    $fullwidth?: boolean;
}>`
    display: flex;
    ${(props) => (props.$height ? `height: ${props.$height}` : "")};
    ${(props) =>
        props.$fullwidth
            ? "width: 100%"
            : props.$width
            ? `width: ${props.$width}`
            : ""};
`;

export const StyledPixelBoxSideWrapper = Styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
`;

export const StyledPixelBoxSideFirst = Styled.div<{
    $type: StyledPixelBoxType;
}>`
    display: flex;
    width: 3px;
    background: ${(props) =>
        props.$type === "dark"
            ? props.theme.general.color.dark
            : props.theme.general.color.light};
    height: calc(100% - 12px);
`;

export const StyledPixelBoxSideRoundFirst = Styled(StyledPixelBoxSideFirst)`
    height: calc(100% - 18px);
`;

export const StyledPixelBoxSideSecond = Styled.div<{
    $type: StyledPixelBoxType;
}>`
    display: flex;
    width: 3px;
    box-sizing: border-box;
    height: calc(100% - 6px);
    border-top: 3px solid ${(props) =>
        props.$type === "dark"
            ? props.theme.general.color.dark
            : props.theme.general.color.light};
    border-bottom: 3px solid ${(props) =>
        props.$type === "dark"
            ? props.theme.general.color.dark
            : props.theme.general.color.light};
`;

export const StyledPixelBoxSideRoundThird = Styled(StyledPixelBoxSideSecond)`
    
`;

export const StyledPixelBoxSideRoundSecond = Styled(StyledPixelBoxSideSecond)`
   
    height: calc(100% - 12px);
    
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

export const StyledPixelBoxSideRoundThirdInnerLeft = Styled(
    StyledPixelBoxSideSecondInnerLeft
)<{
    $type?: string;
    $backgroundColor?: string;
    $error?: boolean;
    $disabled?: boolean;
}>`
    border-top: 3px solid ${(props) =>
        handleSecondaryColor({
            error: props.$error,
            backgroundColor: props.$backgroundColor,
            theme: props.theme,
            disabled: props.$disabled,
        })};
    background: transparent;
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

export const StyledPixelBoxSideRoundThirdInnerRight = Styled(
    StyledPixelBoxSideSecondInnerRight
)<{
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
    background: transparent;
`;

export const StyledPixelBoxContentOuter = Styled.div<{
    $type: StyledPixelBoxType;
}>`
    display: flex;
    border-top: 3px solid ${(props) =>
        props.$type === "dark"
            ? props.theme.general.color.dark
            : props.theme.general.color.light};
    border-bottom: 3px solid ${(props) =>
        props.$type === "dark"
            ? props.theme.general.color.dark
            : props.theme.general.color.light};
    width: 100%;
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
    width: 100%;

`;
