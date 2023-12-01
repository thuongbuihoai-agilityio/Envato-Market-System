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
import { IMAGES, ROUTES } from '@constants/index';

import { Lazy } from '@components/index';

// Types
import { TUser } from '@interfaces/user';
import { useEffect } from 'react';
import Sidebar from '@components/Sidebar';

const MainLayout = () => {
  const user = useAuth((state): TUser | null => state.user);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isTablet] = useMediaQuery(
    '(min-width: 768px) and (max-width: 1023px)',
  );

  useEffect(() => {
    if (isTablet) {
      onOpen();
    }
  }, [isTablet, onOpen]);

  if (!user) return <Navigate to={ROUTES.LOGIN} />;

  return (
    <Flex w={'100%'} h={'100%'}>
      <Lazy>
        <Sidebar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <Box
          ml={{
            base: 0,
            md: !isOpen ? 0 : '96px',
            lg: !isOpen ? '308px' : '96px',
            xl: !isOpen ? '308px' : '96px',
            '2xl': !isOpen ? '308px' : '96px',
          }}
          w={'full'}
          sx={{
            transition: 'all .25s ease-in-out',
          }}
          h={'100vh'}
        >
          <Image
            src={IMAGES.LEFT_ARROW.url}
            alt={IMAGES.LEFT_ARROW.alt}
            position={'absolute'}
            top={'32px'}
            transform={'rotate(180deg)'}
            left={'0'}
            onClick={onClose}
          />
          <Outlet />
        </Box>
      </Lazy>
    </Flex>
  );
};
export default MainLayout;
