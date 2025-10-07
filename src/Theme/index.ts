import { DefaultTheme, createGlobalStyle } from 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const PixelifyRegular = require('../fonts/PixelifySans-Regular.ttf');

const mainColor = '#1976d2';
const mainFontColor = '#ffffff';
const outlineFontColor = '#1976d2';


export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pixelify';
        font-weight: normal;
        font-style: normal;
        font-display: swap;
        src: url(${PixelifyRegular});
        src: url(${PixelifyRegular}) format('truetype');
    }
`;

export const theme: DefaultTheme = {
    button: {
        color: {
            main: {
                normal: {
                    background: mainColor,
                    fontColor: mainFontColor,
                },
                hover: {
                    background: '#000000',
                    fontColor: mainFontColor,
                }
            },
            outline: {
                normal: {
                    background: 'transparent',
                    fontColor: outlineFontColor,
                },
                hover: {
                    background: 'lightgrey',
                    fontColor: outlineFontColor,
                    border: mainColor,
                }
            }
        },
        size: {
            small: {
                width: '60px',
                height: '30px',
                fontSize: '20px',
            },
            medium: {
                width: '100px',
                height: '35px',
                fontSize: '24px',
            },
            large: {
                width: '150px',
                height: '40px',
                fontSize: '28px',
            },
        }
    },
}