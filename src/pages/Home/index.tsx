import { Button } from '@chakra-ui/react';
import { memo } from 'react';

const DashboardPage = () => (
  <div>
    <Button>Sign Up</Button>
    <Button variant="outline">Sign Up With Google</Button>
  </div>
);

const Dashboard = memo(DashboardPage);
export default Dashboard;
