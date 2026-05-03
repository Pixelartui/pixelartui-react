import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { ChatPrompt } from ".";

const meta = {
    title: "Pixel Component/ChatPrompt",
    component: ChatPrompt,
} satisfies Meta<typeof ChatPrompt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ChatPromptDefault: Story = {
    args: {
        inputName: "chat",
        onSend: fn(),
    },
};

export const ChatPromptWithPlaceholder: Story = {
    args: {
        inputName: "chat",
        placeholder: "Ask me anything...",
        onSend: fn(),
    },
};

export const ChatPromptFullwidth: Story = {
    args: {
        inputName: "chat",
        fullwidth: true,
        onSend: fn(),
    },
};

export const ChatPromptCustomSize: Story = {
    args: {
        inputName: "chat",
        width: "600px",
        height: "80px",
        onSend: fn(),
    },
};

export const ChatPromptDisabled: Story = {
    args: {
        inputName: "chat",
        disabled: true,
        onSend: fn(),
    },
};

export const ChatPromptCustomColor: Story = {
    args: {
        inputName: "chat",
        backgroundColor: "#b13737",
        onSend: fn(),
    },
};

export const ChatPromptLightStyle: Story = {
    decorators: [
        (Story) => (
            <div style={{ backgroundColor: "black", padding: "10px" }}>
                <Story />
            </div>
        ),
    ],
    args: {
        inputName: "chat",
        chatPromptStyle: "light",
        onSend: fn(),
    },
};
