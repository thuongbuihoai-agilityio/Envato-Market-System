import { RouterProvider } from 'react-router-dom';

// Routes
import { ROUTER } from './routes/index';

// Providers
import { ChakraProvider, QueryProvider } from '@providers/index';

// Styles
import './App.css';

const App = () => (
  <QueryProvider>
    <ChakraProvider>
      <RouterProvider router={ROUTER} />
    </ChakraProvider>
  </QueryProvider>
);

export default App;
