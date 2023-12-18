import { Text, VStack } from '@chakra-ui/react';
import { memo } from 'react';
import { FallbackProps } from 'react-error-boundary';
import areEqual from 'react-fast-compare';

const ErrorComponent = ({ error }: FallbackProps): JSX.Element => (
  <VStack justifyContent="center" minH="calc(100vh - 200px)">
    <Text fontSize="lg" fontWeight="bold" color="text.primary">
      An error has been occurred!!
    </Text>
    <Text fontSize="3xl" fontWeight="bold" color="danger.400">
      {error?.message || (error as string)}
    </Text>
  </VStack>
);

const FallbackErrorBoundary = memo(ErrorComponent, areEqual);

export default FallbackErrorBoundary;
