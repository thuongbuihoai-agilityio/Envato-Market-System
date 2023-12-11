import { RouterProvider } from 'react-router-dom';

// Routes
import { ROUTER } from '@app/routes';

// Providers
import { ChakraProvider, QueryProvider } from '@app/providers';

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
