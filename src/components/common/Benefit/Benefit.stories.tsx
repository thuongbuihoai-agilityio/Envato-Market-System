import type { Meta, StoryObj } from '@storybook/react';

// Constants
import { IMAGES } from '@app/constants';

// Components
import { Benefit } from '@app/components';

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

    width: {
      description: 'The width of the benefit content',
      defaultValue: '50%',
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
    width: '100%',
  },
};
