import { StoryObj, Meta } from '@storybook/react';

// components
import Footer from '@layouts/AuthLayout/Footer';

const meta: Meta<typeof Footer> = {
  title: 'Footer Form',
  component: Footer,
};

type Story = StoryObj<typeof Footer>;

export const Default: Story = {};

export default meta;