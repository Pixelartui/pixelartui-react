import React from "react";
import type { Preview } from "@storybook/react-vite";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../src/Theme";
import "tailwindcss/index.css";

const preview: Preview = {
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Story />
            </ThemeProvider>
        ),
    ],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        options: {
            storySort: {
                method: "alphabetical",
            },
        },
        docs: {
            codePanel: true,
        },
    },
};

export default preview;
