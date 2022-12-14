import React from "react";
import { FiMessageSquare, FiRepeat, FiHeart, FiShare } from "react-icons/fi";

import ProfileIcon from "../ProfileIcon";
import ThemeButton from "../ThemeButton";

import {
  ArticleAction,
  ArticleActionsList,
  ArticleBody,
  ArticleInfo,
  ArticlePostContainer,
  MainContent,
} from "./styles";

interface IArticlePost {
  author: {
    name: string;
    username: string;
    profilePicture: string;
  };
  likes: number;
  retweets: number;
  comments: number;
}

const ArticlePost: React.FC<React.PropsWithChildren<IArticlePost>> = ({
  children,
  author,
  likes,
  retweets,
  comments,
}) => {
  return (
    <ArticlePostContainer>
      <ProfileIcon src={author.profilePicture} size={52} />
      <MainContent>
        <ArticleInfo>
          <p className="name">{author.name}</p>
          <span>&#8231;</span>
          <p className="username">{author.username}</p>
          <span>&#8231;</span>
          <p className="time">9 min</p>
        </ArticleInfo>
        <ArticleBody>
          <p>{children}</p>
        </ArticleBody>
        <ArticleActionsList>
          <ArticleAction>
            <ThemeButton $small>
              <FiMessageSquare /> <span>{comments}</span>
            </ThemeButton>
          </ArticleAction>
          <ArticleAction>
            <ThemeButton $small>
              <FiRepeat /> <span>{retweets}</span>
            </ThemeButton>
          </ArticleAction>
          <ArticleAction>
            <ThemeButton $small>
              <FiHeart /> <span>{likes}</span>
            </ThemeButton>
          </ArticleAction>
          <ArticleAction>
            <ThemeButton $small>
              <FiShare />
            </ThemeButton>
          </ArticleAction>
        </ArticleActionsList>
      </MainContent>
    </ArticlePostContainer>
  );
};

export default ArticlePost;
