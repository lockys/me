import React from 'react'
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import wingSpritePath from '../assets/wing-sprite.png'

const links = [
    {
        text: '👋INTRO.',
        path: '/'
    },
    {
        text: '💻EXPERIENCES.',
        path: '/exp'
    },
    {
        text: '📒NOTE.',
        path: '/note'
    }
]

const SCNavigationContainer = styled.nav`
  margin: 1rem auto;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: .5rem;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`
const SCNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: bolder;
  font-size: .9rem;
  transition: color .2s ease-in-out;

  &.active {
    text-decoration: underline dotted;
  }

  &:hover {
    color: #C7372F;
  }
`
const SCLinkContainer = styled.div`

`
const SCRightWing = styled.div`
  background: url(${wingSpritePath}) no-repeat -3px -325px;
  background-size: 339px 366px;
  width: 58px;
  height: 41px;
  transform: scale(.5);

  @media (max-width: 425px) {
    display: none;
  }
`
const SCLeftWing = styled.div`
  background: url(${wingSpritePath}) no-repeat -3px -325px;
  background-size: 339px 366px;
  width: 58px;
  height: 41px;
  transform: scale(-.5, .5);
  @media (max-width: 425px) {
    display: none;
  }
`

const Navigation = () => {
    return (<SCNavigationContainer>
        <SCLeftWing/>
        {
            links.map(({text, path}, key) => {
                return (<SCLinkContainer><SCNavLink to={path} key={key}>{text}</SCNavLink></SCLinkContainer>)
            })
        }
        <SCRightWing/>
    </SCNavigationContainer>)
}

export default Navigation