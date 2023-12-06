import type { Meta, StoryObj } from '@storybook/react';

// Components
import { StatusLabel } from '@components/index';

const meta: Meta<typeof StatusLabel> = {
  title: 'Custom Components/StatusLabel',
  component: StatusLabel,
};

export default meta;
type Story = StoryObj<typeof StatusLabel>;

export const FullTime: Story = {
  args: {
    value: "Full Time",
  },
};

export const PartTime: Story = {
  args: {
    value: "Part Time",
  },
};

export const SeniorLevel: Story = {
  args: {
    value: "Senior Level",
  },
};

export const JuniorLevel: Story = {
  args: {
    value: "Junior Level",
  },
};
