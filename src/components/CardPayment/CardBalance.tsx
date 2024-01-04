import { ReactElement, memo, useCallback, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Center,
  Flex,
  IconButton,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { TAuthStoreData, authStore } from '@app/stores';

// Components
import { CardPaymentProps } from '.';
import { Modal, PinCode } from '..';

// Icons
import { Eye, EyeSlash } from '@app/components/Icons';

// Utils
import { formatDecimalNumber } from '@app/utils';

// Types
import { TPinCodeForm } from '@app/layouts/MainLayout';

// Constants
import {
  ERROR_MESSAGES,
  IMAGES,
  SHOW_TIME,
  SUCCESS_MESSAGES,
} from '@app/constants';

// Hooks
import { useAuth, usePinCode } from '@app/hooks';

type TBalanceStatus = {
  balance: string;
  iconBalance: ReactElement;
};

const Card = ({ balance }: Required<Pick<CardPaymentProps, 'balance'>>) => {
  const { isOpen: isShowBalance, onToggle: onToggleShowBalance } =
    useDisclosure({ defaultIsOpen: true });

  const {
    isOpen: isSetPinCodeModalOpen,
    onClose: onCloseSetPinCodeModal,
    onOpen: onOpenSetPinCodeModal,
  } = useDisclosure();

  const {
    isOpen: isConfirmPinCodeModalOpen,
    onClose: onCloseConfirmPinCodeModal,
    onOpen: onOpenConfirmPinCodeModal,
  } = useDisclosure();

  const { iconBalance, balance: balanceStatus }: TBalanceStatus = {
    iconBalance: isShowBalance ? <EyeSlash /> : <Eye />,
    balance: isShowBalance ? '******' : `$${formatDecimalNumber(balance)}`,
  };

  const {
    control: setPinCodeControl,
    handleSubmit: handleSubmitSetPinCode,
    formState: { isValid: isSetValid, isSubmitting: isSetSubmitting },
    reset: resetSetPinCodeForm,
  } = useForm<TPinCodeForm>({});

  const {
    control: confirmPinCodeControl,
    handleSubmit: handleSubmitConfirmPinCode,
    formState: {
      isValid: isConfirmValid,
      isSubmitting: isConfirmSubmitting,
      isDirty: isConfirmDirty,
    },
    setFocus: setConfirmFocus,
    reset: resetConfirmPinCodeForm,
  } = useForm<TPinCodeForm>({
    defaultValues: {
      pinCode: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  // Set focus when confirming failed
  useEffect(() => {
    if (!isConfirmDirty) {
      setConfirmFocus('pinCode');
    }
  }, [isConfirmDirty, setConfirmFocus]);

  const user = authStore((state): TAuthStoreData['user'] => state.user);

  const { setUser } = useAuth();

  const toast = useToast();

  const { handleSetPinCode, handleConfirmPinCode } = usePinCode();

  const handleToggleShowBalance = useCallback(() => {
    if (!isShowBalance) {
      onToggleShowBalance();
    } else {
      if (!user?.pinCode) {
        onOpenSetPinCodeModal();
      } else {
        onOpenConfirmPinCodeModal();
      }
    }
  }, [
    isShowBalance,
    onOpenConfirmPinCodeModal,
    onOpenSetPinCodeModal,
    onToggleShowBalance,
    user?.pinCode,
  ]);

  // TODO: Update later
  const onSubmitPinCode: SubmitHandler<TPinCodeForm> = useCallback(
    async (data) => {
      if (user) {
        data.userId = user.id;
        if (!user?.pinCode) {
          try {
            await handleSetPinCode(data);

            setUser({ user: { ...user, pinCode: data.pinCode } });

            onCloseSetPinCodeModal();

            resetSetPinCodeForm();

            toast({
              title: SUCCESS_MESSAGES.SET_PIN_CODE.title,
              description: SUCCESS_MESSAGES.SET_PIN_CODE.description,
              status: 'success',
              duration: SHOW_TIME,
              isClosable: true,
              position: 'top-right',
            });
          } catch (error) {
            toast({
              title: ERROR_MESSAGES.SET_PIN_CODE.title,
              description: ERROR_MESSAGES.SET_PIN_CODE.description,
              status: 'error',
              duration: SHOW_TIME,
              isClosable: true,
              position: 'top-right',
            });
          }
        } else {
          try {
            await handleConfirmPinCode(data);
            onCloseConfirmPinCodeModal();
            resetConfirmPinCodeForm({
              pinCode: '',
            });
            onToggleShowBalance();

            toast({
              title: SUCCESS_MESSAGES.CONFIRM_PIN_CODE.title,
              description: SUCCESS_MESSAGES.CONFIRM_PIN_CODE.description,
              status: 'success',
              duration: SHOW_TIME,
              isClosable: true,
              position: 'top-right',
            });
          } catch (error) {
            toast({
              title: ERROR_MESSAGES.CONFIRM_PIN_CODE.title,
              description: ERROR_MESSAGES.CONFIRM_PIN_CODE.description,
              status: 'error',
              duration: SHOW_TIME,
              isClosable: true,
              position: 'top-right',
            });
            resetConfirmPinCodeForm();
          }
        }
      }
    },
    [
      handleConfirmPinCode,
      handleSetPinCode,
      onCloseConfirmPinCodeModal,
      onCloseSetPinCodeModal,
      onToggleShowBalance,
      resetConfirmPinCodeForm,
      resetSetPinCodeForm,
      setUser,
      toast,
      user,
    ],
  );

  const handleCloseSetPinCodeModal = useCallback(() => {
    onCloseSetPinCodeModal();
    resetSetPinCodeForm();
  }, [onCloseSetPinCodeModal, resetSetPinCodeForm]);

  const handleCloseConfirmPinCodeModal = useCallback(() => {
    onCloseConfirmPinCodeModal();
    resetConfirmPinCodeForm();
  }, [onCloseConfirmPinCodeModal, resetConfirmPinCodeForm]);

  const renderPinCodeModalBody = useCallback(() => {
    if (!user?.pinCode)
      return (
        <PinCode
          control={setPinCodeControl}
          isDisabled={!isSetValid || isSetSubmitting}
          onSubmit={handleSubmitSetPinCode(onSubmitPinCode)}
          onClose={handleCloseSetPinCodeModal}
        />
      );
    else {
      return (
        <PinCode
          control={confirmPinCodeControl}
          isDisabled={!isConfirmValid || isConfirmSubmitting}
          onSubmit={handleSubmitConfirmPinCode(onSubmitPinCode)}
          onClose={handleCloseConfirmPinCodeModal}
        />
      );
    }
  }, [
    confirmPinCodeControl,
    handleCloseConfirmPinCodeModal,
    handleCloseSetPinCodeModal,
    handleSubmitConfirmPinCode,
    handleSubmitSetPinCode,
    isConfirmSubmitting,
    isConfirmValid,
    isSetSubmitting,
    isSetValid,
    onSubmitPinCode,
    setPinCodeControl,
    user?.pinCode,
  ]);

  return (
    <>
      <Center>
        <Flex
          flexDir="column"
          bgImage={IMAGES.CARD_PAYMENT.url}
          justifyContent="flex-end"
          borderRadius="lg"
          bgPosition="center"
          bgSize={{ base: 'cover', sm: 'unset' }}
          bgRepeat="no-repeat"
          p={2}
          w={{ base: '100%', sm: 340 }}
          h={{ base: 180, sm: 200 }}
        >
          <Flex alignItems="center" gap={{ base: 1, sm: 3 }}>
            <Text variant="textSm" color="secondary.300">
              Balance
            </Text>
            <IconButton
              aria-label="eye"
              icon={iconBalance}
              w="fit-content"
              bg="none"
              onClick={handleToggleShowBalance}
              sx={{
                _hover: {
                  bg: 'none',
                },
              }}
            />
          </Flex>
          <Text
            color="common.white"
            variant="text3Xl"
            fontWeight="semibold"
            fontSize={{ base: 'md', sm: '3xl' }}
            lineHeight={{ base: 'unset', sm: 'lg' }}
          >
            {balanceStatus}
          </Text>
        </Flex>
      </Center>

      {/*Set PIN code Modal */}
      <Modal
        title="Please set the PIN code to your account"
        isOpen={isSetPinCodeModalOpen}
        onClose={handleCloseSetPinCodeModal}
        renderBody={renderPinCodeModalBody}
      />

      {/*Confirm PIN code Modal */}
      <Modal
        title="Please enter your PIN code"
        isOpen={isConfirmPinCodeModalOpen}
        onClose={handleCloseConfirmPinCodeModal}
        renderBody={renderPinCodeModalBody}
      />
    </>
  );
};

export const CardBalance = memo(Card);
