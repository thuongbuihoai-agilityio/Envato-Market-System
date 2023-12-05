import { memo } from 'react';
import isEqual from 'react-fast-compare';

// type
import { SidebarProps } from '@components/Sidebar';

// components
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Flex,
  Image,
  List,
  VStack,
} from '@chakra-ui/react';
import { Menu } from '@components/index';

// constants
import {
  HELP_ITEM_LIST,
  MENU_ITEM_LIST,
  OTHER_ITEM_LIST,
  SIDEBAR,
} from '@constants/sidebar';
import { IMAGES } from '@constants/images';

const MiniSidebar = ({ onClose, isOpen }: Omit<SidebarProps, 'onOpen'>) => (
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
        display="flex"
        alignItems="center"
        justifyContent="center"
        h={108}
        borderRightColor="border.secondary"
        borderRightWidth="1px"
        borderBottomColor="border.secondary"
        borderBottomWidth="1px"
      >
        {/* Mini Logo in Light Mode */}
        <Image
          src={IMAGES.LOGO_MINI_LIGHT.url}
          alt={IMAGES.LOGO_MINI_LIGHT.alt}
          _dark={{
            display: 'none',
          }}
          cursor="pointer"
        />

        {/* Mini Logo in Dark Mode */}
        <Image
          src={IMAGES.LOGO_MINI_DARK.url}
          alt={IMAGES.LOGO_MINI_DARK.alt}
          _light={{
            display: 'none',
          }}
          cursor="pointer"
        />

        {/* Close Button of Mini Sidebar */}
        <Image
          src={IMAGES.LEFT_ARROW.url}
          alt={IMAGES.LEFT_ARROW.alt}
          position="absolute"
          top="auto"
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
            <Menu listItem={[...MENU_ITEM_LIST, ...HELP_ITEM_LIST]} isMinify />
            <Menu listItem={[...OTHER_ITEM_LIST]} isMinify />
          </List>

          <Flex
            justifyContent="center"
            alignItems="center"
            borderRadius="full"
            border="1px solid white"
            boxSize={10}
            bg="primary.500"
          >
            <Image src={IMAGES.MONEY_BAG.url} alt={IMAGES.MONEY_BAG.alt} />
          </Flex>
        </VStack>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

const MiniSidebarComponent = memo(MiniSidebar, isEqual);
export default MiniSidebarComponent;
