import { useRoutes } from "react-router-dom";

import ThreePanelView from "../components/ThreePanelView";
import MainArticleFeed from "../components/MainArticleFeed";

export default function Routes() {
  const routes = [
    {
      path: "*",
      element: (
        <ThreePanelView>
          <MainArticleFeed />
        </ThreePanelView>
      ),
    },
  ];

  return useRoutes(routes);
}
