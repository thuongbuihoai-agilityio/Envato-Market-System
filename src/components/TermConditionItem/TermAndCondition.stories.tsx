import type { Meta, StoryObj } from '@storybook/react';

// Components
import { TermAndConditionItem } from '@app/components';

const meta: Meta<typeof TermAndConditionItem> = {
  title: 'Custom Components/TermAndConditionItem',
  tags: ['autodocs'],
  component: TermAndConditionItem,
  argTypes: {
    heading: {
      description: 'this is a heading',
    },
    content: {
      description: 'this is a content',
    },
    description: {
      description: 'this is a description',
    },
    note: {
      description: 'this is a note',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TermAndConditionItem>;

export const Default: Story = {
  args: {
    heading: 'Heading',
    content: 'Content',
    description: 'Description',
    note: 'Note',
  },
};
