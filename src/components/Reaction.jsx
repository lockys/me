import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const REACTION_LIST = [
  {
    emoji: '👍',
    key: 'thumbsupCounts',
  },
  {
    emoji: '👀',
    key: 'looksCounts',
  },
  {
    emoji: '👋',
    key: 'hiCounts',
  },
];

const SCReactionContainer = styled.div`
  justify-content: center;
  display: flex;
  gap: 1rem;
`;
const SCEmojiButton = styled.button`
  font-family: 'ndot-47', 'Lato-Regular', sans-serif;
  border: 1px solid ${({ theme }) => theme.border};
  background: transparent;
  border-radius: 5px;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
  line-height: 1.4rem;
  height: 2rem;
  font-size: 1rem;
  vertical-align: middle;

  &:hover {
    border: 1px solid #c7372f;
  }
`;

const Reaction = () => {
  return (
    <SCReactionContainer>
      {REACTION_LIST.map(({ emoji, key }) => {
        return (
          <SCEmojiButton
            key={key}
          >
            {emoji}
          </SCEmojiButton>
        );
      })}
    </SCReactionContainer>
  );
};

export default Reaction;
