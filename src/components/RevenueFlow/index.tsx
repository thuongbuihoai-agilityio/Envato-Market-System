import {
  Box,
  Flex,
  Heading,
  Text,
  theme,
  useColorModeValue,
} from '@chakra-ui/react';
import { REVENUE_FLOW_COLORS } from '@constants/index';
import { memo, useCallback } from 'react';
import Chart from 'react-apexcharts';
import { Select } from '..';
import { TOption } from '@components/common/Select';
import { Arrow } from '@assets/icons';

const options = [
  {
    value: 'Jan - Dec',
    label: 'Jan - Dec',
  },
  {
    value: 'Jan - Jun',
    label: 'Jan - Jun',
  },
  {
    value: 'Jun - Dec',
    label: 'Jun - Dec',
  },
];

const RevenueFlowComponent = () => {
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
    [],
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
          <Flex gap={2} alignItems="center">
            <Box bgColor="#EAB308" w="12px" height="12px" rounded="50%" />
            <Text variant="textSm">Pending</Text>
          </Flex>
          <Flex gap={2} alignItems="center">
            <Box bgColor="#EAB308" w="12px" height="12px" rounded="50%" />
            <Text variant="textSm">Pending</Text>
          </Flex>
          <Flex gap={2} alignItems="center">
            <Box bgColor="#EAB308" w="12px" height="12px" rounded="50%" />
            <Text variant="textSm">Pending</Text>
          </Flex>
        </Flex>
        <Box w={102} h="21px">
          <Select
            options={options}
            size="sm"
            variant="no-border"
            renderTitle={renderTitle}
          />
        </Box>
      </Flex>
      <Chart
        options={{
          chart: {
            id: 'basic-bar',
            stacked: true,
          },
          xaxis: {
            categories: [
              'Jan',
              'Feb',
              'Mar',
              'April',
              'May',
              'Jun',
              'July',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ],
          },
          legend: {
            show: false,
          },
          colors: REVENUE_FLOW_COLORS,
          dataLabels: {
            enabled: false,
          },
        }}
        series={[
          {
            name: 'series-1',
            data: [30, 40, 45, 50, 49, 60],
          },
          {
            name: 'series-2',
            data: [30, 40, 45, 50, 49, 60],
          },
          {
            name: 'series-3',
            data: [30, 40, 45, 50, 49, 60],
          },
          {
            name: 'series-4',
            data: [0, 0, 0, 0, 0, 0, 70, 91, 30, 40, 45, 50],
          },
        ]}
        type="bar"
        // width="605"
      />
    </Box>
  );
};

const RevenueFlow = memo(RevenueFlowComponent);

export default RevenueFlow;
