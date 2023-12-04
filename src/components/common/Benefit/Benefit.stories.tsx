import type { Meta, StoryObj } from '@storybook/react';

// Constants
import { IMAGES } from '@constants/index';

// Components
import { Benefit } from '@components/index';

const meta: Meta<typeof Benefit> = {
  title: 'Custom Components/Benefit',
  component: Benefit,
  argTypes: {
    imageURL: {
      description: 'The image URL to display',
    },
    alt: {
      description: 'The alt text to display if the image URL is not available',
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
  },
};
