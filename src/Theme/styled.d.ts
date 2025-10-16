import 'styled-components';

interface FontColor {
    bright: string;
    dark: string;
}

interface ComponentColorGroup {
    primary: string;
    secondary: string;
    tertiary: string;
    font: FontColor;
    border: string;
}

interface ComponentSizeGroup {
    width: string;
    height: string;
    fontSize: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    general: {
        color: {
            primary: string;
            secondary: string;
            tertiary: string;
            disabled: string;
            font: string;
            fontContrast: string;
            fontDisabled: string;
            white: string;
            black: string;
        }
    }
    button: {
        color: {
            main: {
                normal: ComponentColorGroup,
                hover: ComponentColorGroup
            },
            outline: {
                normal: ComponentColorGroup,
                hover: ComponentColorGroup
            },
        },
        size: {
            small: ComponentSizeGroup,
            medium: ComponentSizeGroup,
            large: ComponentSizeGroup,
        }
    },
    textInput: {
        color: ComponentColorGroup,
        size: ComponentSizeGroup,
    },
    select: {
        color: ComponentColorGroup,
        size: ComponentSizeGroup,
    }
  }
}
