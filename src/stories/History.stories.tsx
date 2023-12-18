import { StoryObj, Meta } from '@storybook/react';
import { Box } from '@chakra-ui/react';

// Components
import { HistoryIcon } from '@app/assets/icons';
import { Navigation } from '@app/components';

const meta: Meta<typeof HistoryIcon> = {
  title: 'Icons/HistoryIcon',
  tags: ['autodocs'],
  component: HistoryIcon,
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
type Story = StoryObj<typeof HistoryIcon>;

export const Default: Story = {
  args: {},
};
