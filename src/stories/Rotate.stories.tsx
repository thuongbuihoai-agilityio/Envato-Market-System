import { StoryObj, Meta } from '@storybook/react';
import { Box, theme, useColorModeValue } from '@chakra-ui/react';

// Components
import { Rotate } from '@app/assets/icons';

const meta: Meta<typeof Rotate> = {
  title: 'Icons/Rotate',
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'Define the color fill for the Rotate Icon',
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
  component: Rotate,
};

export default meta;
type Story = StoryObj<typeof Rotate>;

export const Default: Story = {
  args: {
    color: theme.colors.gray[800],
  },
  render: function Render(props) {
    const colorFill = useColorModeValue(
      theme.colors.gray[800],
      theme.colors.white,
    );

    return <Rotate {...props} color={colorFill} />;
  },
};
