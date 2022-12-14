import styled, { css } from "styled-components";

interface IProfileIconContainer {
  size: number;
}

export const ProfileIconContainer = styled.figure<IProfileIconContainer>`
  ${({ size }) => css`
    width: ${size}px;
    height: ${size}px;
  `}

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  border-radius: 50%;

  img {
    height: 100%;
  }
`;
