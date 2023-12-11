import { StoryObj, Meta } from '@storybook/react';

// Components
import FaqItem from '@app/components/FaqItem';

const meta: Meta<typeof FaqItem> = {
  title: 'Custom Components/FaqItem',
  tags: ['autodocs'],
  component: FaqItem,
  argTypes: {
    question: {
      description: 'This is content of question',
    },

    answer: {
      description: 'This is content of answer',
    },
  },
};

type Story = StoryObj<typeof FaqItem>;

export const Default: Story = {
  args: {
    question: 'Question content',
    answer: 'Answer content',
  },
};

export default meta;
