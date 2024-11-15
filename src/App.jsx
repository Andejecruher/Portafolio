import './index.css';
import '@mantine/core/styles.css';
import './app.css';

import { MantineProvider } from '@mantine/core';
import { RouterProvider } from "react-router-dom";
import routes from "@src/router/router";
import theme from "@src/theme/theme";

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark" withGlobalStyles withNormalizeCSS>
      <RouterProvider future={{
        v7_startTransition: true,
      }} router={routes} />
    </MantineProvider>
  );
}

export default App;
