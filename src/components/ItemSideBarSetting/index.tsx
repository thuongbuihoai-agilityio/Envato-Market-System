import { Box, Flex, Text, Heading } from '@chakra-ui/react';

export interface ItemSideBarSettingProps {
  id: string;
  children?: React.ReactElement;
  activeItemId: string | undefined;
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
  const handleToggle = () => {
    onClick(id);
  };

  const isActive = id === activeItemId;

  return (
    <Box w="full" px={4} py={6}>
      <Flex
        cursor="pointer"
        onClick={handleToggle}
        columnGap={4}
        bg={isActive ? 'background.body.senary' : 'background.body.primary'}
        p={4}
        borderRadius="lg"
      >
        <Flex
          borderRadius="full"
          minW={12}
          h={12}
          bg={isActive ? 'primary.500' : 'background.body.primary'}
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

export default ItemSideBarSetting;
