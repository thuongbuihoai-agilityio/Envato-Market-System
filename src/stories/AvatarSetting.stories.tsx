import { StoryObj, Meta } from '@storybook/react';
import { Box, theme, useColorModeValue } from '@chakra-ui/react';

// Components
import { AvatarSetting } from '@app/components/Icons';

const meta: Meta<typeof AvatarSetting> = {
  title: 'Icons/AvatarSetting',
  tags: ['autodocs'],
  component: AvatarSetting,
  argTypes: {
    color: {
      description: 'Define the color fill for the AvatarSetting Icon',
    },

    height: {
      description: 'Define the height of the AvatarSetting Icon',
    },

    width: {
      description: 'Define the width of the AvatarSetting Icon',
    },

    rotate: {
      description: 'Define the rotation degree of the AvatarSetting Icon',
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
type Story = StoryObj<typeof AvatarSetting>;

export const Default: Story = {
  args: {
    color: theme.colors.gray[800],
  },
  render: function Render(props) {
    const colorFill = useColorModeValue(
      theme.colors.gray[800],
      theme.colors.white,
    );

    return <AvatarSetting {...props} color={colorFill} />;
  },
};
