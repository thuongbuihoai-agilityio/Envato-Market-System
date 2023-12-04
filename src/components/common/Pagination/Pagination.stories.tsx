import type { Meta, StoryObj } from '@storybook/react';

// Components
import Pagination from './index';

const meta: Meta<typeof Pagination> = {
  title: 'Custom Components/Pagination',
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const WhiteLogo: Story = {
  args: {
    totalCount: 100,
    pageSize: 8,
  },
};
