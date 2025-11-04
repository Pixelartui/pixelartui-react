import type { Meta } from "@storybook/react-vite";
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
