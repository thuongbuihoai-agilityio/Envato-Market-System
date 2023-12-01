import { memo } from 'react';
import isEqual from 'react-fast-compare';

// Components
import { Box, Flex, Heading, Skeleton, Text } from '@chakra-ui/react';
import Chart from 'react-apexcharts';
import { Sort } from '@assets/icons';

// Constants
import { STROKE_COLORS } from '@constants/charts';

interface EfficiencyProps {
  arrival: number;
  spending: number;
  statistical: {
    title: string;
    value: number;
  }[];
  isLoading?: boolean;
}

const EfficiencyComponent = ({
  arrival,
  spending,
  statistical,
  isLoading = false,
}: EfficiencyProps) => {
  if (isLoading)
    return (
      <Skeleton bg="background.component.primary" rounded="lg" height={320} />
    );

  return (
    <Box bg="background.component.primary" rounded="lg">
      <Flex py={4} px={5} borderBottom="1px" borderColor="border.primary">
        <Heading>Efficiency</Heading>
      </Flex>
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
            }}
            series={statistical.map((item) => item.value)}
            labels={['A', 'B', 'C', 'D']}
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
                {item.value}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

const Efficiency = memo(EfficiencyComponent, isEqual);

export default Efficiency;
