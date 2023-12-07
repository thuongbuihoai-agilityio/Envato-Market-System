import { StoryObj, Meta } from '@storybook/react';

// Component
import Selector from '.';

const meta: Meta<typeof Selector> = {
  title: 'Custom Components/Selector',
  tags: ['autodocs'],
  component: Selector,
};

export default meta;
type Story = StoryObj<typeof Selector>;

export const Default: Story = {};
