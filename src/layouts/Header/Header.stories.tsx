import type { Meta, StoryObj } from '@storybook/react';
import Header from '.';

const meta: Meta<typeof Header> = {
  title: 'Custom Components/Header',
  tags: ['autodocs'],
  component: Header,
  argTypes: {
    name: {
      description: 'The name of the Header',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    name: 'Dashboard',
  },
};
