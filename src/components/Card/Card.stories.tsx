import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from ".";

const meta = {
    title: "Pixel Component/Card",
    component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardDefault = {
    args: {
        children: <p>This is a basic card with some content.</p>,
    },
};

export const CardWithTitle = {
    args: {
        title: "Card Title",
        children: <p>This card has a title and body content.</p>,
    },
};

export const CardWithFooter = {
    args: {
        title: "Card Title",
        children: <p>This card has a title, body, and footer.</p>,
        footer: <button style={{ padding: "4px 8px" }}>Action</button>,
    },
};

export const CardCustomBackground = {
    args: {
        title: "Custom Background",
        children: <p>This card has a custom background color.</p>,
        backgroundColor: "#05EB57",
    },
};

export const CardLightStyle: Story = {
    decorators: [
        (Story: React.FC) => (
            <div style={{ backgroundColor: "black", padding: "10px" }}>
                <Story />
            </div>
        ),
    ],
    args: {
        title: "Light Style Card",
        children: (
            <p style={{ color: "white" }}>
                Light style card on dark background.
            </p>
        ),
        cardStyle: "light",
    },
};
