import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import wingSpritePath from '../assets/wing-sprite.png';

const links = [
  {
    text: '👋INTRO.',
    path: '/',
  },
  {
    text: '💻EXPERIENCES.',
    path: '/exp',
  },
  {
    text: '📒NOTE.',
    path: '/note',
  },
];

const SCNavigationContainer = styled.nav`
  margin: 1rem auto;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
const SCNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};
  font-weight: bolder;
  font-size: 0.9rem;
  transition: color 0.2s ease-in-out;

  &.active {
    text-decoration: underline dotted;
    color: #c7372f;
  }

  &:hover {
    color: #c7372f;
  }
`;
const SCLinkContainer = styled.div``;
const SCRightWing = styled.div`
  background: url(${wingSpritePath}) no-repeat -3px -325px;
  background-size: 339px 366px;
  width: 58px;
  height: 41px;
  transform: scale(0.5);
  filter: ${({ theme }) => theme.wingFilter};
  transition: filter 0.5s ease-in-out;

  @media (max-width: 425px) {
    display: none;
  }
`;
const SCLeftWing = styled.div`
  background: url(${wingSpritePath}) no-repeat -3px -325px;
  background-size: 339px 366px;
  width: 58px;
  height: 41px;
  transform: scale(-0.5, 0.5);
  filter: ${({ theme }) => theme.wingFilter};
  transition: filter 0.5s ease-in-out;

  @media (max-width: 425px) {
    display: none;
  }
`;

const Navigation = () => {
  return (
    <SCNavigationContainer>
      <SCLeftWing />
      {links.map(({ text, path }, key) => {
        return (
          <SCLinkContainer key={key}>
            <SCNavLink to={path}>{text}</SCNavLink>
          </SCLinkContainer>
        );
      })}
      <SCRightWing />
    </SCNavigationContainer>
  );
};

export default Navigation;
