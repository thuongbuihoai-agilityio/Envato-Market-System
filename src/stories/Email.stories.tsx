import { StoryObj, Meta } from '@storybook/react';
import { Box, theme, useColorModeValue } from '@chakra-ui/react';

// Components
import { Email } from '@app/components/Icons';

const meta: Meta<typeof Email> = {
  title: 'Icons/Email',
  tags: ['autodocs'],
  component: Email,
  argTypes: {
    color: {
      description: 'Define the color fill for the Email Icon',
    },
  },
  decorators: [
    (Story) => (
      <Box bg="background.component.primary">
        <Story />
      </Box>
    ),
  ],
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Email>;

export const Default: Story = {
  args: {
    color: theme.colors.gray[800],
  },
  render: function Render(props) {
    const colorFill = useColorModeValue(
      theme.colors.gray[800],
      theme.colors.white,
    );

    return <Email {...props} color={colorFill} />;
  },
};
