import { Button } from '@chakra-ui/react';
import { memo } from 'react';

const DashboardPage = () => (
  <div>
    <Button size="lg">Sign Up</Button>
    <Button size="xl" variant="outline">
      Sign Up With Google
    </Button>
  </div>
);

const Dashboard = memo(DashboardPage);
export default Dashboard;
