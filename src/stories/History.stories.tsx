import { StoryObj, Meta } from '@storybook/react';

// Components
import { HistoryIcon } from '@app/assets/icons';

const meta: Meta<typeof HistoryIcon> = {
  title: 'Icons/HistoryIcon',
  tags: ['autodocs'],
  component: HistoryIcon,
  argTypes: {},
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof HistoryIcon>;

export const Default: Story = {
  args: {},
};
