import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from ".";
import { fn } from "storybook/test";

const meta = {
    title: "Pixel Component/Alert",
    component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AlertInfo = {
    args: {
        message: "This is an informational alert.",
        variant: "info",
    },
};

export const AlertSuccess = {
    args: {
        message: "Operation completed successfully!",
        variant: "success",
    },
};

export const AlertWarning = {
    args: {
        message: "Please review before proceeding.",
        variant: "warning",
    },
};

export const AlertError = {
    args: {
        message: "Something went wrong. Please try again.",
        variant: "error",
    },
};

export const AlertWithTitle = {
    args: {
        title: "Heads up!",
        message: "This alert has a title and a message.",
        variant: "info",
    },
};

export const AlertDismissible = {
    args: {
        message: "You can dismiss this alert.",
        variant: "success",
        dismissible: true,
        onDismiss: fn(),
    },
};

export const AlertLightStyle: Story = {
    decorators: [
        (Story: React.FC) => (
            <div style={{ backgroundColor: "black", padding: "10px" }}>
                <Story />
            </div>
        ),
    ],
    args: {
        message: "Light style alert on dark background.",
        variant: "info",
        alertStyle: "light",
    },
};
