import { StoryObj, Meta } from '@storybook/react';

// Components
import CardPayment from '@components/CartPayment';

const meta: Meta<typeof CardPayment> = {
  title: 'Custom Components/CardPayment',
  tags: ['autodocs'],
  component: CardPayment,
  argTypes: {},
};

type Story = StoryObj<typeof CardPayment>;

export const Default: Story = {
  args: {},
};

export default meta;
