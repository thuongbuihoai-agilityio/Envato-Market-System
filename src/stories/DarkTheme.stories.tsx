import { StoryObj, Meta } from '@storybook/react';
import { theme } from '@chakra-ui/react';

// Components
import { DarkTheme } from '@app/assets/icons';

const meta: Meta<typeof DarkTheme> = {
  title: 'Icons/DarkTheme',
  tags: ['autodocs'],
  component: DarkTheme,
  argTypes: {
    color: {
      description: 'Define the color fill for the DarkTheme Icon',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof DarkTheme>;

export const Default: Story = {
  args: {
    color: theme.colors.gray[800],
  },
};
