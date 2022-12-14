import styled from "styled-components";

export const MainArticleFeedContainer = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const FeedNavbar = styled.header`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 16px 16px;

  font-family: "Inter";
  font-weight: bolder;
  font-size: 1.3rem;

  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);

  position: sticky;
  top: 0;

  z-index: 5000;
`;

export const FinalFeedMessage = styled.li`
  padding: 100px 0;

  font-size: 1rem;
  font-family: "Inter";
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;

  color: rgba(0, 0, 0, 0.5);
`;
