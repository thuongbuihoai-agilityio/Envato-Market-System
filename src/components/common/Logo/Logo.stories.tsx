import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Logo } from '@components/index';

const meta: Meta<typeof Logo> = {
  component: Logo,
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const WhiteLogo: Story = {
  args: {},
};
