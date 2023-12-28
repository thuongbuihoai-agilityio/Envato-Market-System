import { Box, IconButton, IconButtonProps, Td } from '@chakra-ui/react';
import { memo, useCallback, useState } from 'react';

// Icons
import { Dot } from '@app/components/Icons';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

const ActionCellComponent = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    console.log('run');

    setOpenModal(!openModal)
  }, [openModal]);

  return (
    <Td
      py={5}
      px={0}
      fontSize="md"
      color="text.primary"
      fontWeight="semibold"
      textAlign="center"
      position='relative'
    >
      <IconButton
        aria-label="This is the icon action"
        w={7}
        h={7}
        bgColor="transparent"
        _hover={{
          bgColor: 'transparent',
        }}
        onClick={handleToggle}
      >
        <Dot />
      </IconButton>
      {openModal &&
        <Box position='absolute' w='fit-content' bottom={55} right={2}>
          <EditIcon />
          <DeleteIcon />
        </Box>
      }
    </Td>
  );
}

const ActionCell = memo(ActionCellComponent);

export default ActionCell;
