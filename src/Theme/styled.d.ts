import 'styled-components';


declare module 'styled-components' {
  export interface DefaultTheme {
    button: {
        color: {
            main: {
                normal: {
                    background: string;
                    fontColor: string;
                },
                hover: {
                    background: string;
                    fontColor: string;
                }
            },
            outline: {
                normal: {
                    background: string;
                    fontColor: string;
                },
                hover: {
                    background: string;
                    fontColor: string;
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
