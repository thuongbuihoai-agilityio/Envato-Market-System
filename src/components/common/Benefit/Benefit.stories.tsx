import type { Meta, StoryObj } from '@storybook/react';

// Constants
import { IMAGES } from '@constants/index';

// Components
import { Benefit } from '@components/index';

const meta: Meta<typeof Benefit> = {
  component: Benefit,
};

export default meta;
type Story = StoryObj<typeof Benefit>;

export const WhiteLogo: Story = {
  args: {
    imageURL: IMAGES.SIGN_IN.url,
    alt: IMAGES.SIGN_IN.alt,
  },
};
