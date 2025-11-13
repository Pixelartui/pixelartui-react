import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from ".";
import { fn } from "storybook/test";

const meta = {
    title: "Pixel Component/Button",
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonMain = {
    args: {
        text: "Main",
        buttonSize: "medium",
        buttonType: "main",
        onClick: fn(),
    },
};

export const ButtonOutline = {
    args: {
        text: "Outline",
        buttonSize: "medium",
        buttonType: "outline",
        round: false,
    },
};

export const ButtonSmall = {
    args: {
        text: "Small",
        buttonSize: "small",
        buttonType: "main",
    },
};

export const ButtonMedium = {
    args: {
        text: "Medium",
        buttonSize: "medium",
        buttonType: "main",
    },
};

export const ButtonLarge = {
    args: {
        text: "Large",
        buttonSize: "large",
        buttonType: "main",
    },
};

export const ButtonFullwidth = {
    args: {
        text: "Full width",
        buttonSize: "medium",
        buttonType: "main",
        fullwidth: true,
    },
};

export const ButtonRound = {
    args: {
        text: "Round",
        buttonSize: "medium",
        buttonType: "main",
        round: true,
    },
};

export const ButtonDisabled = {
    args: {
        text: "Disabled",
        buttonSize: "medium",
        buttonType: "main",
        disabled: true,
    },
};

export const ButtonCustomColor = {
    args: {
        text: "Custom color",
        buttonSize: "medium",
        buttonType: "main",
        backgroundColor: "#05EB57",
    },
};

export const ButtonLightStyle: Story = {
    decorators: [
        (Story) => (
            <div
                style={{
                    backgroundColor: "black",
                    padding: "10px",
                    display: "flex",
                }}
            >
                <Story />
            </div>
        ),
    ],
    args: {
        buttonStyle: "light",
        text: "Custom color",
        buttonSize: "medium",
        buttonType: "main",
        onClick: fn(),
    },
};

export const ButtonCustomSize = {
    args: {
        text: "Main",
        buttonSize: "medium",
        buttonType: "main",
        width: "150px",
        height: "80px",
        onClick: fn(),
    },
};
