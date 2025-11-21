import type { Meta } from "@storybook/react-vite";
import { Pixel } from ".";

const meta = {
    title: "Pixel Component/Pixel",
    component: Pixel,
} satisfies Meta<typeof Pixel>;

export default meta;

export const PixelSolid = {
    args: {
        width: "20px",
        height: "20px",
    },
};
