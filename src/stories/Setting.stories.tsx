import { StoryObj, Meta } from '@storybook/react';

// Components
import { SettingIcon } from '@app/assets/icons';

const meta: Meta<typeof SettingIcon> = {
  title: 'Icons/Setting',
  tags: ['autodocs'],

  component: SettingIcon,
};

export default meta;
type Story = StoryObj<typeof SettingIcon>;

export const Default: Story = {
  args: {},
};
