import { StoryObj, Meta } from '@storybook/react';
import { Box, theme, useColorModeValue } from '@chakra-ui/react';

// Components
import { Faq } from '@app/assets/icons';

const meta: Meta<typeof Faq> = {
  title: 'Icons/Faq',
  tags: ['autodocs'],
  component: Faq,
  argTypes: {
    color: {
      description: 'Define the color fill for the Faq Icon',
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
type Story = StoryObj<typeof Faq>;

export const Default: Story = {
  args: {
    color: theme.colors.gray[800],
  },
  render: function Render(props) {
    const colorFill = useColorModeValue(
      theme.colors.gray[800],
      theme.colors.white,
    );

    return <Faq {...props} color={colorFill} />;
  },
};
