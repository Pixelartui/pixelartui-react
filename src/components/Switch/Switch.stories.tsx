import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from ".";
import { fn } from "storybook/test";

const meta = {
    title: "Pixel Component/Switch",
    component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SwitchMain = {
    args: {
        name: "name",
        label: "Note",
        type: "main",
    },
};

export const SwitchInline = {
    args: {
        name: "name",
        label: "Note",
        type: "inline",
    },
};

export const SwitchDefaultCheckedTrue = {
    args: {
        name: "name",
        label: "Note",
        type: "main",
        defaultChecked: true,
    },
};

export const SwitchNoLabel = {
    args: {
        name: "name",
        label: "Note",
        type: "main",
        noLabel: true,
    },
};

export const SwitchCustomBackground = {
    args: {
        name: "name",
        label: "Note",
        type: "main",
        noLabel: true,
        backgroundColor: "#05EB57",
    },
};

export const SwitchLightStyle: Story = {
    decorators: [
        (Story) => (
            <div style={{ backgroundColor: "black", padding: "10px" }}>
                <Story />
            </div>
        ),
    ],
    args: {
        name: "name",
        label: "Note",
        type: "main",
        noLabel: true,
        backgroundColor: "#05EB57",
        switchStyle: "light",
        onChange: fn(),
    },
};
