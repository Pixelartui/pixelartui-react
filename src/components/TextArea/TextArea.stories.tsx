import type { Meta} from '@storybook/react-vite'
import {TextArea} from ".";

const meta = {
    title: 'Pixel Component/TextArea',
    component: TextArea,
} satisfies Meta<typeof TextArea>;

export default meta;

export const TextInputMain = {
  args: {
    inputName: 'name',
  }
};


