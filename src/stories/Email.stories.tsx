import { StoryObj, Meta } from '@storybook/react';
import { theme } from '@chakra-ui/react';

// Components
import { Email } from '@app/assets/icons';

const meta: Meta<typeof Email> = {
  title: 'Icons/Email',
  tags: ['autodocs'],
  component: Email,
  argTypes: {
    color: {
      description: 'Define the color fill for the Email Icon',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Email>;

export const Default: Story = {
  args: {
    color: theme.colors.gray[800],
  },
};
