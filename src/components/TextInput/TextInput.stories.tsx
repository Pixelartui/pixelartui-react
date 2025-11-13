import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextInput } from ".";

const meta = {
    title: "Pixel Component/TextInput",
    component: TextInput,
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInputMain = {
    args: {
        inputName: "name",
        type: "main",
        textLabel: "The Label",
    },
};

export const TextInputCustomWidthAndHeight = {
    args: {
        inputName: "name",
        type: "main",
        textLabel: "The Label",
        width: "400px",
        height: "200px",
    },
};

export const TextInputFullwidth = {
    args: {
        inputName: "name",
        type: "main",
        textLabel: "The Label",
        fullwidth: true,
    },
};

export const TextInputPlaceholder = {
    args: {
        inputName: "name",
        type: "main",
        textLabel: "The Label",
        placeholder: "The Placeholder",
    },
};

export const TextInputInline = {
    args: {
        inputName: "name",
        type: "inline",
        textLabel: "The Inline",
    },
};

export const TextInputNoLabel = {
    args: {
        inputName: "name",
        type: "main",
        textLabel: "The Label",
        noLabel: true,
    },
};

export const TextInputError = {
    args: {
        inputName: "name",
        type: "main",
        textLabel: "The Label",
        error: true,
        helperText: "Error message",
    },
};

export const TextInputDisabled = {
    args: {
        inputName: "name",
        type: "main",
        textLabel: "The Label",
        disabled: true,
    },
};

export const TextInputCustomColor = {
    args: {
        inputName: "name",
        type: "main",
        backgroundColor: "#b13737",
    },
};

export const InputLightStyle: Story = {
    decorators: [
        (Story) => (
            <div style={{ backgroundColor: "black", padding: "10px" }}>
                <Story />
            </div>
        ),
    ],
    args: {
        inputName: "name",
        type: "main",
        inputStyle: "light",
    },
};
