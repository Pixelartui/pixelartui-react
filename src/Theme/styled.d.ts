import "styled-components";
import { ButtonType } from "../components/Button/types";
import { SelectType } from "../components/Select/types";

interface FontColor {
    bright: string;
    dark: string;
}

interface ComponentColorProp {
    primary: string;
    secondary: string;
    tertiary: string;
    font: FontColor;
    border: string;
}

interface ComponentSizeProp {
    width: string;
    height: string;
    fontSize: string;
}

interface ComponentSizes {
    small?: ComponentSizeProp;
    medium?: ComponentSizeProp;
    large?: ComponentSizeProp;
    free?: ComponentSizeProp;
}

type ComponentTypes = ButtonType | SelectType;
type ComponentStates = "normal" | "hover";
type ComponentStateProps = {
    [key in ComponentStates]?: ComponentColorProp;
};

type ColorSpec = {
    [key in ComponentTypes]?: ComponentStateProps;
};

interface ComponentSpec {
    color: ColorSpec;
    size: ComponentSizes;
}
declare module "styled-components" {
    export interface DefaultTheme {
        general: {
            color: {
                primary: string;
                secondary: string;
                tertiary: string;
                disabled: string;
                font: string;
                fontLight: string;
                fontDisabled: string;
                dark: string;
                light: string;
                white: string;
                black: string;
            };
        };
        button: ComponentSpec;
        textInput: ComponentSpec;
        select: ComponentSpec;
        switch: ComponentSpec;
        textArea: ComponentSpec;
        modal: ComponentSpec;
        box: ComponentSpec;
    }
}
