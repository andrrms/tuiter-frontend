import { useRoutes } from "react-router-dom";

import HomePage from "../pages/HomePage";

export default function Routes() {
  const routes = [
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/explore",
      element: <HomePage />,
    },
  ];

  return useRoutes(routes);
}
