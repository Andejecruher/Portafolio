import './index.css';
import '@mantine/notifications/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';


import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { RouterProvider } from "react-router-dom";
import { BlogProvider } from '@src/context/BlogProvider';
import { LoadingProvider } from '@src/context/LoadingProvider';
import routes from "@src/router/router";
import theme from "@src/theme/theme";
import '@src/styles/app.css';

function App() {
  return (
    <LoadingProvider>
      <BlogProvider>
        <MantineProvider theme={theme} defaultColorScheme="dark" withGlobalStyles withNormalizeCSS>
          <Notifications />
          <RouterProvider future={{
            v7_startTransition: true,
          }} router={routes} />
        </MantineProvider>
      </BlogProvider>
    </LoadingProvider>
  );
}

export default App;
