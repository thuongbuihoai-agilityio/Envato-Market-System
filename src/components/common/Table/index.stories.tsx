import { StoryObj, Meta } from '@storybook/react';
import { Flex, Img, Text } from '@chakra-ui/react';

// Components
import Table from '.';

// Icons
import { Dot } from '@assets/icons';

const meta: Meta<typeof Table> = {
  title: 'Custom Components/Table',
  component: Table,
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
        renderBody: () => <Dot />,
      },
    ],
    dataSource: Array.from({ length: 5 }).map(() => ({
      id: 1,
      name: 'Devon Lane',
      image:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/af53d53d-561f-450a-a483-70a7ceee380f/dunk-low-shoes-t9dFBx.png',
      email: 'devon@mail.com',
      location: 'Philadelphia, USA',
      spent: '$101.00',
    })),
  },
};
