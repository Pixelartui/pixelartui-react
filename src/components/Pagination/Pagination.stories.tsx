import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination } from ".";
import { fn } from "storybook/test";

const meta = {
    title: "Pixel Component/Pagination",
    component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PaginationDefault = {
    args: {
        totalPages: 10,
        onChange: fn(),
    },
};

export const PaginationFewPages = {
    args: {
        totalPages: 3,
        onChange: fn(),
    },
};

export const PaginationWithDefaultPage = {
    args: {
        totalPages: 10,
        defaultPage: 5,
        onChange: fn(),
    },
};

export const PaginationManyPages = {
    args: {
        totalPages: 50,
        defaultPage: 25,
        onChange: fn(),
    },
};

export const PaginationCustomBackground = {
    args: {
        totalPages: 10,
        backgroundColor: "#05EB57",
        onChange: fn(),
    },
};

export const PaginationLightStyle: Story = {
    decorators: [
        (Story: React.FC) => (
            <div style={{ backgroundColor: "black", padding: "10px" }}>
                <Story />
            </div>
        ),
    ],
    args: {
        totalPages: 10,
        paginationStyle: "light",
        onChange: fn(),
    },
};
