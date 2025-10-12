import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './index.css';
import App from './App.jsx';
import 'aos/dist/aos.css';
import AOS from 'aos';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

const Root = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<Root />);
