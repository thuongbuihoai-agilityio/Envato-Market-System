import { StoryObj, Meta } from '@storybook/react';
import { Box, theme, useColorModeValue } from '@chakra-ui/react';

// Components
import { Account } from '@app/components/Icons';

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
  decorators: [
    (Story) => (
      <Box bg="background.component.primary">
        <Story />
      </Box>
    ),
  ],
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
  render: function Render(props) {
    const colorFill = useColorModeValue(
      theme.colors.gray[800],
      theme.colors.white,
    );

    return <Account {...props} color={colorFill} />;
  },
};
