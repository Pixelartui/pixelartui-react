import type { Meta } from '@storybook/react-vite'
import {StyledContainer} from ".";

const meta = {
    title: 'Shared Component/StyledContainer',
    component: StyledContainer,
} satisfies Meta<typeof StyledContainer>;

export default meta;

export const styledContainer = {
  args: {
    children: <div>Child</div>,
  }
};