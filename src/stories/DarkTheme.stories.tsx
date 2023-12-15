import { StoryObj, Meta } from '@storybook/react';
import { Box, theme, useColorModeValue } from '@chakra-ui/react';

// Components
import { DarkTheme } from '@app/assets/icons';

const meta: Meta<typeof DarkTheme> = {
  title: 'Icons/DarkTheme',
  tags: ['autodocs'],
  component: DarkTheme,
  argTypes: {
    color: {
      description: 'Define the color fill for the DarkTheme Icon',
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
type Story = StoryObj<typeof DarkTheme>;

export const Default: Story = {
  args: {
    color: theme.colors.gray[800],
  },
  render: function Render(props) {
    const colorFill = useColorModeValue(
      theme.colors.gray[800],
      theme.colors.white,
    );

    return <DarkTheme {...props} color={colorFill} />;
  },
};
