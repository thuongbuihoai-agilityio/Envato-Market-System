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
import { Arrow } from '@app/components/Icons';

// Constants
import {
  MONTHS,
  REVENUE_FLOW_COLORS,
  REVENUE_FLOW_OPTIONS,
  REVENUE_FLOW_STATUS,
} from '@app/constants';

// Types
import { IRevenueFlow, RevenueFlowStatus } from '@app/interfaces';
import { TOption } from '@app/components/common/Select';

interface RevenueFlowProps {
  data: IRevenueFlow[];
}

interface ChartDataState {
  data: number[];
}

const RevenueFlowComponent = ({ data }: RevenueFlowProps) => {
  const defaultSeries = useMemo(() => {
    const generatesData = (
      key: keyof Omit<IRevenueFlow, '_id' | 'title'>,
    ): number[] => data.map((item: IRevenueFlow) => item[key]);

    return [
      {
        data: generatesData(RevenueFlowStatus.PENDING),
      },
      {
        data: generatesData(RevenueFlowStatus.SINGED),
      },
      {
        data: generatesData(RevenueFlowStatus.LOST),
      },
    ];
  }, [data]);

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
          data: getRevenueFlowDetails(RevenueFlowStatus.PENDING),
        },
        {
          data: getRevenueFlowDetails(RevenueFlowStatus.SINGED),
        },
        {
          data: getRevenueFlowDetails(RevenueFlowStatus.LOST),
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
            labels: {
              style: {
                colors: colorFill,
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                colors: colorFill,
              },
            },
          },
          legend: {
            show: false,
          },
          colors: REVENUE_FLOW_COLORS,
          dataLabels: {
            enabled: false,
          },
          tooltip: {
            custom: function ({ series, seriesIndex, dataPointIndex }) {
              const status = REVENUE_FLOW_STATUS[seriesIndex]
                ? `${REVENUE_FLOW_STATUS[seriesIndex]}:`
                : '';

              return `<div style="padding: 10px; background-color: #000; color: #FFF" >
                <p>
                ${data[dataPointIndex].title}
                </p>
                <span>
                ${status} ${series[seriesIndex][dataPointIndex]}
                </span>
                </div>`;
            },
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
