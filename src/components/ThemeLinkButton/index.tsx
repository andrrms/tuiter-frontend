import styled, { css } from "styled-components";
import { Link, LinkProps } from "react-router-dom";

interface IThemeLinkButton extends LinkProps {
  $extend?: boolean;
  $primary?: boolean;
  $large?: boolean;
}

const ThemeLinkButton = styled(Link)<IThemeLinkButton>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: fit-content;
  padding: 18px;

  font-size: 1.2rem;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  text-decoration: none;

  background-color: transparent;
  border-radius: 100px;
  border: none;

  transition: 0.2s ease background-color;

  svg {
    font-size: 1.8rem;
  }

  ${({ $primary }) =>
    $primary &&
    css`
      background-color: rgb(29, 155, 240);
      color: #fff;
    `}

  ${({ $large }) =>
    $large &&
    css`
      font-size: 1.6rem;
      padding: 20px;
    `}

  ${({ $extend }) =>
    $extend &&
    css`
      width: 100%;
    `}
`;

export default ThemeLinkButton;
