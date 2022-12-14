import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

interface IDivStyle {
  selected: boolean;
}

export const DivStyle = styled.div<IDivStyle>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: fit-content;
  padding: 12px;
  padding-right: 20px;

  font-size: 1.4rem;
  font-family: "Inter", sans-serif;
  font-weight: ${({ selected }) => (selected ? "bolder" : "500")};

  background-color: transparent;
  border-radius: 100px;
  border: none;

  transition: 0.2s ease background-color;

  svg {
    font-size: 1.8rem;
    stroke-width: 1.5px;

    ${({ selected }) =>
      selected &&
      css`
        stroke-width: 3px;
      `};
  }
`;

export const Anchor = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: #000;

  &:hover ${DivStyle} {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
