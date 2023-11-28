import { Box, Flex } from '@chakra-ui/react';
import { ReactNode, memo } from 'react';

// Constants
import { IMAGES, TITLES } from '@constants/index';

// Components
import { Benefit, Divider } from '@components/index';
import { Logo } from '@components/index';
import AuthHeading from './Heading';
import ThirdPartyAction from './ThirdPartyAction';
import AuthFooter from './Footer';

type TAuthLayoutProps = {
  children?: ReactNode;
  title?: string;
  isSignForm?: boolean;
};

const AuthLayoutComponent = ({
  children,
  isSignForm = true,
}: TAuthLayoutProps): JSX.Element => {
  const title: string = isSignForm ? TITLES.SIGN_IN : TITLES.SIGN_UP;
  const {
    url,
    alt,
  }: {
    url: string;
    alt: string;
  } = isSignForm ? IMAGES.SIGN_IN : IMAGES.SIGN_UP;

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
            md: 450,
          }}
          margin="auto"
          pt={24}
          pb={16}
          px={5}
        >
          <AuthHeading title={title} />
          <ThirdPartyAction />
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
