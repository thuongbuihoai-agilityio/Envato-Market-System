import { RouterProvider } from 'react-router-dom';

// Routes
import { routes } from './routes';

// Providers
import { ChakraProvider, QueryProvider } from '@providers/index';

// Styles
import './App.css';

const App = () => (
  <QueryProvider>
    <ChakraProvider>
      <RouterProvider router={routes} />
    </ChakraProvider>
  </QueryProvider>
);

export default App;
