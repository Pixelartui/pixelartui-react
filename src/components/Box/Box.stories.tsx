import type { Meta } from "@storybook/react-vite";
import { Box } from ".";

const meta = {
    title: "Pixel Component/Box",
    component: Box,
} satisfies Meta<typeof Box>;

export default meta;

export const SwitchMain = {
    args: {
        children: <div>This the children</div>,
    },
};
