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
  >
    <Flex alignItems="center" gap="10px">
      <Img
        src={`${image}`}
        alt={`Image of ${name}`}
        w={10}
        h={10}
        borderRadius="full"
      />
      <Text fontSize="md" fontWeight="semibold">
        {name}
      </Text>
    </Flex>
  </Td>
);

const CustomerNameCell = memo(CustomerNameCellComponent);

export default CustomerNameCell;
