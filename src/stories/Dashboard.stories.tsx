import { StoryObj, Meta } from '@storybook/react';
import { Box } from '@chakra-ui/react';

// Components
import { DashboardIcon } from '@app/components/Icons';
import { Navigation } from '@app/components';

const meta: Meta<typeof DashboardIcon> = {
  title: 'Icons/Dashboard',
  tags: ['autodocs'],
  component: DashboardIcon,
  argTypes: {},
  decorators: [
    (Story) => (
      <Box bg="background.component.primary">
        <Navigation>
          <Story />
        </Navigation>
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
type Story = StoryObj<typeof DashboardIcon>;

export const Default: Story = {
  args: {},
};
