import { memo } from 'react';
import { ColorMode, Image, useColorMode } from '@chakra-ui/react';

// Constants
import { IMAGES } from '@app/constants';

const VoiceChatMessageComponent = (): JSX.Element => {
  const { colorMode } = useColorMode();

  const imageByColorMode: Record<ColorMode, string> = {
    light: IMAGES.RECORD.url,
    dark: IMAGES.RECORD_DARK.url,
  };

  return (
    <Image
      src={imageByColorMode[colorMode]}
      alt="Message Image"
      fallbackSrc={IMAGES.FALLBACK.url}
      fallbackStrategy="onError"
      objectFit="contain"
      ml={2}
      w={203}
      h={46}
    />
  );
};

const VoiceChatMessage = memo(VoiceChatMessageComponent);

export default VoiceChatMessage;
