import React from "react";
import ProfileSidebarChip from "../Sidebar/ProfileSidebarChip";

import { SideTempPanelContainer, TwitterLink } from "./styles";

const SideTempPanel: React.FC = () => {
  return (
    <SideTempPanelContainer>
      <h2>Ainda não tem muito aqui...</h2>
      <p>
        Essa rede ainda está em desenvolvimento, e praticamente nada ainda
        funciona, mas eu fico feliz que você esteja usando!
      </p>
      <p>Sinta-se a vontade para enviar quaisquer feedbacks no meu Twitter:</p>
      <TwitterLink
        href="https://www.twitter.com/andrrms"
        target="_blank"
        rel="noreferrer"
      >
        <ProfileSidebarChip
          profileImage="https://pbs.twimg.com/profile_images/1599170052728709127/SPqAlN7J_400x400.jpg"
          name="andré"
          username="@andrrms"
        />
      </TwitterLink>
    </SideTempPanelContainer>
  );
};

export default SideTempPanel;
