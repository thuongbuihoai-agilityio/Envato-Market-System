import { StoryObj, Meta } from '@storybook/react';
import { Box, theme, useColorModeValue } from '@chakra-ui/react';

// Components
import { Search } from '@app/components/Icons';

const meta: Meta<typeof Search> = {
  title: 'Icons/Search',
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'Define the color fill for the Search Icon',
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
  component: Search,
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: {
    color: theme.colors.gray[800],
  },
  render: function Render(props) {
    const colorFill = useColorModeValue(
      theme.colors.gray[800],
      theme.colors.white,
    );

    return <Search {...props} color={colorFill} />;
  },
};
