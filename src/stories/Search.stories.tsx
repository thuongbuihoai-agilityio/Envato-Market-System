import { StoryObj, Meta } from '@storybook/react';
import { theme } from '@chakra-ui/react';

// Components
import { Search } from '@app/assets/icons';

const meta: Meta<typeof Search> = {
  title: 'Icons/Search',
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'Define the color fill for the Search Icon',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
  component: Search,
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: {
    color: theme.colors.gray[800],
  },
};
