import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from ".";

const meta = {
    title: "Pixel Component/Select",
    component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
    {
        label: "Car",
        value: "car",
    },
    {
        label: "Lorry",
        value: "lorry",
    },
    {
        label: "Bike",
        value: "bike",
    },
    {
        label: "Motorbike",
        value: "motorbike",
    },
];

export const SelectMain = {
    args: {
        type: "main",
        options,
        display: "Vehicle",
        selectName: "my-select",
        selectLabel: "My Select",
    },
};

export const SelectInLine = {
    args: {
        type: "inline",
        options,
        display: "Vehicle",
        selectName: "my-select",
        selectLabel: "My Select",
    },
};

export const SelectNoLabel = {
    args: {
        type: "inline",
        options,
        display: "Vehicle",
        selectName: "my-select",
        selectLabel: "My Select",
        noLabel: true,
    },
};

export const SelectDisable = {
    args: {
        type: "main",
        options,
        display: "Vehicle",
        selectName: "my-select",
        selectLabel: "My Select",
        disabled: true,
    },
};

export const SelectError = {
    args: {
        type: "main",
        options,
        display: "Vehicle",
        selectName: "my-select",
        selectLabel: "My Select",
        error: "Error message",
    },
};

export const SelectCustomBackground = {
    args: {
        type: "main",
        display: "Vehicle",
        backgroundColor: "#b13737",
        options,
        selectName: "my-select",
        selectLabel: "My Select",
    },
};

export const SelectLightStyle: Story = {
    decorators: [
        (Story) => (
            <div style={{ backgroundColor: "black", padding: "10px" }}>
                <Story />
            </div>
        ),
    ],
    args: {
        type: "main",
        display: "Vehicle",
        backgroundColor: "#b13737",
        options,
        selectName: "my-select",
        selectLabel: "My Select",
        selectStyle: "light",
    },
};
