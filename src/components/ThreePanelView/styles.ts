import styled from "styled-components";

export const ThreePanelViewContainer = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr minmax(33vw, 598px) 1fr;
  column-gap: 10px;

  overflow-y: auto;
`;

export const SidebarView = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const MainView = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;

  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

export const AsideView = styled.aside`
  display: flex;
  flex-direction: column;
`;
