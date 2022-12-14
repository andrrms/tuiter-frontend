import styled, { css } from "styled-components";

interface IThemeButton {
  $extend?: boolean;
  $primary?: boolean;
  $primaryText?: boolean;
  $large?: boolean;
  $small?: boolean;
  $extraSmall?: boolean;
}

const ThemeButton = styled.button<IThemeButton>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: fit-content;
  padding: 14px;

  font-size: 1.2rem;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  text-decoration: none;

  background-color: transparent;
  border-radius: 100px;
  border: none;

  transition: 0.2s ease background-color, 0.2s ease opacity;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  svg {
    font-size: 1.4rem;
  }

  ${({ $primary }) =>
    $primary &&
    css`
      background-color: rgb(29, 155, 240);
      color: #fff;

      &:hover {
        background-color: rgb(11, 121, 194);
      }
    `}

  ${({ $primaryText }) =>
    $primaryText &&
    css`
      color: rgb(29, 155, 240);

      &:hover {
        background-color: rgba(29, 155, 240, 0.1);
      }
    `}

  ${({ $large }) =>
    $large &&
    css`
      font-size: 1.6rem;
      padding: 20px;

      svg {
        font-size: 1.8rem;
      }
    `}

  ${({ $small }) =>
    $small &&
    css`
      font-size: 1rem;
      padding: 8px;

      svg {
        font-size: 1.2rem;
      }
    `}

  ${({ $extraSmall }) =>
    $extraSmall &&
    css`
      font-size: 0.8rem;
      padding: 6px;

      svg {
        font-size: 1rem;
      }
    `}

  ${({ $extend }) =>
    $extend &&
    css`
      width: 100%;
    `}
`;

export default ThemeButton;
