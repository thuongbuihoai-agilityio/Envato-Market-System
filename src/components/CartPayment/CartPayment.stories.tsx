import { StoryObj, Meta } from '@storybook/react';

// Components
import CardPayment from '@components/CartPayment';

const meta: Meta<typeof CardPayment> = {
  title: 'Custom Components/CardPayment',
  component: CardPayment,
  argTypes: {
    content: {
      description: 'Content of the divider texts field',
    },
  },
};

type Story = StoryObj<typeof CardPayment>;

export const Default: Story = {
  args: {},
};

export default meta;
