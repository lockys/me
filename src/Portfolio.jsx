import React from 'react'
import styled from 'styled-components'
import {Routes, Route} from 'react-router-dom'
import {FiGithub, FiLinkedin, FiMail, FiClock} from 'react-icons/fi';

import {SCHeader} from './components/styled-comps'
import Navigation from './components/Navigation'
import Intro from './components/Intro'
import Exp from './components/Exp';
import Note from './components/Note';

const PortfolioContainer = styled.div`
  max-width: 768px;
  margin: 2rem auto;
  @media (max-width: 768px) {
    margin: 0;
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

  &:hover {
    border: 1rem solid black;
    color: black;
    background: #eee;
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
  border-top: 2px dotted lightgray;
  padding-top: 1rem;
  font-weight: bold;
`
const SCFooterLink = styled.a`
  padding: 0.2rem;
  color: black;

  &:hover {
    color: red;
  }
`
const SiteInfo = styled.div`
  float: right;
  font-size: 0.8rem;

  @media (max-width: 320px) {
    float: none;
    margin: 1rem 0;
  }
`
const SCTimeSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: .9rem;
  gap: .5rem;
  margin: 1rem;
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
                <SCTitle>calvinjeng</SCTitle>
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
                <FiClock/>My timezone: UTC+8 = {calcTime('Taipei', '+8')}
            </SCTimeSection>
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
