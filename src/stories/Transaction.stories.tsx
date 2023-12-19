import { StoryObj, Meta } from '@storybook/react';

// Components
import { TransactionIcon } from '@app/components/Icons';
import { Box } from '@chakra-ui/react';
import { Navigation } from '@app/components';

const meta: Meta<typeof TransactionIcon> = {
  title: 'Icons/Transaction',
  tags: ['autodocs'],
  component: TransactionIcon,
  decorators: [
    (Story) => (
      <Box bg="background.component.primary">
        <Navigation>
          <Story />
        </Navigation>
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TransactionIcon>;

export const Default: Story = {
  args: {},
};
