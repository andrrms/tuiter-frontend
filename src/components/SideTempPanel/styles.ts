import styled from "styled-components";

export const SideTempPanelContainer = styled.aside`
  padding: 20px;
  margin-top: 50px;
  max-width: 350px;

  position: sticky;
  top: 20px;

  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-family: "Inter";
    font-size: 1.4rem;
    font-weight: 600;
    text-align: center;
  }

  p {
    font-family: "Inter";
    font-size: 1rem;
  }
`;

export const TwitterLink = styled.a`
  text-decoration: none;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 100px;

  svg {
    display: none;
  }
`;
