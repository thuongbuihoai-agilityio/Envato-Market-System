import { Header } from '@layouts/index';
import { memo } from 'react';
const DashboardPage = () => <Header title="Dashboard" />;

const Dashboard = memo(DashboardPage);
export default Dashboard;
