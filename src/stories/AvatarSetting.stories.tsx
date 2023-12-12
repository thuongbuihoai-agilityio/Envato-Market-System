import { StoryObj, Meta } from '@storybook/react';
import { theme } from '@chakra-ui/react';

// Components
import { AvatarSetting } from '@app/assets/icons';

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
};
