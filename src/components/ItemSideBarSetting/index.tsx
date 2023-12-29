import isEqual from 'react-fast-compare';
import { memo, useCallback } from 'react';
import { Box, Flex, Text, Heading, useColorModeValue } from '@chakra-ui/react';

export interface ItemSideBarSettingProps {
  id: string;
  children?: React.ReactElement;
  activeItemId?: string;
  title?: string;
  content?: string;
  onClick: (id: string) => void;
}

const ItemSideBarSetting = ({
  id,
  children,
  activeItemId,
  onClick,
  title,
  content,
}: ItemSideBarSettingProps): JSX.Element => {
  const handleToggle = useCallback(() => {
    onClick(id);
  }, [id, onClick]);

  const color: string = useColorModeValue('secondary.200', 'secondary.600');

  const isActive: boolean = id === activeItemId;

  return (
    <Box w="full" onClick={handleToggle}>
      <Flex
        cursor="pointer"
        onClick={handleToggle}
        columnGap={4}
        bg={isActive ? color : 'transparent'}
        px={4}
        py={6}
        borderRadius="lg"
      >
        <Flex
          borderRadius="full"
          minW={12}
          h={12}
          bg={isActive ? 'text.currencyColor' : 'background.body.primary'}
          align="center"
          justify="center"
        >
          {children}
        </Flex>

        <Box>
          <Heading as="h4" fontSize="md" fontWeight="bold" color="text.quinary">
            {title}
          </Heading>
          <Text color="text.senary" fontWeight="medium" fontSize="sm" mt={0.5}>
            {content}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

const ItemSideBar = memo(ItemSideBarSetting, isEqual);

export default ItemSideBar;
