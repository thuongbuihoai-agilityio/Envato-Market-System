import areEqual from 'react-fast-compare';
import { Box, Flex } from '@chakra-ui/react';
import { ReactNode, memo, useMemo } from 'react';

// Constants
import { IMAGES, TITLES } from '@app/constants';

// HOCs
import { withAuthentication, withErrorBoundary } from '@app/hocs';

// Components
import { Benefit, Divider, Logo, SwitchTheme } from '@app/components';
import AuthHeading from './Heading';
import AuthFooter from './Footer';

// Types
import { TImageDetails } from '@app/interfaces';

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
  const { url, alt, width, height }: TImageDetails = useMemo(
    (): TImageDetails => (isSignInForm ? IMAGES.SIGN_IN : IMAGES.SIGN_UP),
    [isSignInForm],
  );

  return (
    <Flex width="100%" minH="100vh">
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
        <Flex justifyContent="space-between" px={12}>
          <Logo />
          <SwitchTheme />
        </Flex>
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
      <Benefit
        image={{ url: url, width: width, height: height }}
        alt={alt}
        heading="Speady, Easy and Fast"
      />
    </Flex>
  );
};
const AuthLayout = memo(
  withErrorBoundary(withAuthentication(AuthLayoutComponent)),
  areEqual,
);

export default AuthLayout;
