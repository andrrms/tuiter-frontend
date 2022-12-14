import React from "react";
import Sidebar from "../Sidebar";

import {
  AsideView,
  MainView,
  SidebarView,
  ThreePanelViewContainer,
} from "./styles";

const ThreePanelView: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ThreePanelViewContainer>
      <SidebarView>
        <Sidebar />
      </SidebarView>
      <MainView>{children}</MainView>
      <AsideView>Ainda vai ter algo</AsideView>
    </ThreePanelViewContainer>
  );
};

export default ThreePanelView;
