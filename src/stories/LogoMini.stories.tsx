import { StoryObj, Meta } from '@storybook/react';

// Components
import { LogoMiniIcon } from '@app/assets/icons';

const meta: Meta<typeof LogoMiniIcon> = {
  title: 'Icons/LogoMini',
  tags: ['autodocs'],
  component: LogoMiniIcon,
};

export default meta;
type Story = StoryObj<typeof LogoMiniIcon>;

export const Default: Story = {
  args: {},
};
