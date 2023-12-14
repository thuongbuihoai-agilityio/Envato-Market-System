import { ColorMode, Image, useColorMode } from '@chakra-ui/react';
import { memo } from 'react';

const MessageImageComponent = (): JSX.Element => {
  const { colorMode } = useColorMode();

  const imageByColorMode: Record<ColorMode, string> = {
    light: 'images/record.png',
    dark: 'images/record-dark.png',
  };

  return <Image src={imageByColorMode[colorMode]} alt="Message Image" ml={2} />;
};

const MessageImage = memo(MessageImageComponent);

export default MessageImage;
