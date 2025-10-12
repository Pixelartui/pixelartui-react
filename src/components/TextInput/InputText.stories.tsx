import type { Meta} from '@storybook/react-vite'
import {InputText} from ".";

const meta = {
  component: InputText,
} satisfies Meta<typeof InputText>;

export default meta;

export const InputTextMain = {
  args: {
    type: 'main',
  }
};

export const InputTextCustomColor = {
  args: {
    type: 'main',
    backgroundColor: '#b13737'
  }
};

