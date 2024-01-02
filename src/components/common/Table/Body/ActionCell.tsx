import { memo, useCallback, useState } from 'react';
import {
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Td,
} from '@chakra-ui/react';

// Icons
import { Dot } from '@app/components/Icons';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Modal } from '@app/components';

interface ActionCallProps {
  id?: string | number;
  isOpenModal?: boolean;
  onDeleteTransaction?: (id: string | number) => void;
}

const ActionCellComponent = ({
  id,
  isOpenModal = false,
  onDeleteTransaction = () => {},
}: ActionCallProps) => {
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState<boolean>(false);

  const handleToggleModal = useCallback(() => {
    setIsOpenConfirmModal(!isOpenConfirmModal);
  }, [isOpenConfirmModal]);

  const handleDeleteTransaction = () => onDeleteTransaction(id as string);

  const renderBodyModal = () => (
    <Flex>
      <Button w={44} bg="green.600" mr={3} onClick={handleDeleteTransaction}>
        Delete
      </Button>
      <Button
        w={44}
        bg="orange.300"
        _hover={{ bg: 'orange.400' }}
        onClick={handleToggleModal}
      >
        Cancel
      </Button>
    </Flex>
  );

  return (
    <>
      <Td
        px={0}
        fontSize="md"
        color="text.primary"
        fontWeight="semibold"
        textAlign="center"
        position="relative"
      >
        <Menu closeOnSelect={false}>
          {({ isOpen }) => (
            <>
              <MenuButton
                as={Button}
                isActive={isOpen}
                p={0}
                bg="none"
                _hover={{
                  bg: 'none',
                }}
                _active={{
                  bg: 'none',
                }}
              >
                <IconButton
                  aria-label="This is the icon action"
                  w={7}
                  h={7}
                  bgColor="transparent"
                  _hover={{
                    bgColor: 'transparent',
                  }}
                >
                  <Dot />
                </IconButton>
              </MenuButton>
              {isOpenModal && (
                <MenuList border="none" mt="-2.5" bg="transparent" minW={65}>
                  <MenuItem bg="transparent">
                    <Flex
                      position="absolute"
                      minW={10}
                      justifyContent="space-between"
                    >
                      <EditIcon />
                      <DeleteIcon onClick={handleToggleModal} />
                    </Flex>
                  </MenuItem>
                </MenuList>
              )}
            </>
          )}
        </Menu>
      </Td>
      {isOpenConfirmModal && (
        <Modal
          isOpen={isOpenConfirmModal}
          onClose={handleToggleModal}
          title="Do you want to delete this transaction?"
          renderBody={renderBodyModal}
        />
      )}
    </>
  );
};

const ActionCell = memo(ActionCellComponent);

export default ActionCell;
