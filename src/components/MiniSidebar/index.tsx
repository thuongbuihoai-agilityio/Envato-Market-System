import { memo } from 'react';
import isEqual from 'react-fast-compare';

// type
import { SidebarProps } from '@app/layouts/Sidebar';

// components
import {
  Center,
  ColorMode,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Image,
  List,
  VStack,
  useColorMode,
} from '@chakra-ui/react';
import { Menu } from '@app/components';

// constants
import { IMAGES, OTHER_ITEM_LIST, SIDEBAR } from '@app/constants';

// Types
import { TImage } from '@app/interfaces';
import { TMenuItem } from '../common/Menu';

const MiniSidebar = ({
  onClose,
  isOpen,
  menuItem,
}: Omit<SidebarProps, 'onOpen'>) => {
  const { colorMode } = useColorMode();

  const logos: Record<ColorMode, TImage> = {
    light: IMAGES.LOGO_MINI_LIGHT,
    dark: IMAGES.LOGO_MINI_DARK,
  };

  return (
    <Drawer
      placement="left"
      onClose={onClose}
      isOpen={isOpen}
      closeOnOverlayClick={false}
      trapFocus={false}
      variant="clickThrough"
      blockScrollOnMount={false}
    >
      <DrawerContent
        maxW={SIDEBAR.MINI_SIDEBAR_WIDTH}
        maxH="full"
        display={{
          base: 'none',
          md: 'block',
        }}
        bg="background.component.primary"
      >
        <DrawerHeader
          as={Center}
          h={108}
          borderRightColor="border.secondary"
          borderRightWidth="1px"
          borderBottomColor="border.secondary"
          borderBottomWidth="1px"
        >
          {/* Mini Logo in Light Mode */}
          <Image
            src={logos[colorMode]?.url}
            alt={logos[colorMode]?.alt}
            fallbackSrc={IMAGES.FALLBACK.url}
            fallbackStrategy="onError"
            w={8}
            h={45}
            objectFit="contain"
            cursor="pointer"
          />

          {/* Close Button of Mini Sidebar */}
          <Image
            src={IMAGES.LEFT_ARROW.url}
            alt={IMAGES.LEFT_ARROW.alt}
            fallbackSrc={IMAGES.FALLBACK.url}
            fallbackStrategy="onError"
            position="absolute"
            top="auto"
            w={4}
            h={10}
            transform="rotate(180deg)"
            right={-4}
            onClick={onClose}
            display={{
              base: 'none',
              lg: 'block',
            }}
            cursor="pointer"
          />
        </DrawerHeader>

        <DrawerBody
          w="full"
          pt={3.5}
          pb={50}
          h="full"
          sx={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '&::-webkit-scrollbar-thumb': {
              display: 'none',
            },
          }}
          display="flex"
          justifyContent="center"
        >
          <VStack>
            <List>
              <Menu listItem={[...(menuItem as TMenuItem[])]} isMinify />
              <Menu listItem={[...OTHER_ITEM_LIST]} isMinify />
            </List>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const MiniSidebarComponent = memo(MiniSidebar, isEqual);
export default MiniSidebarComponent;
