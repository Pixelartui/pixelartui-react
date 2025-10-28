import type { Meta } from "@storybook/react-vite";
import { StyledLabel } from ".";

const meta = {
    title: "Shared Component/StyledLabel",
    component: StyledLabel,
} satisfies Meta<typeof StyledLabel>;

export default meta;

export const styledLabel = {
    args: {
        text: "The Label",
        name: "label",
    },
};
