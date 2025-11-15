import type { Preview } from "@storybook/react-vite";
import "tailwindcss/index.css";

const preview: Preview = {
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
