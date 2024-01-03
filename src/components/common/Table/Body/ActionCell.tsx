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
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Modal } from '@app/components';
import UpdateModal from './TransactionModal';

// Icons
import { Dot } from '@app/components/Icons';

// Interfaces
import { TTransaction } from '@app/interfaces';

interface ActionCallProps {
  transaction?: TTransaction;
  isOpenModal?: boolean;
  onDeleteTransaction?: (transactionData: TTransaction) => void;
}

const ActionCellComponent = ({
  transaction,
  isOpenModal = false,
  onDeleteTransaction = () => {},
}: ActionCallProps) => {
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);

  const handleToggleDelete = useCallback(() => {
    setIsOpenConfirmModal(true);
    setIsDelete(true);
  }, []);

  const handleToggleUpdate = useCallback(() => {
    setIsOpenConfirmModal(true);
    setIsDelete(false);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsOpenConfirmModal(!isOpenConfirmModal);
  }, [isOpenConfirmModal]);

  const handleDeleteTransaction = () =>
    onDeleteTransaction(transaction as TTransaction);

  const DeleteModal = () => (
    <Flex>
      <Button w={44} bg="green.600" mr={3} onClick={handleDeleteTransaction}>
        Delete
      </Button>
      <Button
        w={44}
        bg="orange.300"
        _hover={{ bg: 'orange.400' }}
        onClick={handleCloseModal}
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
                      <EditIcon onClick={handleToggleUpdate} />
                      <DeleteIcon onClick={handleToggleDelete} />
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
          onClose={handleCloseModal}
          title={
            isDelete
              ? 'Do you want to delete this transaction?'
              : 'Update transaction'
          }
          renderBody={
            isDelete ? (
              <DeleteModal />
            ) : (
              <UpdateModal
                transaction={transaction}
                onCloseModal={handleCloseModal}
              />
            )
          }
        />
      )}
    </>
  );
};

const ActionCell = memo(ActionCellComponent);

export default ActionCell;
