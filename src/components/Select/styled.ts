import Styled from "styled-components";
import { StyledContainer } from "../SharedComponent/StyledContainer";
import {
    adjust,
    getContrastColor,
    handleCustomColor,
} from "../../Theme/helper";
import { DefaultTheme } from "styled-components/dist/types";
import { StyledLabel } from "../SharedComponent/StyledLabel";

const handleBackgroundColor = (
    backgroundColor: string | undefined,
    disabled: boolean | undefined,
    theme: DefaultTheme
) => {
    if (disabled) {
        return theme.general.color.disabled;
    }

    if (backgroundColor) {
        return backgroundColor;
    }

    return theme.general.color.white;
};

const handleFontColor = (
    bgColor: string | undefined,
    darkColor: string | undefined,
    brightColor: string | undefined
) => {
    if (!bgColor || !darkColor || !brightColor) return;

    return getContrastColor(bgColor, darkColor, brightColor);
};

export const StyledSelectContainer = Styled(StyledContainer)<{
    $type: "main" | "inline";
    $disabled?: boolean;
}>`
    display: flex;
    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
    flex-direction: ${(props) => (props.$type === "main" ? "column" : "row")};

`;

export const StyledSelectWrapper = Styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyleSelectDisplay = Styled.div<{
    $backgroundColor?: string;
    $disabled?: boolean;
}>`
    display: flex;

    .cp-pixel-box-wrapper,
    .cp-pixel-box-outer,
    .cp-pixel-box-content-inner {
        width: 100%;
    }

    .cp-pixel-box-content-inner {
        width: ${(props) => props.theme.select.size.free?.width};
        height: ${(props) => props.theme.select.size.free?.height};
        align-items: center;
        padding: 0 5px;
        text-wrap-mode: nowrap;
        background: ${(props) =>
            handleBackgroundColor(
                props.$backgroundColor,
                props.$disabled,
                props.theme
            )};
        color: ${(props) =>
            props.$disabled
                ? props.theme.general.color.fontDisabled
                : handleFontColor(
                      props.$backgroundColor
                          ? props.$backgroundColor
                          : props.theme.general.color.white,
                      props.theme.textInput.color.main?.normal?.font.dark,
                      props.theme.textInput.color.main?.normal?.font.bright
                  )};
        justify-content: space-between;
    }   
`;

export const StyledSelectDisplayText = Styled.div`
    display: flex;
`;

export const StyleSelectDropdown = Styled.div<{
    $open: boolean;
    $backgroundColor?: string;
    $disabled?: boolean;
}>`
    display: ${(props) => (props.$open ? "block" : "none")};
    transition: visibility .3s ease-out;
    .cp-pixel-box-wrapper,
    .cp-pixel-box-outer,
    .cp-pixel-box-content-inner {
        width: 100%;
    }

    .cp-pixel-box-content-inner {
        width: ${(props) => props.theme.select.size.free?.width};
        min-height: ${(props) => props.theme.select.size.free?.height};
        width: 100%;
        background: ${(props) =>
            handleBackgroundColor(
                props.$backgroundColor,
                props.$disabled,
                props.theme
            )};
        color: ${(props) =>
            handleFontColor(
                props.$backgroundColor
                    ? props.$backgroundColor
                    : props.theme.general.color.white,
                props.theme.textInput.color.main?.normal?.font.dark,
                props.theme.textInput.color.main?.normal?.font.bright
            )}
    }   
`;

export const StyledOptionsWrapper = Styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const StyledSelectOption = Styled.div<{
    $backgroundColor?: string;
    $selectedOption: string | null;
    $value: string;
    $disabled: boolean | undefined;
}>`
    padding: 5px;
    cursor: pointer;
    background: ${(props) =>
        props.$backgroundColor
            ? props.$selectedOption === props.$value
                ? adjust(props.$backgroundColor, 40)
                : props.$backgroundColor
            : props.$selectedOption === props.$value
            ? props.theme.select.color.main?.normal?.secondary
            : props.theme.general.color.white};

    &:hover {
        background: ${(props) =>
            props.$backgroundColor
                ? handleCustomColor(props.$backgroundColor).customSecondaryColor
                : props.theme.select.color.main?.hover?.secondary}
    }
`;

export const StyledSelectLabel = Styled(StyledLabel)<{
    $type: "main" | "inline";
}>`
    display: flex;
    align-items: ${(props) =>
        props.$type === "main" ? "center" : "flex-start"};
    padding: ${(props) => (props.$type === "main" ? "5px" : "10px 5px")};;
`;

export const StyledSelectIconContainer = Styled.div<{
    $open: boolean;
}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: ${(props) => (props.$open ? "rotate(180deg)" : "rotate(0)")};
    transition: transform .4s ease;
`;

export const StyledSelectIconRow = Styled.div`
    display: flex;
    justi-content: center;
    align-items: center;
`;

export const StyledSelectIconPixel = Styled.div`
    width: 3px;
    height: 3px;
    background: ${(props) => props.theme.select.color.main?.normal?.border};
`;
