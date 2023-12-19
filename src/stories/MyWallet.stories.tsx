import { StoryObj, Meta } from '@storybook/react';
import { Box } from '@chakra-ui/react';

// Components
import { MyWalletIcon } from '@app/components/Icons';
import { Navigation } from '@app/components';

const meta: Meta<typeof MyWalletIcon> = {
  title: 'Icons/MyWallet',
  tags: ['autodocs'],
  component: MyWalletIcon,
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
type Story = StoryObj<typeof MyWalletIcon>;

export const Default: Story = {
  args: {},
};
