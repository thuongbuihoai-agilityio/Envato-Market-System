import { StoryObj, Meta } from '@storybook/react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { colors } from '@app/themes/bases/colors';

// Components
import { FilterIcon } from '@app/components/Icons';

const meta: Meta<typeof FilterIcon> = {
  title: 'Icons/Filter',
  tags: ['autodocs'],
  component: FilterIcon,
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
type Story = StoryObj<typeof FilterIcon>;

export const Default: Story = {
  args: {
    stroke: '#1D1E24',
  },
  render: function Render(props) {
    const colorFill = useColorModeValue(
      colors.secondary[400] ?? '',
      colors.primary[500] ?? '',
    );

    return <FilterIcon {...props} stroke={colorFill} />;
  },
};
