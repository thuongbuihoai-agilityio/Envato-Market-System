import { memo } from 'react';
import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';

// constants
import { IMAGES } from '@constants/images';

const TotalBalanceComponent = (): JSX.Element => (
  <Box w="full" bg="background.body.quaternary" px={11} py={7}>
    <Box
      border="1px solid"
      borderColor="border.quaternary"
      mt={5}
      borderRadius="lg"
      p={8}
    >
      <Text fontSize="2xl" fontWeight="semibold" mb={2} color="text.primary">
        Total Balance
      </Text>
      <Box display="inline-block" mb={2}>
        <Text
          fontSize="4xl"
          fontWeight="bold"
          mb={0}
          color="text.primary"
          lineHeight={9}
          display="inline"
        >
          $88,232.00
        </Text>
        <Text
          fontSize="md"
          fontWeight="medium"
          mb={0}
          color="secondary.250"
          lineHeight={5}
          textTransform="uppercase"
          display="inline"
          ml={2}
        >
          usd
        </Text>
      </Box>

      <Flex align="center" mb={4}>
        <Text fontSize="md" color="text.tertiary" mr={2} fontWeight="medium">
          11 April 2022
        </Text>
        <Flex align="center">
          <Image
            src={IMAGES.INCREASE_ICON.url}
            alt={IMAGES.INCREASE_ICON.alt}
            mr="2"
          />
          <Text fontSize="lg" fontWeight="bold" color="green.500">
            2.05%
          </Text>
        </Flex>
      </Flex>
    </Box>

    <Flex align="center" justify="center">
      <Box
        border="1px solid"
        borderColor="secondary.250"
        p={4}
        borderRadius="lg"
        bottom={4}
        mt={-6}
        bg="background.body.quaternary"
        py={3}
        px={6}
      >
        <Text align="center" fontSize="sm" fontWeight="medium">
          Withdraw All Earning
        </Text>
      </Box>
    </Flex>

    <Button mt={14} colorScheme="primary" fontWeight="bold">
      Add Money
    </Button>
  </Box>
);

const TotalBalance = memo(TotalBalanceComponent);

export default TotalBalance;
