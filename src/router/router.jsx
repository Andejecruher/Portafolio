import { createBrowserRouter } from "react-router-dom";
import Public from "@src/components/Layout/public";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Public />,
      children: [
        {
          path: "/",
          element: <div>Home</div>,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_skipActionStatusRevalidation: true,
    },
  });

export default router;