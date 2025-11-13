import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from ".";

const meta = {
    title: "Pixel Component/Box",
    component: Box,
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BoxMain = {
    args: {
        children: <div>This the children</div>,
    },
};

export const BoxCustomWidthAndHeight = {
    args: {
        children: <div>This the children</div>,
        width: "200px",
        height: "300px",
    },
};

export const BoxFullwidth = {
    args: {
        children: <div>This the children</div>,
        fullwidth: true,
    },
};

export const boxLight: Story = {
    decorators: [
        (Story) => (
            <div style={{ backgroundColor: "black", padding: "10px" }}>
                <Story />
            </div>
        ),
    ],
    args: {
        children: <div style={{ color: "white" }}>This the children</div>,
        boxStyle: "light",
    },
};
