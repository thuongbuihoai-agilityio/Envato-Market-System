import { Fragment, ReactElement, ReactNode } from 'react';
import { Flex, Heading, List, ListItem, Text, VStack } from '@chakra-ui/react';

// components
import { Navigation } from '@components/index';

export type TMenuItem = {
  id: number;
  leftIcon?: () => ReactElement;
  rightIcon?: ReactNode;
  menuItemContent?: string;
  destination: string;
};

export type MenuProps = {
  title?: string;
  listItem: Array<TMenuItem>;
  isMinify?: boolean;
};

const Menu = ({ title = '', listItem, isMinify = false }: MenuProps) => (
  <VStack mb={isMinify ? 9 : 5} w="full" overscroll="full">
    {!isMinify && (
      <Heading
        as="h4"
        borderColor="border.primary"
        borderBottomWidth="1px"
        w="full"
        lineHeight={1.75}
        fontSize="sm"
        color="text.secondary"
        _light={{
          borderColor: 'gray.100',
          color: 'gray.600',
        }}
        fontWeight="md"
      >
        {title}
      </Heading>
    )}

    <List
      mt={2.5}
      spacing={isMinify ? 5.5 : 2.75}
      w="full"
      sx={{
        textAlign: '-webkit-center',
      }}
    >
      {listItem.map(
        ({ leftIcon, rightIcon, destination, menuItemContent, id }) => {
          const LeftIcon = leftIcon || Fragment;

          return (
            <ListItem key={id}>
              {isMinify ? (
                <Navigation destination={destination}>
                  <LeftIcon />
                </Navigation>
              ) : (
                <Navigation destination={destination}>
                  <Flex alignItems="center" justifyContent="space-between">
                    <Flex
                      gap={2.5}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <LeftIcon />

                      <Text
                        fontSize="lg"
                        fontWeight="md"
                        color="text.primary"
                        transition="all .25s ease-in-out"
                      >
                        {menuItemContent}
                      </Text>
                    </Flex>

                    {rightIcon}
                  </Flex>
                </Navigation>
              )}
            </ListItem>
          );
        },
      )}
    </List>
  </VStack>
);

export default Menu;
