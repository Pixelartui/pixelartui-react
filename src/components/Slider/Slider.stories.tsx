import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slider } from ".";
import { fn } from "storybook/test";

const meta = {
    title: "Pixel Component/Slider",
    component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SliderMain = {
    args: {
        name: "volume",
        label: "Volume",
        type: "main",
        onChange: fn(),
    },
};

export const SliderInline = {
    args: {
        name: "volume",
        label: "Volume",
        type: "inline",
        onChange: fn(),
    },
};

export const SliderWithDefaultValue = {
    args: {
        name: "brightness",
        label: "Brightness",
        type: "main",
        defaultValue: 75,
        onChange: fn(),
    },
};

export const SliderCustomRange = {
    args: {
        name: "temperature",
        label: "Temperature",
        type: "main",
        min: 0,
        max: 50,
        step: 5,
        defaultValue: 25,
        onChange: fn(),
    },
};

export const SliderNoLabel = {
    args: {
        name: "volume",
        label: "Volume",
        type: "main",
        noLabel: true,
        onChange: fn(),
    },
};

export const SliderHideValue = {
    args: {
        name: "volume",
        label: "Volume",
        type: "main",
        showValue: false,
        onChange: fn(),
    },
};

export const SliderDisabled = {
    args: {
        name: "volume",
        label: "Volume",
        type: "main",
        defaultValue: 50,
        disabled: true,
        onChange: fn(),
    },
};

export const SliderCustomBackground = {
    args: {
        name: "volume",
        label: "Volume",
        type: "main",
        backgroundColor: "#05EB57",
        defaultValue: 60,
        onChange: fn(),
    },
};

export const SliderLightStyle: Story = {
    decorators: [
        (Story) => (
            <div style={{ backgroundColor: "black", padding: "10px" }}>
                <Story />
            </div>
        ),
    ],
    args: {
        name: "volume",
        label: "Volume",
        type: "main",
        sliderStyle: "light",
        defaultValue: 40,
        onChange: fn(),
    },
};
