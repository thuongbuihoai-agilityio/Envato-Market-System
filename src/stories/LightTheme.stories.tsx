import { StoryObj, Meta } from '@storybook/react';
import { Box, theme, useColorModeValue } from '@chakra-ui/react';

// Components
import { LightTheme } from '@app/components/Icons';

const meta: Meta<typeof LightTheme> = {
  title: 'Icons/LightTheme',
  tags: ['autodocs'],
  component: LightTheme,
  argTypes: {
    color: {
      description: 'Define the color fill for the LightTheme Icon',
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
type Story = StoryObj<typeof LightTheme>;

export const Default: Story = {
  args: {
    color: theme.colors.gray[800],
  },
  render: function Render(props) {
    const colorFill = useColorModeValue(
      theme.colors.gray[800],
      theme.colors.white,
    );

    return <LightTheme {...props} color={colorFill} />;
  },
};
