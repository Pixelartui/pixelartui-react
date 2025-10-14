import 'styled-components';

interface FontColor {
    bright: string;
    dark: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    general: {
        color: {
            white: string;
            black: string;
        }
    }
    button: {
        color: {
            main: {
                normal: {
                    primary: string;
                    secondary: string;
                    tertiary: string;
                    font: FontColor;
                    border: string;
                },
                hover: {
                    primary: string;
                    secondary: string;
                    tertiary: string;
                    font: FontColor;
                    border: string;
                }
            },
            outline: {
                normal: {
                    primary: string;
                    secondary: string;
                    tertiary: string;
                    font: FontColor;
                    border: string;
                },
                hover: {
                    primary: string;
                    secondary: string;
                    tertiary: string;
                    font: FontColor;
                    border: string;
                }
            },
        },
        size: {
            small: {
                width: string;
                height: string;
                fontSize: string;
            },
            medium: {
                width: string;
                height: string;
                fontSize: string;
            },
            large: {
                width: string;
                height: string;
                fontSize: string;
            },
        }
    },
    textInput: {
        color: {
            primary: string;
            secondary: string;
            tertiary: string;
            font: FontColor;
            border: string;
        },
        size: {
            width: string;
            height: string;
            fontSize: string;
        },
    }
  }
}
