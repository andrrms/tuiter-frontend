import styled from "styled-components";
import { Link } from "react-router-dom";

export const DivStyle = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: fit-content;
  padding: 12px;

  font-size: 1.4rem;
  font-family: "Inter", sans-serif;
  font-weight: bolder;

  background-color: transparent;
  color: rgb(29, 155, 240);
  border-radius: 100px;
  border: none;

  transition: 0.2s ease background-color;
  &:hover {
    background-color: rgba(29, 155, 240, 0.1);
  }

  svg {
    font-size: 1.8rem;
    stroke: currentColor;
    fill: currentColor;
  }
`;

export const Anchor = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: #000;
`;
