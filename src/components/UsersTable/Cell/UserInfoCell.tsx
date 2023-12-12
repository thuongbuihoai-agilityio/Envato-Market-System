import { Box, Flex, Img, Td, Text } from '@chakra-ui/react';
import { memo } from 'react';

type TUserInfoProps = {
  name: string;
  imageURL: string;
  role: string;
  address: string;
  time: string;
};

const UserInfoComponent = ({
  imageURL,
  name,
  address,
  time,
  role,
}: TUserInfoProps): JSX.Element => (
  <Td
    py={5}
    px={4}
    fontSize="md"
    color="text.primary"
    fontWeight="semibold"
    textAlign="left"
    minW={470}
  >
    <Flex alignItems="center" gap="10px">
      <Img
        src={`${imageURL}`}
        alt={`Image of ${name}`}
        w={16}
        h={16}
        borderRadius="lg"
        bgColor="transparent"
      />
      <Box>
        <Text as="h4" fontSize="lg" fontWeight="bold">
          {name}
        </Text>
        <Text
          fontSize="md"
          color="text.textInfo"
          fontWeight="semibold"
          lineHeight={8}
        >
          {role}&sdot;
          <Text
            as="span"
            fontSize="sm"
            fontWeight="medium"
            color="secondary.350"
          >
            {address}&sdot;{time}
          </Text>
        </Text>
      </Box>
    </Flex>
  </Td>
);

const UserInfoCell = memo(UserInfoComponent);

export default UserInfoCell;
