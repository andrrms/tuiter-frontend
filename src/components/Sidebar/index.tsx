import React from "react";
import { useLocation } from "react-router-dom";
import { FiHome, FiHash, FiBell, FiMail, FiUser } from "react-icons/fi";

import ThemeSidebarLinkButton from "./ThemeSidebarLinkButton";
import AppLogoButton from "../AppLogoButton";
import ThemeLinkButton from "../ThemeLinkButton";
import ProfileSidebarChip from "./ProfileSidebarChip";

import JohnDoePic from "../../assets/johndoe.jpg";
import { SidebarContainer } from "./styles";

const Sidebar: React.FC = () => {
  const actualPath = useLocation().pathname;

  return (
    <SidebarContainer>
      <AppLogoButton />
      <ThemeSidebarLinkButton selected={actualPath === "/home"} to="/home">
        <FiHome /> <span>Página Inicial</span>
      </ThemeSidebarLinkButton>
      <ThemeSidebarLinkButton
        selected={actualPath === "/explore"}
        to="/explore"
      >
        <FiHash /> <span>Explorar</span>
      </ThemeSidebarLinkButton>
      <ThemeSidebarLinkButton
        selected={actualPath === "/notifications"}
        to="/notifications"
      >
        <FiBell /> <span>Notificações</span>
      </ThemeSidebarLinkButton>
      <ThemeSidebarLinkButton
        selected={actualPath === "/messages"}
        to="/messages"
      >
        <FiMail /> <span>Mensagens</span>
      </ThemeSidebarLinkButton>
      <ThemeSidebarLinkButton
        selected={actualPath === "/profile"}
        to="/profile"
      >
        <FiUser /> <span>Perfil</span>
      </ThemeSidebarLinkButton>
      <ThemeLinkButton $primary $extend to="/tweet">
        Tuitar
      </ThemeLinkButton>

      <ProfileSidebarChip
        name="John Doe"
        username="@john_doename"
        profileImage={JohnDoePic}
      />
    </SidebarContainer>
  );
};

export default Sidebar;
