import type { Meta } from "@storybook/react-vite";
import { Switch } from ".";

const meta = {
    title: "Pixel Component/Switch",
    component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;

export const SwitchMain = {
    args: {
        inputName: "name",
        label: "Note",
        type: "main",
    },
};

export const SwitchInline = {
    args: {
        inputName: "name",
        label: "Note",
        type: "inline",
    },
};

export const SwitchDefaultCheckedTrue = {
    args: {
        inputName: "name",
        label: "Note",
        type: "main",
        defaultChecked: true,
    },
};

export const SwitchNoLabel = {
    args: {
        inputName: "name",
        label: "Note",
        type: "main",
        noLabel: true,
    },
};

export const SwitchCustomBackground = {
    args: {
        inputName: "name",
        label: "Note",
        type: "main",
        noLabel: true,
        backgroundColor: "#05EB57",
    },
};
