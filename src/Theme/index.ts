import { DefaultTheme, createGlobalStyle } from 'styled-components';
import PixelifyRegular from '../fonts/PixelifySans-Regular.ttf';
import { adjust } from './helper';


const mainPrimaryColor = '#04A1E1';
const mainSecondaryColor = adjust(mainPrimaryColor, 40);
const mainTertiaryColor = adjust(mainPrimaryColor, -30);
const mainFontColor = '#1C2924';
const mainFontColorContrast = '#ffffff';
const mainBorderColor = '#1C2924';
const outlinePrimaryColor = '#ffffff00';


export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pixelify Sans';
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
                    primary: mainPrimaryColor,
                    secondary: mainSecondaryColor,
                    tertiary: mainTertiaryColor,
                    font: {
                        bright: mainFontColor,
                        dark: mainFontColorContrast,
                    },
                    border: mainBorderColor,
                },
                hover: {
                    primary: adjust(mainPrimaryColor, 5),
                    secondary: mainSecondaryColor,
                    tertiary: mainTertiaryColor,
                    font: {
                        bright: mainFontColor,
                        dark: mainFontColorContrast,
                    },
                    border: mainBorderColor,
                }
            },
            outline: {
                normal: {
                    primary: outlinePrimaryColor,
                    secondary: mainSecondaryColor,
                    tertiary: mainTertiaryColor,
                    font: {
                        bright: mainFontColor,
                        dark: mainFontColorContrast,
                    },
                    border: mainBorderColor,
                },
                hover: {
                    primary: '#96969669',
                    secondary: mainSecondaryColor,
                    tertiary: mainTertiaryColor,
                    font: {
                        bright: mainFontColor,
                        dark: mainFontColorContrast,
                    },
                    border: mainBorderColor,
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