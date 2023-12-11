import { ReactNode, memo } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

// Themes
import { configThemes } from '@app/themes';
import Fonts from '@app/themes/components/Fonts';

type TChakraProvider = {
  children: ReactNode;
};

const ThemesProvider = ({ children }: TChakraProvider): JSX.Element => (
  <ChakraProvider theme={configThemes}>
    <>
      <Fonts />
      {children}
    </>
  </ChakraProvider>
);

export default memo(ThemesProvider);
