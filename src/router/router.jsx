import { createBrowserRouter, Navigate } from "react-router-dom";
import Public from "@src/components/Layout/public";
import ErrorPage from "@src/pages/Error/Error";
import NotFoundPage from "@src/pages/Error/404";
import HomePage from "@src/pages/Home/Home";


const router = createBrowserRouter(
  [
    {
      path: "/not-found",
      element: <NotFoundPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/",
      element: <Public />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Navigate to="/home" />,
        },
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <div>About</div>,
        },
        {
          path: "/work",
          element: <div>Work</div>,
        },
        {
          path: "/contact",
          element: <div>Contact</div>,
        },
        {
          path: "/blog",
          element: <div>Block</div>,
        },
        {
          path: "*",
          element: <Navigate to="/not-found" />,
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