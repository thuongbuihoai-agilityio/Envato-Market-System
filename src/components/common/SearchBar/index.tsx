import { useCallback } from 'react';
import { Controller } from 'react-hook-form';
import { Box, HStack, useColorModeValue } from '@chakra-ui/react';

// Hooks
import { useForm } from '@hooks/useForm';

// Assets
import { Search } from '@assets/icons';

// Themes
import { colors } from '@themes/bases/colors';

// Components
import { InputField, Select, Selector } from '@components/index';

//Mocks
import { MONTHS } from '@mocks/select';

const SearchBar = () => {
  const { control, handleSubmit } = useForm<{
    search: string;
    select: string;
  }>({
    defaultValues: {
      search: '',
      select: '',
    },
  });

  const renderTitleSelector = useCallback(() => <Selector />, []);

  const searchIconColor: string = useColorModeValue(
    colors.secondary[400] ?? '',
    '#fff',
  );

  return (
    <HStack
      as="form"
      data-testId="search-bar"
      h={14}
      gap={5}
      onSubmit={handleSubmit((data) => {
        console.log(data); // TODO: Remove late
      })}
    >
      <Box
        display={{
          base: 'none',
          sm: 'block',
        }}
        flex={1}
      >
        <Controller
          control={control}
          name="search"
          render={({ field: { value, onChange } }) => (
            <InputField
              value={value}
              onChange={onChange}
              placeholder="Search by name, email, or other..."
              variant="secondary"
              leftIcon={<Search color={searchIconColor} />}
            />
          )}
        />
      </Box>
      <Box
        h="100%"
        w={{
          base: '100%',
          sm: '30%',
          lg: '15%',
          xl: '12%',
        }}
      >
        <Controller
          control={control}
          name="select"
          render={({ field: { onChange } }) => (
            <Select
              options={MONTHS}
              renderTitle={renderTitleSelector}
              onSelect={({ value }) => onChange(value)}
            />
          )}
        />
      </Box>
    </HStack>
  );
};

export default SearchBar;
