import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage ";
import RequestDemo from "../pages/RequestDemo";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: Home,
      },
      {
        path: "feature",
        Component: Home,
      },
      {
        path: "request-demo",
        Component: RequestDemo,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
