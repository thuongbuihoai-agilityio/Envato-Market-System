import { StoryObj, Meta } from '@storybook/react';
import { theme } from '@chakra-ui/react';

// Components
import { Account } from '@app/assets/icons';

const meta: Meta<typeof Account> = {
  title: 'Icons/Account',
  tags: ['autodocs'],
  component: Account,
  argTypes: {
    color: {
      description: 'Define the color fill for the Account Icon',
    },

    height: {
      description: 'Define the height of the Account Icon',
    },

    width: {
      description: 'Define the width of the Account Icon',
    },

    rotate: {
      description: 'Define the rotation degree of the Account Icon',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Account>;

export const Default: Story = {
  args: {
    color: theme.colors.gray[800],
  },
};
