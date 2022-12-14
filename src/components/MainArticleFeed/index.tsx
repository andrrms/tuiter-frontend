import React from "react";
import { FiLayout } from "react-icons/fi";

import ComposeArea from "../ComposeArea";
import ArticlePost from "../ArticlePost";

import {
  MainArticleFeedContainer,
  FeedNavbar,
  FinalFeedMessage,
} from "./styles";

const mockUser = {
  name: "andré",
  username: "@andrrms",
  profilePicture:
    "https://pbs.twimg.com/profile_images/1599170052728709127/SPqAlN7J_400x400.jpg",
};

const mockTweets = [
  {
    body: "Leia a mensagem ao lado!",
    likes: 2,
    retweets: 1,
    comments: 0,
    author: mockUser,
  },
];

const MainArticleFeed: React.FC = () => {
  return (
    <MainArticleFeedContainer>
      <FeedNavbar>
        <h1>Página Inicial</h1>
        <FiLayout />
      </FeedNavbar>
      <ComposeArea />
      <ul>
        {mockTweets.map((tweet, i) => (
          <li key={i}>
            <ArticlePost
              author={tweet.author}
              likes={tweet.likes}
              comments={tweet.comments}
              retweets={tweet.retweets}
            >
              {tweet.body}
            </ArticlePost>
          </li>
        ))}
        <FinalFeedMessage>
          <p>Isso é tudo :p</p>
        </FinalFeedMessage>
      </ul>
    </MainArticleFeedContainer>
  );
};

export default MainArticleFeed;
