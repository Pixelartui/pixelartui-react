import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from ".";
import { fn } from "storybook/test";

const meta = {
    title: "Pixel Component/Tabs",
    component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleTabs = [
    { label: "Tab 1", content: <div>Content for Tab 1</div> },
    { label: "Tab 2", content: <div>Content for Tab 2</div> },
    { label: "Tab 3", content: <div>Content for Tab 3</div> },
];

export const TabsDefault = {
    args: {
        tabs: sampleTabs,
        onChange: fn(),
    },
};

export const TabsWithDefaultActive = {
    args: {
        tabs: sampleTabs,
        defaultActiveIndex: 1,
        onChange: fn(),
    },
};

export const TabsWithDisabled = {
    args: {
        tabs: [
            { label: "Tab 1", content: <div>Content for Tab 1</div> },
            {
                label: "Tab 2 (Disabled)",
                content: <div>Content for Tab 2</div>,
                disabled: true,
            },
            { label: "Tab 3", content: <div>Content for Tab 3</div> },
        ],
        onChange: fn(),
    },
};

export const TabsCustomBackground = {
    args: {
        tabs: sampleTabs,
        backgroundColor: "#05EB57",
        onChange: fn(),
    },
};

export const TabsLightStyle: Story = {
    decorators: [
        (Story: React.FC) => (
            <div style={{ backgroundColor: "black", padding: "10px" }}>
                <Story />
            </div>
        ),
    ],
    args: {
        tabs: [
            {
                label: "Tab 1",
                content: (
                    <div style={{ color: "white" }}>Content for Tab 1</div>
                ),
            },
            {
                label: "Tab 2",
                content: (
                    <div style={{ color: "white" }}>Content for Tab 2</div>
                ),
            },
        ],
        tabsStyle: "light",
        onChange: fn(),
    },
};
