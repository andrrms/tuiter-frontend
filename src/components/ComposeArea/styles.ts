import styled, { css } from "styled-components";

export const ComposeAreaContainer = styled.div`
  width: 100%;
  padding: 0 16px;

  display: flex;
  gap: 6px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.075);
`;

export const MainArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ComposeTextArea = styled.textarea`
  border: none;
  background-color: transparent;
  outline: none;

  font-family: "Inter";
  font-size: 1.2rem;

  padding-top: 10px;
  resize: none;
`;

export const ComposeMediaActionsList = styled.ul`
  display: flex;
  gap: 2px;

  padding: 10px 0;

  border-top: 1px solid rgba(0, 0, 0, 0.075);

  list-style: none;
`;

interface IActionItem {
  $end?: boolean;
}

export const ActionItem = styled.li<IActionItem>`
  display: inline;
  ${({ $end }) =>
    $end &&
    css`
      margin-left: auto;
    `}
`;
