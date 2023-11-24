import { Box, Flex, Image, Text } from '@chakra-ui/react';

const Benefit = () => (
  <Flex flexDirection="column" alignItems="center">
    <Image
      src="/icons/signin.svg"
      width={350}
      alt="Sign in"
      className="image-signin"
    />
    <Box w="340px">
      <Text>Speady, Easy and Fast</Text>
      <Text>
        BankCo. help you set saving goals, earn cash back offers, Go to
        disclaimer for more details and get paychecks up to two days early. Get
        a $20 bonus when you receive qualifying direct deposits
      </Text>
    </Box>
  </Flex>
);

export default Benefit;
