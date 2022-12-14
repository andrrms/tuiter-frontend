import React from "react";

import {
  ButtonContentArea,
  MoreIcon,
  ProfileName,
  ProfileSidebarChipContainer,
  Username,
} from "./styles";

interface IProfileSidebarChip
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  username: string;
  profileImage: string;
}

const ProfileSidebarChip: React.FC<IProfileSidebarChip> = ({
  name,
  username,
  profileImage,
  ...props
}) => {
  return (
    <ProfileSidebarChipContainer {...props}>
      <figure>
        <img draggable="false" src={profileImage} alt="Foto de perfil" />
      </figure>
      <ButtonContentArea>
        <ProfileName>{name}</ProfileName>
        <Username>{username}</Username>
      </ButtonContentArea>
      <MoreIcon />
    </ProfileSidebarChipContainer>
  );
};

export default ProfileSidebarChip;
