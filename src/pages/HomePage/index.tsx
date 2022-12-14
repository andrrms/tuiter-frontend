import React from "react";

import ThreePanelView from "../../components/ThreePanelView";
import MainArticleFeed from "../../components/MainArticleFeed";

import { HomePageContainer } from "./styles";

const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <ThreePanelView>
        <MainArticleFeed />
      </ThreePanelView>
    </HomePageContainer>
  );
};

export default HomePage;
