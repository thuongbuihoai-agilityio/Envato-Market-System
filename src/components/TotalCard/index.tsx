import { memo } from 'react';

// Components
import { Box, Image, HStack, Text, Flex } from '@chakra-ui/react';
import Chart from 'react-apexcharts';

// Images
import { IMAGES } from '@constants/index';

interface TotalCardComponentProps {
  title: string;
  total: number;
  growth: number;
  weeklyIncome: number[];
}

const TotalCardComponent = ({
  title,
  total,
  growth,
  weeklyIncome,
}: TotalCardComponentProps) => (
  <Box p={5} bg="background.component.primary" rounded="lg">
    <Flex alignItems="center" justifyContent="space-between" mb={5}>
      <HStack w="fit-content">
        <Image src={IMAGES.TOTAL_EARN.url} alt={IMAGES.TOTAL_EARN.alt} />
        <Text variant="textLg" fontWeight="semibold">
          {title}
        </Text>
      </HStack>
    </Flex>
    <Flex alignItems="center" justifyContent="space-between">
      <Box>
        <Text variant="text3Xl">${total}</Text>
        <HStack>
          <Image src={IMAGES.GROWTH.url} alt={IMAGES.GROWTH.alt} />
          <Text color="primary.500">
            + {growth}%{' '}
            <Text as="span" _light={{ color: 'text.tertiary' }}>
              from last week
            </Text>
          </Text>
        </HStack>
      </Box>
      <Chart
        options={{
          colors: ['#22C55E'],
          grid: {
            show: false,
          },
          xaxis: {
            labels: {
              show: false,
            },
          },
          yaxis: {
            labels: {
              show: false,
            },
          },
          tooltip: {
            enabled: false,
          },
          chart: {
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
        }}
        series={[
          {
            data: weeklyIncome,
          },
        ]}
        type="area"
        width="140"
      />
    </Flex>
  </Box>
);

const TotalCard = memo(TotalCardComponent);

export default TotalCard;
