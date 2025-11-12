import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextArea } from ".";

const meta = {
    title: "Pixel Component/TextArea",
    component: TextArea,
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextAreaMain = {
    args: {
        inputName: "name",
        label: "Note",
        helperText: "I need help",
        type: "main",
    },
};

export const TextAreaInline = {
    args: {
        inputName: "name",
        label: "Note",
        helperText: "I need help",
        type: "inline",
    },
};

export const TextAreaPlaceholder = {
    args: {
        inputName: "name",
        label: "Note",
        helperText: "I need help",
        type: "main",
        placeholder: "Write here",
    },
};

export const TextAreaNolabel = {
    args: {
        inputName: "name",
        label: "Note",
        helperText: "I need help",
        type: "main",
        placeholder: "Write here",
        noLabel: true,
    },
};

export const TextAreaError = {
    args: {
        inputName: "name",
        label: "Note",
        helperText: "I need help",
        type: "main",
        placeholder: "Write here",
        error: true,
    },
};

export const TextAreaDisabled = {
    args: {
        inputName: "name",
        label: "Note",
        helperText: "I need help",
        type: "main",
        placeholder: "Write here",
        disabled: true,
    },
};

export const TextAreaCustomColor = {
    args: {
        inputName: "name",
        label: "Note",
        helperText: "I need help",
        type: "main",
        placeholder: "Write here",
        backgroundColor: "#b13737",
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
        inputName: "name",
        label: "Note",
        helperText: "I need help",
        type: "main",
        placeholder: "Write here",
        backgroundColor: "#b13737",
        textAreaStyle: "light",
    },
};
