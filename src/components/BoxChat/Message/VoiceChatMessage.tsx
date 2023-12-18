import { ColorMode, Image, useColorMode } from '@chakra-ui/react';
import { memo } from 'react';

const VoiceChatMessageComponent = (): JSX.Element => {
  const { colorMode } = useColorMode();

  const imageByColorMode: Record<ColorMode, string> = {
    light: 'images/record.webp',
    dark: 'images/record-dark.webp',
  };

  return <Image src={imageByColorMode[colorMode]} alt="Message Image" ml={2} />;
};

const VoiceChatMessage = memo(VoiceChatMessageComponent);

export default VoiceChatMessage;
