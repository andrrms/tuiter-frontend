import React from "react";

import { ProfileIconContainer } from "./styles";

interface IProfileIcon {
  src: string;
  size?: number;
}

const ProfileIcon: React.FC<IProfileIcon> = ({ src, size = 44 }) => {
  return (
    <ProfileIconContainer size={size}>
      <img src={src} alt="Foto de perfil" draggable="false" />
    </ProfileIconContainer>
  );
};

export default ProfileIcon;
