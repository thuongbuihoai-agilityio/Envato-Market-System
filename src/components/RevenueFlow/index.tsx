import { memo, useCallback, useState } from 'react';
import isEqual from 'react-fast-compare';

// Components
import Chart from 'react-apexcharts';
import {
  Box,
  Flex,
  Heading,
  Skeleton,
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
  isLoading?: boolean;
}

interface ChartDataState {
  data: number[];
}

const RevenueFlowComponent = ({
  data,
  isLoading = false,
}: RevenueFlowProps) => {
  const defaultSeries = [
    {
      data: data.map((item) => item.pending),
    },
    {
      data: data.map((item) => item.signed),
    },
    {
      data: data.map((item) => item.lost),
    },
  ];

  const [chartData, setChartData] = useState<ChartDataState[]>(defaultSeries);

  const colorFill = useColorModeValue(
    theme.colors.gray[800],
    theme.colors.white,
  );

  const renderTitle = useCallback(
    ({ label }: TOption) => (
      <Flex>
        <Text>{label}</Text>
        <Arrow color={colorFill} width={17} height={17} />
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

      const result = [
        {
          data: data.map((revenue: IRevenueFlow) =>
            rangeMonths.includes(revenue.month) ? revenue.pending : 0,
          ),
        },
        {
          data: data.map((revenue: IRevenueFlow) =>
            rangeMonths.includes(revenue.month) ? revenue.signed : 0,
          ),
        },
        {
          data: data.map((revenue: IRevenueFlow) =>
            rangeMonths.includes(revenue.month) ? revenue.lost : 0,
          ),
        },
        {
          data: data.map((revenue: IRevenueFlow) =>
            rangeMonths.includes(revenue.month)
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
    <Box py={3} px={6}>
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
                w="12px"
                height="12px"
                rounded="50%"
              />
              <Text variant="textSm">{item}</Text>
            </Flex>
          ))}
        </Flex>
        <Box w={102} h="21px">
          <Select
            options={REVENUE_FLOW_OPTIONS}
            size="sm"
            variant="no-border"
            renderTitle={renderTitle}
            onSelect={handleChangeSelect}
          />
        </Box>
      </Flex>
      {isLoading ? (
        <Skeleton bg="background.component.primary" rounded="lg" height={300} />
      ) : (
        <Chart
          options={{
            chart: {
              stacked: true,
            },
            xaxis: {
              categories: data.map((item) => item.month),
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
          height="300"
        />
      )}
    </Box>
  );
};

const RevenueFlow = memo(RevenueFlowComponent, isEqual);

export default RevenueFlow;
