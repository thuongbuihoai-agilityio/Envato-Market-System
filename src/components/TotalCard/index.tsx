import { memo } from 'react';

// Components
import { Box, Image, HStack, Text, Flex } from '@chakra-ui/react';
import Chart from 'react-apexcharts';

// Images
import { IMAGES } from '@app/constants';

// Utils
import { formatDecimalNumber } from '@app/utils';

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
  <Box
    p={{ base: 5, lg: 1, xl: 5 }}
    bg="background.component.primary"
    rounded="lg"
  >
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
        <Text variant="text3Xl">${formatDecimalNumber(total)}</Text>
        <HStack>
          <Image src={IMAGES.GROWTH.url} alt={IMAGES.GROWTH.alt} />
          <Text color="primary.500">
            + {growth}%{' '}
            <Text as="span" variant="textSm" color="text.textInfo">
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
            axisTicks: {
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
        width="150"
      />
    </Flex>
  </Box>
);

const TotalCard = memo(TotalCardComponent);

export default TotalCard;
