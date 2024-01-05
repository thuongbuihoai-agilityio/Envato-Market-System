import { Flex, Image, Td, Text, Tooltip } from '@chakra-ui/react';
import { memo } from 'react';

// Types
import { TDataSource } from '@app/interfaces';
import { IMAGES } from '@app/constants';

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
    minW={{ base: 150 }}
  >
    <Flex alignItems="center" gap="10px" w={200}>
      <Image
        src={`${image}`}
        alt={`Image of ${name}`}
        fallbackSrc={IMAGES.AVATAR_SIGN_UP.url}
        fallbackStrategy="onError"
        w={10}
        h={10}
        objectFit="cover"
        borderRadius="full"
      />
      <Tooltip
        minW="max-content"
        placement="bottom-start"
        label={name as string}
      >
        <Text
          fontSize="md"
          fontWeight="semibold"
          whiteSpace="break-spaces"
          noOfLines={1}
          minW={150}
          pr={10}
          flex={1}
        >
          {name as string}
        </Text>
      </Tooltip>
    </Flex>
  </Td>
);

const CustomerNameCell = memo(CustomerNameCellComponent);

export default CustomerNameCell;
