import { StoryObj, Meta } from '@storybook/react';
import { Box, theme, useColorModeValue } from '@chakra-ui/react';

// Components
import { Bell } from '@app/components/Icons';

const meta: Meta<typeof Bell> = {
  title: 'Icons/Bell',
  tags: ['autodocs'],
  component: Bell,
  argTypes: {
    color: {
      description: 'Define the color fill for the Bell Icon',
    },
    height: {
      description: 'Define the height of the Bell Icon',
    },

    width: {
      description: 'Define the width of the Bell Icon',
    },

    rotate: {
      description: 'Define the rotation degree of the Bell Icon',
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
};

export default meta;
type Story = StoryObj<typeof Bell>;

export const Default: Story = {
  args: {
    color: theme.colors.gray[800],
  },
  render: function Render(props) {
    const colorFill = useColorModeValue(
      theme.colors.gray[800],
      theme.colors.white,
    );

    return <Bell {...props} color={colorFill} />;
  },
};
