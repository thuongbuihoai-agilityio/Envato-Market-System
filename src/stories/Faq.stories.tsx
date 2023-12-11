import { StoryObj, Meta } from '@storybook/react';
import { theme } from '@chakra-ui/react';

// Components
import { Faq } from '@app/assets/icons';

const meta: Meta<typeof Faq> = {
  title: 'Icons/Faq',
  tags: ['autodocs'],
  component: Faq,
  argTypes: {
    color: {
      description: 'Define the color fill for the Faq Icon',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Faq>;

export const Default: Story = {
  args: {
    color: theme.colors.gray[800],
  },
};
