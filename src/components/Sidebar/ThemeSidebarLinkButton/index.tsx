import React from "react";
import { LinkProps } from "react-router-dom";

import { DivStyle, Anchor } from "./styled";

interface IThemeSidebarLinkButton extends LinkProps {
  selected?: boolean;
}

const ThemeSidebarLinkButton: React.FC<
  React.PropsWithChildren<IThemeSidebarLinkButton>
> = ({ children, selected = false, ...anchorProps }) => {
  return (
    <Anchor {...anchorProps}>
      <DivStyle selected={!!selected}>{children}</DivStyle>
    </Anchor>
  );
};

export default ThemeSidebarLinkButton;
