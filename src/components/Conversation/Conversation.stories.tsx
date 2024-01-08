import { StoryObj, Meta } from '@storybook/react';

// Components
import { Conversation } from '@app/components';

// Mocks
import { USER_CHATS } from '@app/mocks';

const meta: Meta<typeof Conversation> = {
  title: 'Custom Components/Conversation',
  tags: ['autodocs'],
  component: Conversation,
  argTypes: {
    filteredMessages: {
      description: 'The filtered messages of the conversation',
    },
    adminName: {
      description: 'The name of the admin',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Conversation>;

export const Default: Story = {
  args: {
    filteredMessages: USER_CHATS,
    adminName: 'John Doe',
  },
};
