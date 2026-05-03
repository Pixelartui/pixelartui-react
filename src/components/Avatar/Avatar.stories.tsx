import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from ".";

const meta = {
    title: "Pixel Component/Avatar",
    component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AvatarWithInitials = {
    args: {
        initials: "AB",
        alt: "Alice Bob",
    },
};

export const AvatarSmall = {
    args: {
        initials: "SM",
        size: "small",
        alt: "Small Avatar",
    },
};

export const AvatarLarge = {
    args: {
        initials: "LG",
        size: "large",
        alt: "Large Avatar",
    },
};

export const AvatarDefault = {
    args: {
        alt: "Default Avatar",
    },
};

export const AvatarCustomBackground = {
    args: {
        initials: "CB",
        alt: "Custom Background",
        backgroundColor: "#05EB57",
    },
};

export const AvatarLightStyle: Story = {
    decorators: [
        (Story: React.FC) => (
            <div style={{ backgroundColor: "black", padding: "10px" }}>
                <Story />
            </div>
        ),
    ],
    args: {
        initials: "LS",
        alt: "Light Style Avatar",
        avatarStyle: "light",
    },
};
