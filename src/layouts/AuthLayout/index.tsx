import { Box, Flex } from '@chakra-ui/react';
import { ReactNode, memo, useMemo } from 'react';
import { Navigate } from 'react-router-dom';

// Hooks
import { useAuth } from '@hooks/index';

// Constants
import { IMAGES, ROUTES, TITLES } from '@constants/index';

// Components
import { Benefit, Divider } from '@components/index';
import { Logo } from '@components/index';
import AuthHeading from './Heading';
import AuthFooter from './Footer';

// Types
import { TImage, TUser } from '@interfaces/index';

type TAuthLayoutProps = {
  children?: ReactNode;
  title?: string;
  isSignInForm?: boolean;
};

const AuthLayoutComponent = ({
  children,
  isSignInForm = true,
}: TAuthLayoutProps): JSX.Element => {
  const user = useAuth((state): TUser | null => state.user);

  const title: string = useMemo(
    (): string => (isSignInForm ? TITLES.SIGN_IN : TITLES.SIGN_UP),
    [isSignInForm],
  );
  const { url, alt }: TImage = useMemo(
    (): TImage => (isSignInForm ? IMAGES.SIGN_IN : IMAGES.SIGN_UP),
    [isSignInForm],
  );

  if (user) return <Navigate to={ROUTES.ROOT} replace />;

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
        <Box pl={12}>
          <Logo />
        </Box>
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
        imageURL={url}
        alt={alt}
        heading="Speady, Easy and Fast"
        description={`BankCo. help you set saving goals, earn cash back offers, Go to
          disclaimer for more details and get paychecks up to two days early. Get
          a
            <span class="text-highlight">
              $20
            </span>
          bonus when you receive qualifying direct deposits`}
      />
    </Flex>
  );
};
const AuthLayout = memo(AuthLayoutComponent);

export default AuthLayout;
