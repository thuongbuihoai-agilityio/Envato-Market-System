import { StoryObj, Meta } from '@storybook/react';
import { Flex, Img, Td, Text } from '@chakra-ui/react';

// Components
import Table from '.';

// Icons
import { Dot } from '@assets/icons';

// Mocks
import { USERS } from '@mocks/index';

const meta: Meta<typeof Table> = {
  title: 'Custom Components/Table',
  tags: ['autodocs'],
  component: Table,
  argTypes: {
    columns: {
      description: 'The columns list to display in the table',
    },
    dataSource: {
      description: 'The data list to display in the table data cells',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    columns: [
      {
        title: 'Customer name',
        key: 'name',
        renderBody: ({ image, name }) => (
          <Td
            py={5}
            px={0}
            fontSize="md"
            color="text.primary"
            fontWeight="semibold"
            textAlign="left"
          >
            <Flex alignItems="center" gap="10px">
              <Img
                src={`${image}`}
                alt={`Image of ${name}`}
                w={10}
                h={10}
                borderRadius="full"
              />
              <Text fontSize="md" fontWeight="semibold">
                {name}
              </Text>
            </Flex>
          </Td>
        ),
      },
      {
        title: 'Email',
        key: 'email',
      },
      {
        title: 'Location',
        key: 'location',
      },
      {
        title: 'Spent',
        key: 'spent',
      },
      {
        title: '',
        key: 'action',
        renderBody: () => (
          <Td
            py={5}
            px={0}
            fontSize="md"
            color="text.primary"
            fontWeight="semibold"
            textAlign="left"
          >
            <Dot />
          </Td>
        ),
      },
    ],
    dataSource: USERS,
  },
};
