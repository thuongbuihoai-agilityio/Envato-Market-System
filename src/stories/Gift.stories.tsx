import { StoryObj, Meta } from '@storybook/react';
import { Box, theme, useColorModeValue } from '@chakra-ui/react';

// Components
import { Gift } from '@app/assets/icons';

const meta: Meta<typeof Gift> = {
  title: 'Icons/Gift',
  tags: ['autodocs'],
  component: Gift,
  argTypes: {
    color: {
      description: 'Define the color fill for the Gift Icon',
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
type Story = StoryObj<typeof Gift>;

export const Default: Story = {
  args: {
    color: theme.colors.gray[800],
  },
  render: function Render(props) {
    const colorFill = useColorModeValue(
      theme.colors.gray[800],
      theme.colors.white,
    );

    return <Gift {...props} color={colorFill} />;
  },
};
