import { Outlet, useLocation } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import {
  Box,
  Flex,
  Image,
  useDisclosure,
  useToast,
  useMediaQuery,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';

// Constants
import {
  ERROR_MESSAGES,
  IMAGES,
  SHOW_TIME,
  SIDEBAR,
  SUCCESS_MESSAGES,
  TITLES_HEADER,
} from '@app/constants';

// Components
import { Lazy, Modal, PinCode } from '@app/components';

// Layouts
import { Header, SideBar } from '@app/layouts';

// HOCs
import { withErrorBoundary } from '@app/hocs/withErrorBoundary';

// Stores
import { TAuthStoreData, authStore } from '@app/stores';

// Hooks
import { useAuth, usePinCode } from '@app/hooks';

export type TPinCodeForm = {
  pinCode: string;
  userId: string;
};

const Layout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({
    defaultIsOpen: true,
  });

  const [isTablet] = useMediaQuery('(min-width: 768px) and (max-width: 992px)');

  const location = useLocation();

  const { pathname } = location;

  // Open mini sidebar on tablet
  useEffect(() => {
    if (isTablet) {
      onOpen();
    }
  }, [isTablet, onOpen]);

  const {
    isOpen: isPinCodeModalOpen,
    onClose: onClosePinCodeModal,
    onOpen: onOpenPinCodeModal,
  } = useDisclosure();

  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<TPinCodeForm>({
    defaultValues: {
      pinCode: '',
    },
  });

  const user = authStore((state): TAuthStoreData['user'] => state.user);

  const { setUser } = useAuth();

  const toast = useToast();

  const { handleSetPinCode } = usePinCode();

  useEffect(() => {
    if (!user?.pinCode) {
      onOpenPinCodeModal();
    }
  }, []);

  const onSubmitPinCode: SubmitHandler<TPinCodeForm> = useCallback(
    (data) => {
      if (user) {
        data.userId = user.id;

        try {
          handleSetPinCode(data);

          setUser({ user: { ...user, pinCode: data.pinCode } });

          onClosePinCodeModal();

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
      }
    },
    [handleSetPinCode, onClosePinCodeModal, setUser, toast, user],
  );

  const renderPinCodeModalBody = useCallback(
    () => (
      <PinCode
        control={control}
        isDisabled={!isValid || isSubmitting}
        onSubmit={handleSubmit(onSubmitPinCode)}
        onClose={onClosePinCodeModal}
      />
    ),
    [
      control,
      handleSubmit,
      isSubmitting,
      isValid,
      onClosePinCodeModal,
      onSubmitPinCode,
    ],
  );

  return (
    <>
      <Flex w="full" h="full" bg="background.body.primary">
        <Box
          pl={{
            base: 0,
            md: !isOpen
              ? SIDEBAR.EXPAND_SIDEBAR_WIDTH
              : SIDEBAR.MINI_SIDEBAR_WIDTH,
            // lg: !isOpen
            //   ? SIDEBAR.EXPAND_SIDEBAR_WIDTH
            //   : SIDEBAR.MINI_SIDEBAR_WIDTH,
            // '4xl': !isOpen
            //   ? SIDEBAR.EXPAND_SIDEBAR_WIDTH
            //   : SIDEBAR.MINI_SIDEBAR_WIDTH,
          }}
          w="full"
          minH="100vh"
          h="full"
          sx={{
            transition: 'all .25s ease-in-out',
          }}
        >
          <SideBar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

          <Header
            name={
              TITLES_HEADER[`${pathname.slice(1)}`] || TITLES_HEADER.DEFAULT
            }
          />

          {/* Button to show Sidebar on mobile */}
          <Image
            src={IMAGES.LEFT_ARROW.url}
            alt={IMAGES.LEFT_ARROW.alt}
            fallbackSrc={IMAGES.FALLBACK.url}
            fallbackStrategy="onError"
            position="fixed"
            w={4}
            h={10}
            top={8}
            transform="rotate(180deg)"
            left={0}
            onClick={onClose}
          />

          {/* Content of the page */}
          <Lazy>
            <Outlet />
          </Lazy>
        </Box>
      </Flex>
      <Modal
        title="Please set the PIN code to your account"
        isOpen={isPinCodeModalOpen}
        onClose={onClosePinCodeModal}
        renderBody={renderPinCodeModalBody}
      />
    </>
  );
};

const MainLayout = withErrorBoundary(Layout);

export default MainLayout;
