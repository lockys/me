import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import wingSpritePath from '../assets/wing-sprite.png';

const links = [
  {
    text: '(I)ntro',
    path: '/',
  },
  {
    text: '(E)xperiences',
    path: '/exp',
  }
];

const SCNavigationContainer = styled.nav`
  margin: 1rem auto;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 425px) {
    flex-direction: row;
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
  }

  &:hover {
    text-decoration: underline dotted;
  }
`;
const SCDivider = styled.span`
  color: ${({ theme }) => theme.textColor};
  opacity: 0.3;
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
  opacity: 0.3;

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
  opacity: 0.3;

  @media (max-width: 425px) {
    display: none;
  }
`;

const Navigation = () => {
  return (
    <SCNavigationContainer data-testid="navigation">
      <SCLeftWing data-testid="wing-left" />
      {links.map(({ text, path }, index) => {
        return (
          <React.Fragment key={index}>
            {index > 0 && <SCDivider>/</SCDivider>}
            <SCLinkContainer>
              <SCNavLink data-testid={`nav-link-${path.replace('/', '') || 'home'}`} to={path}>{text}</SCNavLink>
            </SCLinkContainer>
          </React.Fragment>
        );
      })}
      <SCRightWing data-testid="wing-right" />
    </SCNavigationContainer>
  );
};

export default Navigation;
