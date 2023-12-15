import { StoryObj, Meta } from '@storybook/react';
import { Box } from '@chakra-ui/react';

// Components
import { SignOutIcon } from '@app/assets/icons';
import { Navigation } from '@app/components';

const meta: Meta<typeof SignOutIcon> = {
  title: 'Icons/SignOut',
  tags: ['autodocs'],
  component: SignOutIcon,
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
type Story = StoryObj<typeof SignOutIcon>;

export const Default: Story = {
  args: {},
};
