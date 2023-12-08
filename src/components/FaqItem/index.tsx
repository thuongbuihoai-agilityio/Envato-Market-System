import { useCallback, useState } from 'react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Box, Divider, Flex, Text } from '@chakra-ui/react';

export type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const colorFill = 'primary.500';

  return (
    <Box>
      <Flex
        onClick={toggleAnswer}
        cursor="pointer"
        align="center"
        mb={5}
        pb={5}
        borderBottom="1px solid"
        borderColor="border.quinary"
        color="text.quinary"
      >
        {isOpen ? (
          <MinusIcon color={colorFill} />
        ) : (
          <AddIcon color={colorFill} />
        )}
        <Text ml={5} fontWeight="bold" color="text.quinary" fontSize="lg">
          {question}
        </Text>
      </Flex>
      {isOpen && (
        <Flex flex={1} pb={4}>
          <Divider
            orientation="vertical"
            height="auto"
            borderColor={colorFill}
            borderWidth="1px"
            borderRadius="lg"
            marginLeft={9}
          />
          <Flex>
            <Text color="secondary.1050" fontSize="sm" lineHeight="7" pl={4}>
              {answer}
            </Text>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default FaqItem;
