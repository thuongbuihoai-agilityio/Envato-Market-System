import { StoryObj, Meta } from '@storybook/react';

// components
import HeadingComponent from '@app/layouts/AuthLayout/Heading';

const meta: Meta<typeof HeadingComponent> = {
  title: 'Heading Form',
  tags: ['autodocs'],
  component: HeadingComponent,
  argTypes: {
    title: {
      description: 'The title of the form',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

type Story = StoryObj<typeof HeadingComponent>;

export const Default: Story = {
  args: {
    title: 'Header Form Content',
  },
};

export default meta;
