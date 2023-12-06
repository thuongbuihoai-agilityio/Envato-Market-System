import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import {
  Box,
  Flex,
  Image,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';

// Constants
import { IMAGES, SIDEBAR } from '@constants/index';

// Components
import { Header, Lazy, Sidebar } from '@components/index';

// Helpers
import { getTitleByPathName } from '@utils/helpers';

const MainLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isTablet] = useMediaQuery('(min-width: 768px) and (max-width: 992px)');

  const location = useLocation();

  const { pathname } = location;

  // Open mini sidebar on tablet
  useEffect(() => {
    if (isTablet) {
      onOpen();
    }
  }, [isTablet, onOpen]);

  return (
    <Flex w="full" h="full" bg="background.body.primary">
      <Box
        pl={{
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

        <Header name={getTitleByPathName(`${pathname.slice(1)}`)} />

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
