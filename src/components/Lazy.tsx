import { Spinner } from '@chakra-ui/react';
import { ReactNode, Suspense, memo } from 'react';
import isEqual from 'react-fast-compare';

type TLazyProps = { children: ReactNode };

const LazyComponent = ({ children }: TLazyProps) => (
  <Suspense fallback={<Spinner variant="center" />}>{children}</Suspense>
);

const Lazy = memo(LazyComponent, isEqual);

export default Lazy;
