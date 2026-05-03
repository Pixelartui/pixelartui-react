import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from ".";

const meta = {
    title: "Pixel Component/Tooltip",
    component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TooltipTop = {
    args: {
        text: "This is a tooltip",
        position: "top",
        children: <button style={{ padding: "8px 16px" }}>Hover me</button>,
    },
};

export const TooltipBottom = {
    args: {
        text: "Bottom tooltip",
        position: "bottom",
        children: <button style={{ padding: "8px 16px" }}>Hover me</button>,
    },
};

export const TooltipLeft = {
    decorators: [
        (Story) => (
            <div style={{ paddingLeft: "200px" }}>
                <Story />
            </div>
        ),
    ],
    args: {
        text: "Left tooltip",
        position: "left",
        children: <button style={{ padding: "8px 16px" }}>Hover me</button>,
    },
};

export const TooltipRight = {
    args: {
        text: "Right tooltip",
        position: "right",
        children: <button style={{ padding: "8px 16px" }}>Hover me</button>,
    },
};

export const TooltipCustomBackground = {
    args: {
        text: "Custom color tooltip",
        position: "top",
        backgroundColor: "#05EB57",
        children: <button style={{ padding: "8px 16px" }}>Hover me</button>,
    },
};

export const TooltipLightStyle: Story = {
    decorators: [
        (Story) => (
            <div style={{ backgroundColor: "black", padding: "40px" }}>
                <Story />
            </div>
        ),
    ],
    args: {
        text: "Light tooltip",
        position: "top",
        tooltipStyle: "light",
        children: (
            <button style={{ padding: "8px 16px", color: "white" }}>
                Hover me
            </button>
        ),
    },
};
