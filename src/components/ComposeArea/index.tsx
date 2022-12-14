import React from "react";
import {
  FiImage,
  FiBarChart2,
  FiSmile,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";

import ProfileIcon from "../ProfileIcon";

import JohnDoePic from "../../assets/johndoe.jpg";
import {
  ComposeAreaContainer,
  MainArea,
  ComposeTextArea,
  ComposeMediaActionsList,
  ActionItem,
} from "./styles";
import ThemeButton from "../ThemeButton";

const ComposeArea: React.FC = () => {
  return (
    <ComposeAreaContainer>
      <ProfileIcon src={JohnDoePic} size={52} />
      <MainArea>
        <ComposeTextArea
          rows={3}
          placeholder="O que está acontecendo?"
        ></ComposeTextArea>
        <ComposeMediaActionsList>
          <ActionItem>
            <ThemeButton $small $primaryText title="Adicionar imagem">
              <FiImage />
            </ThemeButton>
          </ActionItem>
          <ActionItem>
            <ThemeButton $small $primaryText title="Adicionar enquete">
              <FiBarChart2 />
            </ThemeButton>
          </ActionItem>
          <ActionItem>
            <ThemeButton $small $primaryText title="Adicionar emoji">
              <FiSmile />
            </ThemeButton>
          </ActionItem>
          <ActionItem>
            <ThemeButton $small $primaryText title="Programar tuíte">
              <FiCalendar />
            </ThemeButton>
          </ActionItem>
          <ActionItem>
            <ThemeButton $small $primaryText title="Adicionar localização">
              <FiMapPin />
            </ThemeButton>
          </ActionItem>
          <ActionItem $end>
            <ThemeButton $primary $small disabled>
              Publicar
            </ThemeButton>
          </ActionItem>
        </ComposeMediaActionsList>
      </MainArea>
    </ComposeAreaContainer>
  );
};

export default ComposeArea;
