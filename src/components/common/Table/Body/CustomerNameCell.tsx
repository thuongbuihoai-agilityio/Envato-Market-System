import { Flex, Img, Td, Text } from '@chakra-ui/react';
import { memo } from 'react';

// Types
import { TDataSource } from '@app/interfaces';

const CustomerNameCellComponent = ({
  image,
  name,
}: TDataSource): JSX.Element => (
  <Td
    py={5}
    pr={5}
    pl={0}
    fontSize="md"
    color="text.primary"
    fontWeight="semibold"
    textAlign="left"
    minW={350}
  >
    <Flex alignItems="center" gap="10px" maxW={350}>
      <Img
        src={`${image}`}
        alt={`Image of ${name}`}
        w={10}
        h={10}
        objectFit="cover"
        borderRadius="full"
      />
      <Text
        fontSize="md"
        fontWeight="semibold"
        whiteSpace="break-spaces"
        noOfLines={1}
        minW={250}
        title={`${name}`}
        pr={10}
        flex={1}
      >
        {name}
      </Text>
    </Flex>
  </Td>
);

const CustomerNameCell = memo(CustomerNameCellComponent);

export default CustomerNameCell;
