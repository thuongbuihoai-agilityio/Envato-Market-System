import React from 'react';
import ReactDOM from 'react-dom/client';

// App
import App from './app/App.tsx';

// config why-did-you-render
import './wdyr';

// Styles
import './app/App.css';

// Providers
import { ChakraProvider, QueryProvider } from './providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </QueryProvider>
  </React.StrictMode>,
);
