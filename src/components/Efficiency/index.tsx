import { memo, useCallback, useState } from 'react';
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
import { Fetching, Select } from '@app/components';
import { TOption } from '@app/components/common/Select';
import EfficiencyInfo from './EfficiencyInfo';
import EfficiencyRefetch from './Refetching';

// Icons
import { Arrow } from '@app/components/Icons';

// Constants
import { EFFICIENCY_OPTIONS, END_POINTS } from '@app/constants';

// Types
import { IEfficiency } from '@app/interfaces';
import { useGetStatistic } from '@app/hooks';
import { INITIAL_EFFICIENCY } from '@app/mocks';

const EfficiencyComponent = () => {
  const [efficiencyType, setEfficiencyType] = useState<string>('weekly');
  const [isLoadingSelectEfficiencyType, setLoadingSelectEfficiencyType] =
    useState<boolean>(false);
  const colorFill = useColorModeValue(
    theme.colors.gray[400],
    theme.colors.white,
  );

  const {
    data: efficiencyData,
    isLoading: isLoadingEfficiency,
    isError: isErrorEfficiency,
  } = useGetStatistic<IEfficiency>(
    `${END_POINTS.EFFICIENCY}/${efficiencyType}`,
  );

  const { arrival, spending, statistical } =
    efficiencyData || INITIAL_EFFICIENCY;

  const handleChangeSelectEfficiency = useCallback((data: TOption) => {
    setEfficiencyType(data.value);
    setLoadingSelectEfficiencyType(true);
  }, []);

  const renderTitle = useCallback(
    ({ label }: TOption) => (
      <Flex alignItems="center">
        <Text>{label}</Text>
        <Arrow color={colorFill} />
      </Flex>
    ),
    [colorFill],
  );

  if (isErrorEfficiency)
    return (
      <Heading
        as="h3"
        color="text.primary"
        bgColor="background.body.secondary"
        rounded="lg"
        boxShadow="sm"
        p={4}
      >
        Efficiency data error
      </Heading>
    );

  return (
    <Box bg="background.component.primary" rounded="lg">
      <Fetching
        isLoading={isLoadingEfficiency && !isLoadingSelectEfficiencyType}
        isError={isErrorEfficiency}
        variant="secondary"
        size="md"
      >
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
              onSelect={handleChangeSelectEfficiency}
              data-testid="select-efficiency"
            />
          </Box>
        </Flex>
        {isLoadingEfficiency && isLoadingSelectEfficiencyType ? (
          <EfficiencyRefetch />
        ) : (
          <EfficiencyInfo
            spending={spending}
            statistical={statistical}
            arrival={arrival}
          />
        )}
      </Fetching>
    </Box>
  );
};

const Efficiency = memo(EfficiencyComponent, isEqual);

export default Efficiency;
