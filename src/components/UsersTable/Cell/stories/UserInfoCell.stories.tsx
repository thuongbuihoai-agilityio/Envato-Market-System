import { StoryObj, Meta } from '@storybook/react';
import { Table, Tr } from '@chakra-ui/react';

// Component
import UserInfoCell from '../UserInfoCell';

// Mocks
import { USERS } from '@mocks/index';

const meta: Meta<typeof UserInfoCell> = {
  title: 'Custom Components/Users/Cell/UserInfoCell',
  component: UserInfoCell,
  parameters: {
    controls: {
      expanded: true,
    },
  },
  render: (props) => (
    <Table>
      <Tr>
        <UserInfoCell {...props} />
      </Tr>
    </Table>
  ),
};

export default meta;
type Story = StoryObj<typeof UserInfoCell>;

export const Default: Story = {
  args: {
    name: USERS[0].name,
    imageURL: USERS[0].image,
    address: 'Jakarta, Indonesia',
    time: '2 days ago',
    role: 'Finance managers',
  },
};
