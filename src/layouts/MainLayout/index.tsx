import { Header } from '@components/index';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Header name="Dashboard" />
      <Outlet />
    </>
  );
};
export default MainLayout;
