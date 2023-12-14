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
    px={0}
    fontSize="md"
    color="text.primary"
    fontWeight="semibold"
    textAlign="left"
    minW={280}
  >
    <Flex alignItems="center" gap="10px">
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
        maxW={200}
        noOfLines={1}
        title={`${name}`}
      >
        {name}
      </Text>
    </Flex>
  </Td>
);

const CustomerNameCell = memo(CustomerNameCellComponent);

export default CustomerNameCell;
