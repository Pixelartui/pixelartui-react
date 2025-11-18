import type { Meta } from "@storybook/react-vite";
import { StyledHelperText } from ".";
import { StyledContainer } from "../StyledContainer";

const meta = {
    title: "Shared Component/StyledHelperText",
    component: StyledHelperText,
    decorators: [
        (Story) => (
            <StyledContainer testId="test-id">
                <Story />
            </StyledContainer>
        ),
    ],
} satisfies Meta<typeof StyledHelperText>;

export default meta;

export const styledHelperText = {
    args: {
        text: "The Label",
        name: "label",
    },
};
