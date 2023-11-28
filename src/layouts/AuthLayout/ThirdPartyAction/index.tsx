import { Button, HStack, Image, Text } from '@chakra-ui/react';
import { memo } from 'react';

// Constants
import { IMAGES } from '@constants/index';

const ThirdPartyComponent = (): JSX.Element => {
  const buttonStyle = {
    bg: 'transparent',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'gray.200',
    _hover: {
      bg: 'transparent',
      borderColor: 'gray.200',
    },
  };

  return (
    <HStack
      mx="auto"
      mt={8}
      gap={4}
      flexDirection={{
        base: 'column',
        md: 'row',
      }}
    >
      <Button sx={buttonStyle}>
        <Image src={IMAGES.GOOGLE.url} alt={IMAGES.GOOGLE.alt} />
        <Text as="span" pl={2}>
          Sign In with Google
        </Text>
      </Button>
      <Button sx={buttonStyle}>
        <Image src={IMAGES.APPLE.url} alt={IMAGES.APPLE.alt} />
        <Text as="span" pl={2}>
          Sign In with Apple
        </Text>
      </Button>
    </HStack>
  );
};

const ThirdPartyAction = memo(ThirdPartyComponent);

export default ThirdPartyAction;
