import { StoryObj, Meta } from '@storybook/react';
import { theme } from '@chakra-ui/react';

// Components
import { LightTheme } from '@app/assets/icons';

const meta: Meta<typeof LightTheme> = {
  title: 'Icons/LightTheme',
  tags: ['autodocs'],
  component: LightTheme,
  argTypes: {
    color: {
      description: 'Define the color fill for the LightTheme Icon',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof LightTheme>;

export const Default: Story = {
  args: {
    color: theme.colors.gray[800],
  },
};
