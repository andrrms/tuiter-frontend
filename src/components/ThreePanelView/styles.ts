import styled, { css } from "styled-components";

interface IThreePanelViewContainer {
  disableLeftSide?: boolean;
  disableRightSide?: boolean;
  customMainSize?: string;
}

// TODO: Improve this trash code
export const ThreePanelViewContainer = styled.div<IThreePanelViewContainer>`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: ${({ disableLeftSide }) => !disableLeftSide && "1fr"} ${({
      customMainSize,
    }) =>
      customMainSize
        ? customMainSize
        : css`
  minmax(
      33vw,
      598px
    )
  `} ${({ disableRightSide }) => !disableRightSide && "1fr"};
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

  border-left: 1px solid rgba(0, 0, 0, 0.075);
  border-right: 1px solid rgba(0, 0, 0, 0.075);
`;

export const AsideView = styled.aside`
  display: flex;
  flex-direction: column;
`;
