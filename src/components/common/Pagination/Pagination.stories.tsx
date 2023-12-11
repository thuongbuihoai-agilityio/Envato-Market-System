import type { Meta, StoryObj } from '@storybook/react';

// Components
import Pagination from '.';

const meta: Meta<typeof Pagination> = {
  title: 'Custom Components/Pagination',
  tags: ['autodocs'],
  component: Pagination,
  argTypes: {
    pageSize: {
      description: 'The number of item to display in one page',
    },

    totalCount: {
      description: 'The total number of pages',
    },

    onPageChange: {
      description: 'The function to be called when changing pages',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    totalCount: 100,
    pageSize: 8,
  },
};
