import styled from "styled-components";
import ThemeButton from "../ThemeButton";

export const ArticlePostContainer = styled.article`
  display: flex;
  gap: 10px;

  padding: 8px 16px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.075);
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  flex: 1;
`;

export const ArticleInfo = styled.header`
  padding-top: 6px;

  display: flex;
  gap: 4px;

  font-family: "Inter";
  font-size: 1rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.75);

  .name {
    font-weight: 600;
    color: #000;
  }
`;

export const ArticleBody = styled.div`
  font-family: "Inter";
  font-size: 0.94rem;
`;

export const ArticleActionsList = styled.ul`
  width: 85%;
  margin-top: 5px;
  margin-left: -8px;

  display: flex;
  justify-content: space-between;
`;

export const ArticleAction = styled.li`
  ${ThemeButton} {
    color: rgba(0, 0, 0, 0.5);

    span {
      font-size: 0.9rem;
    }
  }
`;
