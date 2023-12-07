import { Center, useColorModeValue } from '@chakra-ui/react';
import { memo } from 'react';

// Icons
import { FilterIcon } from '@assets/icons';

// Themes
import { colors } from '@themes/bases/colors';

const SelectorComponent = (): JSX.Element => {
  const filterIconColor: string = useColorModeValue(
    colors.secondary[400] ?? '',
    colors.primary[500] ?? '',
  );

  return (
    <Center
      as="span"
      textAlign="center"
      fontSize="md"
      color="primary.500"
      gap={3}
    >
      <FilterIcon stroke={filterIconColor} />
      Filters
    </Center>
  );
};

const Selector = memo(SelectorComponent);

export default Selector;
