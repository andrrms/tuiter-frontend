import React from "react";
import { FiTwitter } from "react-icons/fi";

import { DivStyle, Anchor } from "./styled";

const AppLogoButton: React.FC = () => {
  return (
    <Anchor to="/home">
      <DivStyle>
        <FiTwitter />
      </DivStyle>
    </Anchor>
  );
};

export default AppLogoButton;
