import type { Meta} from '@storybook/react-vite'
import {TextInput} from ".";

const meta = {
  component: TextInput,
} satisfies Meta<typeof TextInput>;

export default meta;

export const TextInputMain = {
  args: {
    inputName: 'name',
    type: 'main',
    textLabel: 'The Label',
  }
};

export const TextInputPlaceholder = {
  args: {
    inputName: 'name',
    type: 'main',
    textLabel: 'The Label',
    placeholder: 'The Placeholder',
  }
};


export const TextInputInline = {
  args: {
    inputName: 'name',
    type: 'inline',
    textLabel: 'The Inline',
  }
};

export const TextInputNoLabel = {
  args: {
    inputName: 'name',
    type: 'main',
    textLabel: 'The Label',
    noLabel: true,
  }
};

export const TextInputError = {
  args: {
    inputName: 'name',
    type: 'main',
    textLabel: 'The Label',
    error: 'Error message'
  }
};




export const TextInputCustomColor = {
  args: {
    inputName: 'name',
    type: 'main',
    backgroundColor: '#b13737'
  }
};

