import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Select } from '@components/index';

// Mocks
import { SOCIAL_PLATFORM_OPTIONS } from '@mocks/select';

const meta: Meta<typeof Select> = {
  title: 'Custom Components/Select',
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    options: SOCIAL_PLATFORM_OPTIONS,
  },
};

export const Secondary: Story = {
  args: {
    options: SOCIAL_PLATFORM_OPTIONS,
    variant: 'secondary',
  },
};

export const NoBorder: Story = {
  args: {
    options: SOCIAL_PLATFORM_OPTIONS,
    variant: 'no-border',
  },
};

export const NoBackground: Story = {
  args: {
    options: SOCIAL_PLATFORM_OPTIONS,
    variant: 'no-background',
  },
};
