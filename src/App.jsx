import './index.css';
import '@mantine/notifications/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';

import { useEffect, useState } from 'react';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { RouterProvider } from "react-router-dom";
import { BlogProvider } from '@src/context/BlogProvider';
import { PageLoader } from './pages/PageLoader';
import routes from "@src/router/router";
import theme from "@src/theme/theme";
import '@src/styles/app.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula la carga inicial (puedes reemplazarlo con una llamada a la API si es necesario)
    const simulateLoading = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500)); // Simula una espera
      } finally {
        setIsLoading(false);
      }
    };

    simulateLoading();
  }, []); // Solo se ejecuta al montar el componente
  return (
    <BlogProvider>
      <MantineProvider theme={theme} defaultColorScheme="dark" withGlobalStyles withNormalizeCSS>
        <Notifications />
        {isLoading ? (
          <PageLoader />
        ) : (
          <RouterProvider future={{
            v7_startTransition: true,
          }} router={routes} />
        )}

      </MantineProvider>
    </BlogProvider>
  );
}

export default App;
