import { StoryObj, Meta } from '@storybook/react';

// Components
import UserCard from '.';

// Mocks
import { USER_MOCK } from '@app/mocks';

const meta: Meta<typeof UserCard> = {
  title: 'Custom Components/UserCard',
  tags: ['autodocs'],
  component: UserCard,
  argTypes: {
    user: {
      description: 'Information of user',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof UserCard>;

export const Default: Story = {
  args: {
    user: USER_MOCK,
  },
};
