import { StoryObj, Meta } from '@storybook/react';

// components
import HeadingComponent from '@layouts/AuthLayout/Heading';

const meta: Meta<typeof HeadingComponent> = {
  component: HeadingComponent,
};

type Story = StoryObj<typeof HeadingComponent>;

export const Default: Story = {
  args: {
    title: 'Header Form Content',
  },
};

export default meta;
