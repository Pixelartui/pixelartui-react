import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from ".";
import { fn } from "storybook/test";

const meta = {
    title: "Pixel Component/Radio",
    component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioMain = {
    args: {
        name: "option",
        label: "Select this option",
        value: "option1",
        type: "main",
        onChange: fn(),
    },
};

export const RadioInline = {
    args: {
        name: "option",
        label: "Select this option",
        value: "option1",
        type: "inline",
        onChange: fn(),
    },
};

export const RadioDefaultCheckedTrue = {
    args: {
        name: "option",
        label: "Select this option",
        value: "option1",
        type: "main",
        defaultChecked: true,
        onChange: fn(),
    },
};

export const RadioNoLabel = {
    args: {
        name: "option",
        label: "Select this option",
        value: "option1",
        type: "main",
        noLabel: true,
        onChange: fn(),
    },
};

export const RadioDisabled = {
    args: {
        name: "option",
        label: "Select this option",
        value: "option1",
        type: "main",
        disabled: true,
        onChange: fn(),
    },
};

export const RadioCustomBackground = {
    args: {
        name: "option",
        label: "Select this option",
        value: "option1",
        type: "main",
        backgroundColor: "#05EB57",
        onChange: fn(),
    },
};

export const RadioLightStyle: Story = {
    decorators: [
        (Story) => (
            <div style={{ backgroundColor: "black", padding: "10px" }}>
                <Story />
            </div>
        ),
    ],
    args: {
        name: "option",
        label: "Select this option",
        value: "option1",
        type: "main",
        radioStyle: "light",
        backgroundColor: "#05EB57",
        onChange: fn(),
    },
};
