import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressBar } from ".";

const meta = {
    title: "Pixel Component/ProgressBar",
    component: ProgressBar,
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProgressBarDefault = {
    args: {
        value: 50,
    },
};

export const ProgressBarWithLabel = {
    args: {
        value: 65,
        label: "Loading...",
    },
};

export const ProgressBarShowValue = {
    args: {
        value: 75,
        label: "Upload Progress",
        showValue: true,
    },
};

export const ProgressBarComplete = {
    args: {
        value: 100,
        label: "Complete",
        showValue: true,
    },
};

export const ProgressBarEmpty = {
    args: {
        value: 0,
        label: "Not started",
        showValue: true,
    },
};

export const ProgressBarCustomMax = {
    args: {
        value: 3,
        max: 5,
        label: "Step 3 of 5",
        showValue: true,
    },
};

export const ProgressBarCustomColors = {
    args: {
        value: 60,
        label: "Custom Colors",
        showValue: true,
        backgroundColor: "#1a1a2e",
        fillColor: "#05EB57",
    },
};

export const ProgressBarLightStyle: Story = {
    decorators: [
        (Story: React.FC) => (
            <div style={{ backgroundColor: "black", padding: "10px" }}>
                <Story />
            </div>
        ),
    ],
    args: {
        value: 40,
        label: "Light Style",
        showValue: true,
        progressBarStyle: "light",
    },
};
