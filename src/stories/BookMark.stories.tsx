import { StoryObj, Meta } from '@storybook/react';
import { theme } from '@chakra-ui/react';

// Components
import { BookMark } from '@app/assets/icons';

const meta: Meta<typeof BookMark> = {
  title: 'Icons/BookMark',
  tags: ['autodocs'],
  component: BookMark,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof BookMark>;

export const Default: Story = {
  args: {
    color: theme.colors.gray[800],
  },
};
