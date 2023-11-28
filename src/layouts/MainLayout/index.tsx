import { Outlet } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import { Suspense } from 'react';

const MainLayout = () => (
  <Suspense fallback={<Spinner />}>
    <Outlet />
  </Suspense>
);

export default MainLayout;
