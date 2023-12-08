import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

export type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

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
          <MinusIcon color="primary.500" />
        ) : (
          <AddIcon color="primary.500" />
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
            borderColor="primary.500"
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
