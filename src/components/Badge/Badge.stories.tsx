import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from ".";
import { fn } from "storybook/test";

const meta = {
    title: "Pixel Component/Badge",
    component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BadgePrimary = {
    args: {
        text: "Primary",
        variant: "primary",
        size: "medium",
    },
};

export const BadgeSuccess = {
    args: {
        text: "Success",
        variant: "success",
        size: "medium",
    },
};

export const BadgeError = {
    args: {
        text: "Error",
        variant: "error",
        size: "medium",
    },
};

export const BadgeWarning = {
    args: {
        text: "Warning",
        variant: "warning",
        size: "medium",
    },
};

export const BadgeInfo = {
    args: {
        text: "Info",
        variant: "info",
        size: "medium",
    },
};

export const BadgeSmall = {
    args: {
        text: "Small Badge",
        variant: "primary",
        size: "small",
    },
};

export const BadgeLarge = {
    args: {
        text: "Large Badge",
        variant: "primary",
        size: "large",
    },
};

export const BadgeDismissible = {
    args: {
        text: "Dismissible",
        variant: "primary",
        size: "medium",
        dismissible: true,
        onDismiss: fn(),
    },
};

export const BadgeDismissibleSuccess = {
    args: {
        text: "Success",
        variant: "success",
        size: "medium",
        dismissible: true,
        onDismiss: fn(),
    },
};

export const BadgeLightStyle: Story = {
    decorators: [
        (Story) => (
            <div style={{ backgroundColor: "black", padding: "10px" }}>
                <Story />
            </div>
        ),
    ],
    args: {
        text: "Light Badge",
        variant: "primary",
        size: "medium",
        badgeStyle: "light",
    },
};

export const BadgeDismissibleLightStyle: Story = {
    decorators: [
        (Story) => (
            <div style={{ backgroundColor: "black", padding: "10px" }}>
                <Story />
            </div>
        ),
    ],
    args: {
        text: "Light",
        variant: "info",
        size: "medium",
        badgeStyle: "light",
        dismissible: true,
        onDismiss: fn(),
    },
};
