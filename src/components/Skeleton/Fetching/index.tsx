import { Heading, Skeleton as SkeletonChakra } from '@chakra-ui/react';
import { ReactNode } from 'react';

// Constants
import { ERROR_MESSAGES } from '@constants/index';

// Themes
import { skeletonSizes } from '@themes/components';

type TFetchingProps = {
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
  size?: keyof typeof skeletonSizes;
  children?: ReactNode;
};

const Fetching = ({
  isLoading = false,
  isError = false,
  errorMessage = ERROR_MESSAGES.SOMETHING_ERROR,
  size = 'md',
  children,
}: TFetchingProps): JSX.Element => {
  if (isError) {
    return (
      <Heading
        as="h3"
        color="text.primary"
        bgColor="background.body.secondary"
        rounded="lg"
        boxShadow="sm"
        p={4}
      >
        {errorMessage}
      </Heading>
    );
  }

  if (isLoading) {
    return (
      <SkeletonChakra
        bg="background.component.primary"
        rounded="lg"
        size={size}
      />
    );
  }

  return <>{children}</>;
};

export default Fetching;
