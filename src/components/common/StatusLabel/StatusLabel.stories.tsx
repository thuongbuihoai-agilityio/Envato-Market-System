import type { Meta, StoryObj } from '@storybook/react';

// Components
import { StatusLabel } from '@components/index';

// Interfaces
import { Status } from '@interfaces/index';

const meta: Meta<typeof StatusLabel> = {
  title: 'Custom Components/StatusLabel',
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
