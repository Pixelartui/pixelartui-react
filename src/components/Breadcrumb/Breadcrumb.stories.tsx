import type { Meta, StoryObj } from "@storybook/react-vite";
import { Breadcrumb } from ".";
import { fn } from "storybook/test";

const meta = {
    title: "Pixel Component/Breadcrumb",
    component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BreadcrumbDefault = {
    args: {
        items: [
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Current Page" },
        ],
    },
};

export const BreadcrumbWithOnClick = {
    args: {
        items: [
            { label: "Home", onClick: fn() },
            { label: "Category", onClick: fn() },
            { label: "Current Page" },
        ],
    },
};

export const BreadcrumbCustomSeparator = {
    args: {
        items: [
            { label: "Home", href: "/" },
            { label: "Docs", href: "/docs" },
            { label: "API" },
        ],
        separator: "/",
    },
};

export const BreadcrumbTwoItems = {
    args: {
        items: [{ label: "Home", href: "/" }, { label: "About" }],
    },
};

export const BreadcrumbLightStyle: Story = {
    decorators: [
        (Story: React.FC) => (
            <div style={{ backgroundColor: "black", padding: "10px" }}>
                <Story />
            </div>
        ),
    ],
    args: {
        items: [
            { label: "Home", href: "/" },
            { label: "Settings", href: "/settings" },
            { label: "Profile" },
        ],
        breadcrumbStyle: "light",
    },
};
