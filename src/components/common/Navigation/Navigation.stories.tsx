import type { Meta, StoryObj } from '@storybook/react';
import { Flex, Text } from '@chakra-ui/react';

// components
import { Navigation } from '@app/components';

// Assets
import { DashboardIcon } from '@app/assets/icons';

const meta: Meta<typeof Navigation> = {
  title: 'Custom Components/Navigation',
  tags: ['autodocs'],
  component: Navigation,
  argTypes: {
    children: {
      description:
        'The children of the navigation, e.g. text, react components, etc.',
    },

    destination: {
      description: 'The destination of the navigation component',
      defaultValue: '/',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Mini: Story = {
  args: {
    children: <DashboardIcon />,
  },
};

export const Expanded: Story = {
  args: {
    children: (
      <Flex alignItems="center" justifyContent="space-between">
        <Flex gap={2.5} alignItems="center" justifyContent="space-between">
          <DashboardIcon />

          <Text
            fontSize="lg"
            fontWeight="md"
            color="text.primary"
            transition="all .25s ease-in-out"
          >
            Sample Navigation
          </Text>
        </Flex>
      </Flex>
    ),
  },
};
