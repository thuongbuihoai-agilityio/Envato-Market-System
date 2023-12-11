import { StoryObj, Meta } from '@storybook/react';

// Components
import FaqPage from '@pages/Setting/Faq';

const meta: Meta<typeof FaqPage> = {
  title: 'Custom Components/FaqPage',
  tags: ['autodocs'],
  component: FaqPage,
};

type Story = StoryObj<typeof FaqPage>;

export const Default: Story = {
  args: {},
};

export default meta;
