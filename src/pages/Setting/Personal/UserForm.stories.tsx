import type { Meta, StoryObj } from '@storybook/react';

import UserForm from '@pages/Setting/Personal';

const meta: Meta<typeof UserForm> = {
  title: 'Custom Components/UserForm',
  tags: ['autodocs'],
  component: UserForm,
};

export default meta;

type Story = StoryObj<typeof UserForm>;

export const Default: Story = {
  args: {},
};
