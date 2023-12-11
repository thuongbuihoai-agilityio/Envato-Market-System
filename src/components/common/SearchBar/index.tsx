import { FormEvent, memo, useCallback } from 'react';
import { Controller, Control } from 'react-hook-form';
import { Box, HStack, useColorModeValue } from '@chakra-ui/react';
import areEqual from 'react-fast-compare';

// Assets
import { Search } from '@assets/icons';

// Themes
import { colors } from '@themes/bases/colors';

// Components
import { InputField, Select, Selector } from '@components/index';
import { TOption } from '../Select';

//Mocks
import { MONTHS } from '@mocks/select';

export type TSearchValue = {
  search: string;
};

type TSearchProps = {
  control: Control<TSearchValue>;
  onSearch: () => void;
  onFilter?: (value: string) => void;
};

const SearchBarComponent = ({
  control,
  onSearch,
  onFilter,
}: TSearchProps): JSX.Element => {
  const renderTitleSelector = useCallback(() => <Selector />, []);

  const searchIconColor: string = useColorModeValue(
    colors.secondary[400] ?? '',
    '#fff',
  );

  const handleSelectMonth = useCallback(
    ({ value }: TOption) => onFilter && onFilter(value),
    [onFilter],
  );

  return (
    <HStack
      as="form"
      data-testId="search-bar"
      h={14}
      gap={5}
      onSubmit={(e: FormEvent) => e.preventDefault()}
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
              onChange={(value: string) => {
                onChange(value);
                onSearch();
              }}
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
        <Select
          options={MONTHS}
          renderTitle={renderTitleSelector}
          onSelect={handleSelectMonth}
        />
      </Box>
    </HStack>
  );
};

const SearchBar = memo(SearchBarComponent, areEqual);

export default SearchBar;
