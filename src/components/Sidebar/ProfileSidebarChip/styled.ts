import styled from "styled-components";
import { FiMoreHorizontal } from "react-icons/fi";

export const MoreIcon = styled(FiMoreHorizontal)`
  font-size: 1.2rem;
  align-self: center;
  margin-left: auto;
`;

export const ProfileSidebarChipContainer = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: auto;

  display: flex;
  gap: 6px;

  background-color: transparent;
  border-radius: 100px;
  border: none;

  text-align: left;

  transition: 0.2s ease background-color;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  figure {
    width: 44px;
    height: 44px;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    border-radius: 50%;

    img {
      height: 100%;
    }
  }
`;

export const ButtonContentArea = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 3px;

  justify-content: center;
`;

export const ProfileName = styled.p`
  font-size: 1rem;
  font-family: "Inter";
  font-weight: 600;
`;

export const Username = styled(ProfileName)`
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.6);
`;
