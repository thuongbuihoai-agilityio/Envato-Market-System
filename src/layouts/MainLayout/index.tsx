import { Navigate, Outlet } from 'react-router-dom';

import {
  Box,
  Flex,
  Image,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';

// Hooks
import { useAuth } from '@hooks/useAuth';

// Constants
import { IMAGES, ROUTES, SIDEBAR } from '@constants/index';

import { Header, Lazy } from '@components/index';

// Types
import { TUser } from '@interfaces/user';
import { useEffect } from 'react';
import Sidebar from '@components/Sidebar';

const MainLayout = () => {
  const user = useAuth((state): TUser | null => state.user);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isTablet] = useMediaQuery('(min-width: 768px) and (max-width: 992px)');

  // Open mini sidebar on tablet
  useEffect(() => {
    if (isTablet) {
      onOpen();
    }
  }, [isTablet, onOpen]);

  if (!user) return <Navigate to={ROUTES.LOGIN} />;

  return (
    <Flex w="full" h="full" bg="background.body.primary">
      <Box
        ml={{
          base: 0,
          md: !isOpen ? 0 : SIDEBAR.MINI_SIDEBAR_WIDTH,
          lg: SIDEBAR.MINI_SIDEBAR_WIDTH,
          '2xl': !isOpen
            ? SIDEBAR.EXPAND_SIDEBAR_WIDTH
            : SIDEBAR.MINI_SIDEBAR_WIDTH,
        }}
        w="full"
        minH="100vh"
        h="full"
        sx={{
          transition: 'all .25s ease-in-out',
        }}
      >
        <Sidebar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

        <Header name="Dashboard" />

        {/* Button to show Sidebar on mobile */}
        <Image
          src={IMAGES.LEFT_ARROW.url}
          alt={IMAGES.LEFT_ARROW.alt}
          position="fixed"
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
  );
};

export default MainLayout;
