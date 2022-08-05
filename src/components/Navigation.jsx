import React from 'react'
import styled from 'styled-components';
import {Link} from "react-router-dom";

const links = [
    {
        text: '👋intro',
        path: '/'
    },
    {
        text: '💼experiences',
        path: '/exp'
    },
    {
        text: '📒note',
        path: '/note'
    }
]

const SCNavigationContainer = styled.nav`
  margin: 1rem;
  @media (max-width: 320px) {
    width: fit-content;
    margin: 1rem auto;
  }
`
const SCNavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bolder;

  &:not(:last-child):after {
    content: ' - ';
    cursor: default;
  }

  @media (max-width: 320px) {
    display: block;
    margin: 1rem 0;

    &:not(:last-child):after {
      content: '';
      cursor: default;
    }
  }
`

const Navigation = () => {
    return (<SCNavigationContainer>
        {
            links.map(({text, path}, key) => {
                return (<SCNavLink to={path} key={key}>{text}</SCNavLink>)
            })
        }
    </SCNavigationContainer>)
}

export default Navigation