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
import { Modal, TransactionModal } from '@app/components';

// Icons
import { Dot } from '@app/components/Icons';

// Interfaces
import { TTransaction } from '@app/interfaces';

interface ActionCallProps {
  transaction?: TTransaction;
  isOpenModal?: boolean;
  onDeleteTransaction?: (transactionData: TTransaction) => void;
  onUpdateTransaction?: (transactionData: TTransaction) => void;
}

const ActionCellComponent = ({
  transaction,
  isOpenModal = false,
  onDeleteTransaction = () => {},
  onUpdateTransaction = () => {},
}: ActionCallProps) => {
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);

  const customerId = transaction?.customer.customerId;
  console.log('transaction', transaction);

  const handleOpenConfirmModal = useCallback(
    (isDeleteModal: boolean) => () => {
      setIsOpenConfirmModal(true);
      setIsDelete(isDeleteModal);
    },
    [],
  );

  const handleToggleModal = useCallback(() => {
    setIsOpenConfirmModal(!isOpenConfirmModal);
  }, [isOpenConfirmModal]);

  const handleDeleteTransaction = useCallback(
    () => onDeleteTransaction(transaction as TTransaction),
    [onDeleteTransaction, transaction],
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
                      right={4}
                      minW={12}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      {!customerId && (
                        <EditIcon
                          w={5}
                          h={5}
                          onClick={handleOpenConfirmModal(false)}
                        />
                      )}
                      <DeleteIcon
                        ml={customerId ? 4 : 0}
                        w={5}
                        h={5}
                        onClick={handleOpenConfirmModal(true)}
                      />
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
          title={isDelete ? 'Delete transaction' : 'Update transaction'}
          body={
            <TransactionModal
              isDelete={isDelete}
              transaction={transaction}
              onDeleteTransaction={handleDeleteTransaction}
              onUpdateTransaction={onUpdateTransaction}
              onCloseModal={handleToggleModal}
            />
          }
          haveCloseButton
        />
      )}
    </>
  );
};

const ActionCell = memo(ActionCellComponent);

export default ActionCell;
