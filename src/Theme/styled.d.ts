import 'styled-components';


declare module 'styled-components' {
  export interface DefaultTheme {
    button: {
        color: {
            main: {
                normal: {
                    primary: string;
                    secondary: string;
                    tertiary: string;
                    font: string;
                    border: string;
                },
                hover: {
                    primary: string;
                    secondary: string;
                    tertiary: string;
                    font: string;
                    border: string;
                }
            },
            outline: {
                normal: {
                    primary: string;
                    secondary: string;
                    tertiary: string;
                    font: string;
                    border: string;
                },
                hover: {
                    primary: string;
                    secondary: string;
                    tertiary: string;
                    font: string;
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
  }
}
