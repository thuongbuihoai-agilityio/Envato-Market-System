import { StoryObj, Meta } from '@storybook/react';

// Components
import { UserIcon } from '@app/assets/icons';
import { Box } from '@chakra-ui/react';
import { Navigation } from '@app/components';

const meta: Meta<typeof UserIcon> = {
  title: 'Icons/User',
  tags: ['autodocs'],
  component: UserIcon,
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
type Story = StoryObj<typeof UserIcon>;

export const Default: Story = {
  args: {},
};
