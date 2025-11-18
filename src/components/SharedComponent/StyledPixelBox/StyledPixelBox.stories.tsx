import type { Meta, StoryObj } from "@storybook/react-vite";
import { StyledPixelBox } from ".";
import { StyledContainer } from "../StyledContainer";

const meta = {
    title: "Shared Component/StyledPixelBox",
    component: StyledPixelBox,
    decorators: [
        (Story) => (
            <StyledContainer testId="test-id">
                <Story />
            </StyledContainer>
        ),
    ],
} satisfies Meta<typeof StyledPixelBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const styledPixelBox = {
    args: {
        children: <div>Pixel Box</div>,
    },
};

export const styledPixelBoxRound = {
    args: {
        children: <div>Pixel Box</div>,
        round: true,
    },
};

export const styledPixelBoxLight: Story = {
    decorators: [
        (Story) => (
            <div style={{ backgroundColor: "black", padding: "10px" }}>
                <Story />
            </div>
        ),
    ],
    args: {
        children: <div style={{ color: "white" }}>Pixel Box</div>,
        style: "light",
    },
};
