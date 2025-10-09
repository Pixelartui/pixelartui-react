import type { Meta} from '@storybook/react-vite'
import {Button} from ".";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

export const ButtonMain = {
  args: {
    text: "Main",
    buttonSize: 'medium',
    buttonType: 'main'
  }
};

export const ButtonOutline = {
  args: {
    text: "Outline",
    buttonSize: 'medium',
    buttonType: 'outline'
  }
};

export const ButtonSmall = {
  args: {
    text: "Small",
    buttonSize: 'small',
    buttonType: 'main'
  }
};

export const ButtonMedium = {
  args: {
    text: "Medium",
    buttonSize: 'medium',
    buttonType: 'main'
  }
};

export const ButtonLarge = {
  args: {
    text: "Large",
    buttonSize: 'large',
    buttonType: 'main'
  }
};

export const ButtonFullwidth = {
  args: {
    text: "Full width",
    buttonSize: 'medium',
    buttonType: 'main',
    fullwidth: true,
  }
};

export const ButtonRound = {
  args: {
    text: "Round",
    buttonSize: 'medium',
    buttonType: 'main',
    round: true,
  }
};

export const ButtonCustomColor = {
  args: {
    text: "Custom color",
    buttonSize: 'medium',
    buttonType: 'main',
    backgroundColor: '#05EB57',
  }
};


