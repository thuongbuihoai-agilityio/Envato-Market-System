import { StoryObj, Meta } from '@storybook/react';

// Components
import Profile from '@app/components/Profile';

const meta: Meta<typeof Profile> = {
  title: 'Custom Components/Profile',
  tags: ['autodocs'],
  component: Profile,
};

type Story = StoryObj<typeof Profile>;

export const Default: Story = {};

export default meta;
