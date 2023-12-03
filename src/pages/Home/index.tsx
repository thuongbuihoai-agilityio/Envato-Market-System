import { Pagination } from '@components/index';
import { memo } from 'react';
const DashboardPage = () => <Pagination totalCount={100} pageSize={8} />;

const Dashboard = memo(DashboardPage);
export default Dashboard;
