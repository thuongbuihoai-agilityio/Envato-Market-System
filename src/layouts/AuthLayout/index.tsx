import { Box, Flex } from '@chakra-ui/react';
import { ReactNode, memo, useMemo } from 'react';

// Constants
import { IMAGES, TITLES } from '@constants/index';

// Components
import { Benefit, Divider } from '@components/index';
import { Logo } from '@components/index';
import AuthHeading from './Heading';
import AuthFooter from './Footer';

// Types
import { TImage } from '@interfaces/index';

type TAuthLayoutProps = {
  children?: ReactNode;
  title?: string;
  isSignInForm?: boolean;
};

const AuthLayoutComponent = ({
  children,
  isSignInForm = true,
}: TAuthLayoutProps): JSX.Element => {
  const title: string = useMemo(
    (): string => (isSignInForm ? TITLES.SIGN_IN : TITLES.SIGN_UP),
    [isSignInForm],
  );
  const { url, alt }: TImage = useMemo(
    (): TImage => (isSignInForm ? IMAGES.SIGN_IN : IMAGES.SIGN_UP),
    [isSignInForm],
  );

  return (
    <Flex width="100%">
      <Box
        as="section"
        p="40px 0 48px"
        flex={1}
        w={{
          base: '100%',
          md: 'unset',
        }}
        bg="background.body.secondary"
      >
        <Logo />
        <Box
          w={{
            base: '100%',
            sm: 425,
            md: 460,
          }}
          margin="auto"
          pt={24}
          pb={16}
          px={5}
          sx={{
            boxSizing: {
              base: 'border-box',
              md: 'unset',
            },
          }}
        >
          <AuthHeading title={title} />
          <Divider content={TITLES.AUTH_DiVIDER} />
          {children}
          <AuthFooter />
        </Box>
      </Box>
      <Benefit imageURL={url} alt={alt} />
    </Flex>
  );
};
const AuthLayout = memo(AuthLayoutComponent);

export default AuthLayout;
