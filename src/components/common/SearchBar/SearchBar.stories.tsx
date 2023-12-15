import type { Meta, StoryObj } from '@storybook/react';

// Components
import { SearchBar } from '@app/components';
import { useForm } from 'react-hook-form';

// Types
import { TSearchValue } from '.';

const meta: Meta<typeof SearchBar> = {
  title: 'Custom Components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    control: {
      description: 'The control retrieved from the useForm hook',
    },
    onFilter: {
      description:
        'The function that will be invoked when user filtering function',
    },
    onSearch: {
      description: 'The function that will be invoked when user searching',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    onFilter: () => {},
    onSearch: () => {},
  },
  render: function Render(props) {
    const { control } = useForm<TSearchValue>();

    return <SearchBar {...props} control={control} />;
  },
};
