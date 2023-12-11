import { memo } from 'react';
import isEqual from 'react-fast-compare';

// type
import { SidebarProps } from '@app/components/Sidebar';

// components
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  VStack,
} from '@chakra-ui/react';
import { Logo, Menu } from '@app/components';

// constants
import { SIDEBAR, IMAGES } from '@app/constants';

// mocks
import { EXPAND_SIDEBAR_MENU_LIST } from '@app/mocks/sidebar';

const ExpandSidebar = ({ onClose, onOpen, isOpen }: SidebarProps) => (
  <Drawer
    placement="left"
    onClose={onClose}
    isOpen={isOpen}
    trapFocus={false}
    closeOnOverlayClick={false}
    variant={{
      base: '',
      '2xl': 'clickThrough',
    }}
    blockScrollOnMount={false}
  >
    <DrawerOverlay />

    <DrawerContent
      maxW={SIDEBAR.EXPAND_SIDEBAR_WIDTH}
      display="block"
      bg="background.component.primary"
      maxH="full"
    >
      <DrawerHeader
        display="flex"
        alignItems="center"
        h={108}
        borderRightColor="border.secondary"
        borderRightWidth="1px"
        borderBottomColor="border.secondary"
        borderBottomWidth="1px"
        pl={12.5}
      >
        <Logo />

        {/* Close button of Expand sidebar */}
        <Image
          src={IMAGES.LEFT_ARROW.url}
          alt={IMAGES.LEFT_ARROW.alt}
          position="absolute"
          top="auto"
          right={0}
          onClick={onOpen}
          cursor="pointer"
        />
      </DrawerHeader>

      <DrawerBody
        pt={3.5}
        pl={12}
        pb={50}
        pr={0}
        w="full"
        h="full"
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '&::-webkit-scrollbar-thumb': {
            display: 'none',
          },
        }}
      >
        <VStack pr={12.5} mb={9}>
          {EXPAND_SIDEBAR_MENU_LIST.map((item) => (
            <Menu key={item.id} title={item.title} listItem={item.listItem} />
          ))}
        </VStack>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

const ExpandSidebarComponent = memo(ExpandSidebar, isEqual);
export default ExpandSidebarComponent;
