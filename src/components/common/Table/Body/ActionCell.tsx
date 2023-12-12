import { Box, IconButton, IconButtonProps, Td } from '@chakra-ui/react';
import { memo } from 'react';

// Icons
import { Dot } from '@app/assets/icons';

type TActionCellProps = Pick<IconButtonProps, 'onClick'>;

const ActionCellComponent = ({ onClick }: TActionCellProps): JSX.Element => (
  <Td
    py={5}
    px={0}
    fontSize="md"
    color="text.primary"
    fontWeight="semibold"
    textAlign="left"
    w="50px"
  >
    <Box w={100}>
      <IconButton
        aria-label="This is the icon action"
        w={7}
        h={7}
        bgColor="transparent"
        _hover={{
          bgColor: 'transparent',
        }}
        onClick={onClick}
      >
        <Dot />
      </IconButton>
    </Box>
  </Td>
);

const ActionCell = memo(ActionCellComponent);

export default ActionCell;
