import type { Meta, StoryObj } from '@storybook/react';

// Constants
import { IMAGES } from '@constants/index';

// Components
import { Benefit } from '@components/index';

const meta: Meta<typeof Benefit> = {
  title: 'Custom Components/Benefit',
  tags: ['autodocs'],
  component: Benefit,
  argTypes: {
    imageURL: {
      description: 'The image URL to display',
    },

    alt: {
      description: 'The alt text to display if the image URL is not available',
    },

    heading: {
      description: 'The heading content to display',
    },

    description: {
      description: 'The description content of the Benefit',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Benefit>;

export const Default: Story = {
  args: {
    imageURL: IMAGES.SIGN_IN.url,
    alt: IMAGES.SIGN_IN.alt,
    heading: 'Speady, Easy and Fast',
    description:
      'BankCo. help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a $20 bonus when you receive qualifying direct deposits',
  },
};
