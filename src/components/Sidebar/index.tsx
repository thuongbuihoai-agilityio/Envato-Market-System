import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  List,
  VStack,
} from '@chakra-ui/react';
import { memo } from 'react';

// constants
import {
  IMAGES,
  HELP_ITEM_LIST,
  MENU_ITEM_LIST,
  OTHER_ITEM_LIST,
  SIDEBAR,
} from '@constants/index';

// components
import { Logo, Menu } from '..';

export type SidebarProps = {
  onClose: () => void;
  onOpen: () => void;
  isOpen: boolean;
};

const Sidebar = ({ onClose, onOpen, isOpen }: SidebarProps) => (
  <>
    {/* Expand Sidebar */}
    <Drawer
      placement="left"
      onClose={onClose}
      isOpen={!isOpen}
      trapFocus={false}
      closeOnOverlayClick={false}
      variant={{
        base: '',
        md: 'clickThrough',
      }}
    >
      <DrawerOverlay />

      <DrawerContent
        maxW={SIDEBAR.EXPAND_SIDEBAR_WIDTH}
        display={{
          base: 'block',
          md: 'none',
          lg: 'block',
        }}
        bg="background.component.primary"
      >
        <DrawerHeader
          display="flex"
          alignItems="center"
          h="108px"
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
            <Menu title="Menu" listItem={MENU_ITEM_LIST} />

            <Menu title="Help" listItem={HELP_ITEM_LIST} />

            <Menu title="Others" listItem={OTHER_ITEM_LIST} />
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>

    {/* Mini SideBar */}
    <Drawer
      placement="left"
      onClose={onClose}
      isOpen={isOpen}
      closeOnOverlayClick={false}
      trapFocus={false}
      variant="clickThrough"
    >
      <DrawerContent
        maxW={SIDEBAR.MINI_SIDEBAR_WIDTH}
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
          h="108px"
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
              <Menu
                listItem={[...MENU_ITEM_LIST, ...HELP_ITEM_LIST]}
                isMinify
              />
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
  </>
);

const SideBarComponent = memo(Sidebar);

export default SideBarComponent;
