import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Logo } from '@app/components';

const meta: Meta<typeof Logo> = {
  title: 'Custom Components/Logo',
  tags: ['autodocs'],
  component: Logo,
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const WhiteLogo: Story = {
  args: {},
};
