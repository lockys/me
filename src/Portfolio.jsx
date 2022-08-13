import React from 'react'
import styled, {keyframes} from 'styled-components'
import {Routes, Route} from 'react-router-dom'
import {FiGithub, FiLinkedin, FiMail} from 'react-icons/fi';

import {SCHeader} from './components/styled-comps'
import Navigation from './components/Navigation'
import Intro from './components/Intro'
import Exp from './components/Exp';
import Note from './components/Note';

const PortfolioContainer = styled.div`
  max-width: 768px;
  margin: 1rem auto;
  align-items: center;
  border: 1px dotted lightgrey;
  border-radius: 5px;
  @media (max-width: 768px) {
    margin: 0;
    border: none;
  }
`

const SCTitle = styled(SCHeader)`
  color: white;
  background-color: #08AEEA;
  background-image: linear-gradient(107deg, #08AEEA 0%, #2AF598 100%);
  border: 1rem solid #eee;
  text-align: center;
  padding: .5rem;
  cursor: pointer;
  border-radius: 5px 5px 0 0;

  &:hover {
    border: 1rem solid black;
    color: black;
    background: #eee;
  }

  @media (max-width: 320px) {
    font-size: 2rem;
  }
`
const Header = styled.div`
  margin: 1rem;

  @media (max-width: 768px) {
    margin: 0;
  }
`
const ContentSection = styled.section`
  margin: 1rem;

  @media (max-width: 320px) {
    margin: 0;
  }
`
const Footer = styled.footer`
  margin: 1rem;
  padding-top: 1rem;
  font-weight: bold;
`
const SCFooterLink = styled.a`
  padding: 0.2rem;
  color: black;
  transition: color .3s ease-in-out;

  &:hover {
    color: #C7372F;
  }
`
const SiteInfo = styled.div`
  float: right;
  font-size: 0.8rem;

  @media (max-width: 320px) {
    float: none;
    padding: 1rem 0;
  }
`
const SCTimeSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .9rem;
  margin: 1rem;
  gap: .3rem;

  @media (max-width: 320px) {
    flex-direction: column;
  }
`

const SCTimeSpan = styled.span`
  font-family: 'dotted-font', 'Monoid', sans-serif;
  color: darkslategrey;
`

const SCHr = styled.hr`
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  opacity: .5;

  &:before {
    content: '';
    background: linear-gradient(to right, transparent, black, transparent);
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
  }

  &:after {
    content: attr(data-content);
    position: relative;
    display: inline-block;
    padding: 0 .5em;
    line-height: 1.5em;
    color: black;
    background-color: white;
  }
`

const splash = keyframes`
  from {
    height: 0;
  }

  to {
    height: auto;
  }
`

const SCAnimatedDot = styled.div`
  height: 0;
  overflow: hidden;
  animation: ${splash} 1s linear infinite;
  font-family: 'dotted-font', 'Monoid', sans-serif;

  @media (max-width: 320px) {
    display: none;
  }
`

function Portfolio() {
    const calcTime = (city, offset) => {
        let d = new Date();
        let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        let nd = new Date(utc + (3600000 * offset));
        return `${nd.getHours()}:${nd.getMinutes().toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
        })}`;
    }

    return (
        <PortfolioContainer>
            <Header>
                <SCTitle>calvinjeng.</SCTitle>
            </Header>
            <Navigation/>
            <ContentSection>
                <Routes>
                    <Route exact path="/" element={<Intro/>}/>
                    <Route path="/exp" element={<Exp/>}/>
                    <Route path="/note" element={<Note/>}/>
                </Routes>
            </ContentSection>
            <SCTimeSection>
                🕑 Taipei Time : UTC+8
                = <SCTimeSpan>{calcTime('Taipei', '+8')}</SCTimeSpan><SCAnimatedDot>.</SCAnimatedDot>
            </SCTimeSection>
            <SCHr className="hr-text" data-content="https://calvinjeng.me"/>
            <Footer>
                <SCFooterLink href="https://github.com/lockys" target="_blank">
                    <FiGithub/>
                </SCFooterLink>
                <SCFooterLink href="https://www.linkedin.com/in/calvinjeng/" target="_blank">
                    <FiLinkedin/>
                </SCFooterLink>
                <SCFooterLink href="mailto:lockys.tw@gmail.com" target="_blank">
                    <FiMail/>
                </SCFooterLink>
                <SiteInfo>
                    © {new Date().getFullYear()} Calvin Hao-Wei Jeng
                </SiteInfo>
            </Footer>
        </PortfolioContainer>
    )
}

export default Portfolio
