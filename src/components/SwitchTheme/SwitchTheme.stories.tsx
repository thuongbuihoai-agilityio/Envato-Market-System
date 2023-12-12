import { StoryObj, Meta } from '@storybook/react';

import SwitchTheme from '.';

const meta: Meta<typeof SwitchTheme> = {
  title: 'Custom Components/SwitchTheme',
  tags: ['autodocs'],
  component: SwitchTheme,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof SwitchTheme>;

export const Default: Story = {};
