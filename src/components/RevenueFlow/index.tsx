import { memo, useCallback, useMemo, useState } from 'react';
import isEqual from 'react-fast-compare';

// Components
import Chart from 'react-apexcharts';
import {
  Box,
  Flex,
  Heading,
  // Skeleton,
  Text,
  theme,
  useColorModeValue,
} from '@chakra-ui/react';
import { Select } from '..';

// Icon
import { Arrow } from '@assets/icons';

// Constants
import {
  MONTHS,
  REVENUE_FLOW_COLORS,
  REVENUE_FLOW_OPTIONS,
  REVENUE_FLOW_STATUS,
} from '@constants/index';

// Types
import { IRevenueFlow } from '@interfaces/index';
import { TOption } from '@components/common/Select';

interface RevenueFlowProps {
  data: IRevenueFlow[];
}

interface ChartDataState {
  data: number[];
}

const RevenueFlowComponent = ({ data }: RevenueFlowProps) => {
  const defaultSeries = useMemo(
    () => [
      {
        data: data.map(({ pending }) => pending),
      },
      {
        data: data.map(({ signed }) => signed),
      },
      {
        data: data.map(({ lost }) => lost),
      },
    ],
    [data],
  );

  const [chartData, setChartData] = useState<ChartDataState[]>(defaultSeries);

  const colorFill = useColorModeValue(
    theme.colors.gray[800],
    theme.colors.white,
  );

  const renderTitle = useCallback(
    ({ label }: TOption) => (
      <Flex alignItems="center">
        <Text fontSize="sm">{label}</Text>
        <Arrow color={colorFill} />
      </Flex>
    ),
    [colorFill],
  );

  const handleChangeSelect = useCallback(
    (option: TOption) => {
      const [monthStart, monthEnd] = option.value.split(',');

      const rangeMonths = MONTHS.slice(
        MONTHS.findIndex((i) => i === monthStart),
        MONTHS.findIndex((i) => i === monthEnd) + 1,
      );

      const getRevenueFlowDetails = (
        key: keyof Omit<IRevenueFlow, '_id' | 'title'>,
      ) =>
        data.map((revenue: IRevenueFlow) =>
          rangeMonths.includes(revenue.title) ? revenue[key] : 0,
        );
      const result = [
        {
          data: getRevenueFlowDetails('pending'),
        },
        {
          data: getRevenueFlowDetails('signed'),
        },
        {
          data: getRevenueFlowDetails('lost'),
        },
        {
          data: data.map((revenue: IRevenueFlow) =>
            rangeMonths.includes(revenue.title)
              ? 0
              : revenue.lost + revenue.pending + revenue.signed,
          ),
        },
      ];

      setChartData(result);
    },
    [data],
  );

  return (
    <Box py={3} px={6} bg="background.component.primary" rounded="lg">
      <Flex
        py={4}
        px={5}
        borderBottom="1px"
        borderColor="border.primary"
        justifyContent="space-between"
      >
        <Heading variant="heading2Xl" as="h3">
          Revenue Flow
        </Heading>
        <Flex gap={7} display={{ base: 'none', lg: 'flex' }}>
          {REVENUE_FLOW_STATUS.map((item, index) => (
            <Flex key={item} gap={2} alignItems="center">
              <Box
                bgColor={REVENUE_FLOW_COLORS[index]}
                w={3}
                height={3}
                rounded="50%"
              />
              <Text variant="textSm">{item}</Text>
            </Flex>
          ))}
        </Flex>
        <Box w={100} h="21px">
          <Select
            options={REVENUE_FLOW_OPTIONS}
            size="sm"
            variant="no-border"
            renderTitle={renderTitle}
            onSelect={handleChangeSelect}
          />
        </Box>
      </Flex>
      <Chart
        options={{
          chart: {
            stacked: true,
            toolbar: {
              show: false,
            },
          },
          xaxis: {
            categories: data.map((item) => item.title),
            axisTicks: {
              show: false,
            },
          },
          legend: {
            show: false,
          },
          colors: REVENUE_FLOW_COLORS,
          dataLabels: {
            enabled: false,
          },
        }}
        series={chartData}
        type="bar"
        height="230"
      />
    </Box>
  );
};

const RevenueFlow = memo(RevenueFlowComponent, isEqual);

export default RevenueFlow;
