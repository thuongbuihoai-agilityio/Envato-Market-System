// import { Flex, Image, Text } from '@chakra-ui/react';

// constant
// import { IMAGES } from '.';

// icons
import {
  DashboardIcon,
  HistoryIcon,
  InboxIcon,
  MyWalletIcon,
  SettingIcon,
  SignOutIcon,
  StatisticIcon,
  TransactionIcon,
  UserIcon,
} from '@assets/icons';

export const MENU_ITEM_LIST = [
  {
    id: 1,
    leftIcon: DashboardIcon,
    menuItemContent: 'Dashboards',
    destination: '/',
  },
  {
    id: 2,
    leftIcon: TransactionIcon,
    menuItemContent: 'Transactions',
    destination: '/transaction',
  },
  {
    id: 3,
    leftIcon: StatisticIcon,
    menuItemContent: 'Statistics',
    destination: '/',
  },
  {
    id: 5,
    leftIcon: MyWalletIcon,
    menuItemContent: 'My Wallet',
    destination: '/my-wallet',
  },
  {
    id: 6,
    leftIcon: InboxIcon,
    // rightIcon: (
    //   <Flex alignItems={'center'} gap={2.5} maxH={5}>
    //     <Image src={IMAGES.NOTE.url} alt={IMAGES.NOTE.alt} />
    //     <Image
    //       src={IMAGES.INBOX_AVATAR.url}
    //       alt={IMAGES.INBOX_AVATAR.url}
    //       boxSize={5}
    //       borderRadius={'full'}
    //     />
    //     <Flex
    //       justifyContent={'center'}
    //       alignItems={'center'}
    //       boxSize={5}
    //       borderRadius={'full'}
    //       bg={'primary.500'}
    //     >
    //       <Text
    //         as={'span'}
    //         color={'white'}
    //         fontWeight={'semibold'}
    //         fontSize={'10px'}
    //       >
    //         5
    //       </Text>
    //     </Flex>
    //   </Flex>
    // ),
    menuItemContent: 'Inbox',
    destination: '/',
  },

  {
    id: 8,
    leftIcon: UserIcon,
    menuItemContent: 'User',
    destination: '/user',
  },

  {
    id: 10,
    leftIcon: HistoryIcon,
    menuItemContent: 'History',
    destination: '/history',
  },
];

export const HELP_ITEM_LIST = [
  {
    id: 12,
    leftIcon: SettingIcon,
    menuItemContent: 'Setting',
    destination: '/setting',
  },
];

export const OTHER_ITEM_LIST = [
  {
    id: 17,
    leftIcon: SignOutIcon,
    menuItemContent: 'Sign Out',
    destination: '/',
  },
];
