import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from ".";
import { fn } from "storybook/test";

const meta = {
    title: "Pixel Component/Accordion",
    component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
    { title: "Section 1", content: <div>Content for section 1</div> },
    { title: "Section 2", content: <div>Content for section 2</div> },
    { title: "Section 3", content: <div>Content for section 3</div> },
];

export const AccordionDefault = {
    args: {
        items: sampleItems,
        onChange: fn(),
    },
};

export const AccordionDefaultOpen = {
    args: {
        items: sampleItems,
        defaultOpenIndexes: [0],
        onChange: fn(),
    },
};

export const AccordionMultiple = {
    args: {
        items: sampleItems,
        allowMultiple: true,
        defaultOpenIndexes: [0, 2],
        onChange: fn(),
    },
};

export const AccordionWithDisabled = {
    args: {
        items: [
            { title: "Section 1", content: <div>Content for section 1</div> },
            {
                title: "Section 2 (Disabled)",
                content: <div>Content for section 2</div>,
                disabled: true,
            },
            { title: "Section 3", content: <div>Content for section 3</div> },
        ],
        onChange: fn(),
    },
};

export const AccordionCustomBackground = {
    args: {
        items: sampleItems,
        backgroundColor: "#05EB57",
        onChange: fn(),
    },
};

export const AccordionLightStyle: Story = {
    decorators: [
        (Story: React.FC) => (
            <div style={{ backgroundColor: "black", padding: "10px" }}>
                <Story />
            </div>
        ),
    ],
    args: {
        items: [
            {
                title: "Section 1",
                content: (
                    <div style={{ color: "white" }}>Content for section 1</div>
                ),
            },
            {
                title: "Section 2",
                content: (
                    <div style={{ color: "white" }}>Content for section 2</div>
                ),
            },
        ],
        accordionStyle: "light",
        onChange: fn(),
    },
};
