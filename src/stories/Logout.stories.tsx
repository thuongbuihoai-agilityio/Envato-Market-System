import { StoryObj, Meta } from '@storybook/react';
import { Box, theme, useColorModeValue } from '@chakra-ui/react';

// Components
import { Logout } from '@app/components/Icons/Logout';

const meta: Meta<typeof Logout> = {
  title: 'Icons/Logout',
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'Define the color fill for the Logout Icon',
    },
  },
  decorators: [
    (Story) => (
      <Box bg="background.component.primary">
        <Story />
      </Box>
    ),
  ],
  parameters: {
    controls: {
      expanded: true,
    },
  },
  component: Logout,
};

export default meta;
type Story = StoryObj<typeof Logout>;

export const Default: Story = {
  args: {
    color: theme.colors.gray[800],
  },
  render: function Render(props) {
    const colorFill = useColorModeValue(
      theme.colors.gray[800],
      theme.colors.white,
    );

    return <Logout {...props} color={colorFill} />;
  },
};
