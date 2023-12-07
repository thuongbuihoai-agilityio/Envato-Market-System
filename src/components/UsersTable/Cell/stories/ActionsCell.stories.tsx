import { StoryObj, Meta } from '@storybook/react';
import { Table, Tr } from '@chakra-ui/react';

// Component
import ActionsCell from '../ActionsCell';

const meta: Meta<typeof ActionsCell> = {
  title: 'Custom Components/Users/Cell/ActionsCell',
  component: ActionsCell,
  parameters: {
    controls: {
      expanded: true,
    },
  },
  render: (props) => (
    <Table>
      <Tr>
        <ActionsCell {...props} />
      </Tr>
    </Table>
  ),
};

export default meta;
type Story = StoryObj<typeof ActionsCell>;

export const Default: Story = {
  args: {},
};
