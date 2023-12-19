import { Spinner } from '@chakra-ui/react';
import { ReactNode, Suspense, memo } from 'react';
import areEqual from 'react-fast-compare';

type TLazyProps = { children: ReactNode };

const LazyComponent = ({ children }: TLazyProps) => (
  <Suspense fallback={<Spinner position="fixed" top="50%" left="54%" />}>
    {children}
  </Suspense>
);

const Lazy = memo(LazyComponent, areEqual);

export default Lazy;
