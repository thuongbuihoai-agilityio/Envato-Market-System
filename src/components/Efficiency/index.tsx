import { memo, useCallback } from 'react';
import isEqual from 'react-fast-compare';

// Components
import {
  Box,
  Flex,
  Heading,
  Skeleton,
  Text,
  theme,
  useColorModeValue,
  CircularProgress,
} from '@chakra-ui/react';
import Chart from 'react-apexcharts';
import { InputField, Select } from '..';

// Icons
import { Arrow, Sort } from '@assets/icons';

// Constants
import { STROKE_COLORS } from '@constants/charts';
import { EFFICIENCY_OPTIONS, EXCHANGE_RATE_OPTIONS } from '@constants/options';
import { TOption } from '@components/common/Select';

interface EfficiencyProps {
  arrival: number;
  spending: number;
  statistical: {
    title: string;
    value: number;
  }[];
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
  isExchangeRate = false,
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

  const renderExchangeRateTitle = useCallback(
    () => (
      <Flex alignItems="center">
        <Text>{EXCHANGE_RATE_OPTIONS[1].label}</Text>
        <Arrow color={colorFill} />
      </Flex>
    ),
    [colorFill],
  );

  const handleChangeSelect = useCallback(() => {
    // TODO: Update later
  }, []);

  const handleChangeInput = useCallback(() => {
    // TODO: Update later
  }, []);

  if (isLoading && !isLoadingWhenSelect)
    return (
      <Skeleton bg="background.component.primary" rounded="lg" height={320} />
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
        <Box w={102} h="21px">
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
        <Flex
          justifyContent="center"
          alignItems="center"
          w="full"
          height={270}
          bg="background.body.primary"
        >
          <CircularProgress isIndeterminate color="text.secondary" />
        </Flex>
      ) : (
        <Box py={4} px={5}>
          <Flex justifyContent="space-between" mb={4}>
            <Chart
              options={{
                plotOptions: {
                  pie: {
                    donut: {
                      size: '45%',
                    },
                  },
                },
                legend: {
                  show: false,
                },

                annotations: {},
                colors: STROKE_COLORS,
                dataLabels: {
                  enabled: true,
                  formatter: (val) => val + '%',
                },
              }}
              series={statistical.map((item) => item.value)}
              type="donut"
              width="200"
            />
            <Box>
              <Box mb={6}>
                <Flex alignItems="center" gap={1}>
                  <Text variant="textLg" color="primary.500">
                    ${arrival}
                  </Text>
                  <Sort />
                </Flex>
                <Text variant="textMd" color="secondary.450">
                  Arrival
                </Text>
              </Box>
              <Box>
                <Flex alignItems="center" gap={1}>
                  <Text variant="textLg">${spending}</Text>
                  <Sort color="#1a202c" />
                </Flex>

                <Text variant="textMd" color="text.secondary">
                  Spending
                </Text>
              </Box>
            </Box>
          </Flex>
          {isExchangeRate ? (
            <>
              <Flex gap={3} w="full">
                <Box>
                  <Select
                    options={EXCHANGE_RATE_OPTIONS}
                    variant="secondary"
                    renderTitle={renderTitle}
                    onSelect={handleChangeSelect}
                  />
                </Box>
                <InputField
                  onChange={handleChangeInput}
                  variant="authentication"
                />
              </Flex>
              <Flex gap={3} w="full" mt={3}>
                <Box>
                  <Select
                    options={EXCHANGE_RATE_OPTIONS}
                    variant="secondary"
                    renderTitle={renderExchangeRateTitle}
                    onSelect={handleChangeSelect}
                  />
                </Box>
                <InputField
                  onChange={handleChangeInput}
                  variant="authentication"
                />
              </Flex>
            </>
          ) : (
            <Flex flexDirection="column" gap={1.5}>
              {statistical.map((item, index) => (
                <Flex key={item.title} dir="row" w="full" alignItems="center">
                  <Box
                    bg={STROKE_COLORS[index]}
                    w="10px"
                    height="10px"
                    rounded="50%"
                  />
                  <Text ml={3} variant="textSm">
                    {item.title}
                  </Text>
                  <Text
                    fontSize="sm"
                    fontWeight="bold"
                    color="text.primary"
                    sx={{ marginLeft: 'auto' }}
                  >
                    {item.value}%
                  </Text>
                </Flex>
              ))}
            </Flex>
          )}
        </Box>
      )}
    </Box>
  );
};

const Efficiency = memo(EfficiencyComponent, isEqual);

export default Efficiency;
