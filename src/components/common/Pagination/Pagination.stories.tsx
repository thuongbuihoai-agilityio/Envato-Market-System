import type { Meta, StoryObj } from '@storybook/react';
import Pagination from './index';

// Components

const meta: Meta<typeof Pagination> = {
  title: 'Custom Components/Pagination',
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const WhiteLogo: Story = {
  args: {
    totalCount: 100,
    pageSize: 8
  },
};
