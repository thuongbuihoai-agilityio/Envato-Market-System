import { StoryObj, Meta } from '@storybook/react';
import { Box } from '@chakra-ui/react';

// Components
import { SettingIcon } from '@app/components/Icons';
import { Navigation } from '@app/components';

const meta: Meta<typeof SettingIcon> = {
  title: 'Icons/Setting',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box bg="background.component.primary">
        <Navigation>
          <Story />
        </Navigation>
      </Box>
    ),
  ],
  component: SettingIcon,
};

export default meta;
type Story = StoryObj<typeof SettingIcon>;

export const Default: Story = {
  args: {},
};
