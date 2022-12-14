import React from "react";
import { FiBox } from "react-icons/fi";

import { DivStyle, Anchor } from "./styled";

const AppLogoButton: React.FC = () => {
  return (
    <Anchor to="/home">
      <DivStyle>
        <FiBox /> Projeto X
      </DivStyle>
    </Anchor>
  );
};

export default AppLogoButton;
