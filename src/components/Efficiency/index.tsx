import { memo, useCallback } from 'react';
import isEqual from 'react-fast-compare';

// Components
import {
  Box,
  Flex,
  Heading,
  Text,
  theme,
  useColorModeValue,
} from '@chakra-ui/react';
import { Select } from '@app/components';
import { TOption } from '@app/components/common/Select';
import EfficiencyInfo from './EfficiencyInfo';
import EfficiencyRefetch from './Refetching';

// Icons
import { Arrow } from '@app/assets/icons';

// Constants
import { EFFICIENCY_OPTIONS } from '@app/constants';

// Types
import { IEfficiency } from '@app/interfaces';

interface EfficiencyProps extends IEfficiency {
  isLoading?: boolean;
  isExchangeRate?: boolean;
  isLoadingWhenSelect?: boolean;
  onChangeSelect: (data: TOption) => void;
}

const EfficiencyComponent = ({
  arrival,
  spending,
  statistical,
  isLoading = false,
  isLoadingWhenSelect = false,
  onChangeSelect,
}: EfficiencyProps) => {
  const colorFill = useColorModeValue(
    theme.colors.gray[400],
    theme.colors.white,
  );

  const renderTitle = useCallback(
    ({ label }: TOption) => (
      <Flex alignItems="center">
        <Text>{label}</Text>
        <Arrow color={colorFill} />
      </Flex>
    ),
    [colorFill],
  );

  return (
    <Box bg="background.component.primary" rounded="lg">
      <Flex
        py={4}
        px={5}
        borderBottom="1px"
        borderColor="border.primary"
        justifyContent="space-between"
      >
        <Heading variant="heading2Xl" as="h3">
          Efficiency
        </Heading>
        <Box w={102} h={21}>
          <Select
            options={EFFICIENCY_OPTIONS}
            size="sm"
            variant="no-background"
            renderTitle={renderTitle}
            onSelect={onChangeSelect}
          />
        </Box>
      </Flex>
      {isLoadingWhenSelect && isLoading ? (
        <EfficiencyRefetch />
      ) : (
        <EfficiencyInfo
          spending={spending}
          statistical={statistical}
          arrival={arrival}
        />
      )}
    </Box>
  );
};

const Efficiency = memo(EfficiencyComponent, isEqual);

export default Efficiency;
