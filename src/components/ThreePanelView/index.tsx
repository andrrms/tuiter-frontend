import React from "react";
import Sidebar from "../Sidebar";
import SideTempPanel from "../SideTempPanel";

import {
  AsideView,
  MainView,
  SidebarView,
  ThreePanelViewContainer,
} from "./styles";

interface IThreePanelView {
  disableLeftSide?: boolean;
  customLeftSideComponent?: React.ReactNode;
  disableRightSide?: boolean;
  customRightSideComponent?: React.ReactNode;
  customMainSize?: string;
}

const ThreePanelView: React.FC<React.PropsWithChildren<IThreePanelView>> = ({
  children,
  disableLeftSide,
  disableRightSide,
  customLeftSideComponent,
  customRightSideComponent,
  customMainSize,
}) => {
  return (
    <ThreePanelViewContainer
      disableLeftSide={!!disableLeftSide}
      disableRightSide={!!disableRightSide}
      customMainSize={customMainSize}
    >
      {!disableLeftSide && (
        <SidebarView>{customLeftSideComponent || <Sidebar />}</SidebarView>
      )}
      <MainView>{children}</MainView>
      {!disableRightSide && (
        <AsideView>{customRightSideComponent || <SideTempPanel />}</AsideView>
      )}
    </ThreePanelViewContainer>
  );
};

export default ThreePanelView;
