import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from ".";
import { fn } from "storybook/test";

const meta = {
    title: "Pixel Component/Checkbox",
    component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxMain = {
    args: {
        name: "agreement",
        label: "I agree to the terms",
        type: "main",
        onChange: fn(),
    },
};

export const CheckboxInline = {
    args: {
        name: "agreement",
        label: "I agree to the terms",
        type: "inline",
        onChange: fn(),
    },
};

export const CheckboxDefaultCheckedTrue = {
    args: {
        name: "agreement",
        label: "I agree to the terms",
        type: "main",
        defaultChecked: true,
        onChange: fn(),
    },
};

export const CheckboxNoLabel = {
    args: {
        name: "agreement",
        label: "I agree to the terms",
        type: "main",
        noLabel: true,
        onChange: fn(),
    },
};

export const CheckboxDisabled = {
    args: {
        name: "agreement",
        label: "I agree to the terms",
        type: "main",
        disabled: true,
        onChange: fn(),
    },
};

export const CheckboxCustomBackground = {
    args: {
        name: "agreement",
        label: "I agree to the terms",
        type: "main",
        backgroundColor: "#05EB57",
        onChange: fn(),
    },
};

export const CheckboxLightStyle: Story = {
    decorators: [
        (Story) => (
            <div style={{ backgroundColor: "black", padding: "10px" }}>
                <Story />
            </div>
        ),
    ],
    args: {
        name: "agreement",
        label: "I agree to the terms",
        type: "main",
        checkboxStyle: "light",
        backgroundColor: "#05EB57",
        onChange: fn(),
    },
};
