import type { Meta, StoryObj } from '@storybook/react';

// Components
import { StatusLabel } from '@app/components';

// Interfaces
import { Status } from '@app/interfaces';

const meta: Meta<typeof StatusLabel> = {
  title: 'Custom Components/StatusLabel',
  tags: ['autodocs'],
  component: StatusLabel,
};

export default meta;
type Story = StoryObj<typeof StatusLabel>;

export const FullTime: Story = {
  args: {
    value: Status.FULL_TIME,
  },
};

export const PartTime: Story = {
  args: {
    value: Status.PART_TIME,
  },
};

export const SeniorLevel: Story = {
  args: {
    value: Status.SENIOR_LEVEL,
  },
};

export const JuniorLevel: Story = {
  args: {
    value: Status.JUNIOR_LEVEL,
  },
};

export const Paid: Story = {
  args: {
    value: Status.PAID,
  },
};

export const Unpaid: Story = {
  args: {
    value: Status.UN_PAID,
  },
};

export const Cancelled: Story = {
  args: {
    value: Status.CANCELLED,
  },
};
