import { StoryObj, Meta } from '@storybook/react';
import { CloseIcon } from '@chakra-ui/icons';

import InputField from '.';

export default {
  title: 'Components/InputField',
  component: InputField,
} as Meta;

type Story = StoryObj<typeof InputField>;

const defaultProps = {
  name: 'email',
  placeholder: 'Email',
  onChange: () => {},
};

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};

export const Secondary: Story = {
  args: {
    ...defaultProps,
    variant: 'secondary',
  },
};

export const Authentication: Story = {
  args: {
    ...defaultProps,
    variant: 'authentication',
  },
};

export const HasLeftIcon: Story = {
  args: {
    ...defaultProps,
    leftIcon: <CloseIcon />,
  },
};

export const HasRightIcon: Story = {
  args: {
    ...defaultProps,
    rightIcon: <CloseIcon />,
  },
};

export const HasError: Story = {
  args: {
    ...defaultProps,
    variant: 'authentication',
    isValidate: true,
    isError: true,
  },
};
