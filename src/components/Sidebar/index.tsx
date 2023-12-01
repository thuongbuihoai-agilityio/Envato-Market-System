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
} from '@constants/index';

import {} from '@constants/sidebar';

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
      placement={'left'}
      onClose={onClose}
      isOpen={!isOpen}
      closeOnOverlayClick={false}
      variant={{
        base: '',
        sm: '',
        md: 'clickThrough',
        lg: 'clickThrough',
        xl: 'clickThrough',
        '2xl': 'clickThrough',
      }}
    >
      <DrawerOverlay />

      <DrawerContent
        maxW={'308px'}
        display={{
          base: 'block',
          sm: 'block',
          md: 'none',
          lg: 'block',
          xl: 'block',
          '2xl': 'block',
        }}
        bg={'background.component.primary'}
      >
        <DrawerHeader
          display={'flex'}
          alignItems={'center'}
          h={'108px'}
          borderRightColor={'border.secondary'}
          borderRightWidth={'1px'}
          borderBottomColor={'border.secondary'}
          borderBottomWidth={'1px'}
        >
          <Logo />

          <Image
            src={IMAGES.LEFT_ARROW.url}
            alt={IMAGES.LEFT_ARROW.alt}
            position={'absolute'}
            top={'auto'}
            right={0}
            onClick={onOpen}
          />
        </DrawerHeader>

        <DrawerBody
          pt={3.5}
          pl={12}
          pb={'200px'}
          pr={0}
          w={'100%'}
          h={'100%'}
          sx={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '&::-webkit-scrollbar-thumb': {
              display: 'none',
            },
          }}
        >
          <VStack pr={'50px'} mb={9}>
            <Menu title="Menu" listItem={MENU_ITEM_LIST} />

            <Menu title="Help" listItem={HELP_ITEM_LIST} />

            <Menu title="Others" listItem={OTHER_ITEM_LIST} />
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>

    {/* Mini SideBar */}
    <Drawer
      placement={'left'}
      onClose={onClose}
      isOpen={isOpen}
      closeOnOverlayClick={false}
      variant={'clickThrough'}
    >
      <DrawerContent
        maxW={'96px'}
        display={{
          base: 'none',
          sm: 'none',
          md: 'block',
          lg: 'block',
          xl: 'block',
          '2xl': 'block',
        }}
        overscrollX={'none'}
        bg={'background.component.primary'}
      >
        <DrawerHeader
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          h={'108px'}
          borderRightColor={'border.secondary'}
          borderRightWidth={'1px'}
          borderBottomColor={'border.secondary'}
          borderBottomWidth={'1px'}
        >
          <Image src={IMAGES.LOGO_MINI.url} alt={IMAGES.LOGO_MINI.alt} />
          <Image
            src={IMAGES.LEFT_ARROW.url}
            alt={IMAGES.LEFT_ARROW.alt}
            position={'absolute'}
            top={'auto'}
            transform={'rotate(180deg)'}
            right={'-16px'}
            onClick={onClose}
            display={{
              base: 'none',
              sm: 'none',
              md: 'none',
              lg: 'block',
              xl: 'block',
              '2xl': 'block',
            }}
          />
        </DrawerHeader>
        <DrawerBody
          w={'100%'}
          pt={3.5}
          pb={'200px'}
          h={'100%'}
          sx={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '&::-webkit-scrollbar-thumb': {
              display: 'none',
            },
          }}
          display={'flex'}
          justifyContent={'center'}
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
              justifyContent={'center'}
              alignItems={'center'}
              borderRadius={'full'}
              border={'1px solid white'}
              boxSize={10}
              bg={'primary.500'}
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
