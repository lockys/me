import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

import { SCHeader } from './components/styled-comps';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import Exp from './components/Exp';
import Note from './components/Note';
import Kudos from './components/Kudos';
import inpgif from './assets/88x31/i-np.gif';
import applec from './assets/88x31/apple_computer.gif';
import apple from './assets/88x31/apple.gif';
import apache from './assets/88x31/arachne2.gif';
import msnotepad from './assets/88x31/msnotepad.gif';

const gifList = [inpgif, applec, apple, apache, msnotepad];

const PortfolioContainer = styled.div`
  max-width: 768px;
  margin: 2rem auto;
  align-items: center;
  border-radius: 5px;
  color: ${({ theme }) => theme.textColor};
    
  @media (max-width: 768px) {
    margin: 0;
    border: none;
  }
`;

const SCTitle = styled(SCHeader)`
  font-family: 'Lato-Regular', sans-serif;
  color: ${({ theme }) => theme.textColor};
  text-align: right;
  padding: 0.5rem;
  font-size: 0.8rem;
`;
const Header = styled.div`
  margin: 1rem;

  @media (max-width: 768px) {
    margin: 0;
  }
`;
const ContentSection = styled.section`
  margin: 1rem;

  @media (max-width: 768px) {
    margin: 0;
  }
`;
const Footer = styled.footer`
  margin: 1rem;
  padding-top: 1rem;
  font-weight: bold;
`;
const SCFooterLink = styled.a`
  padding: 0.2rem;
  color: ${({ theme }) => theme.textColor};
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #c7372f;
  }
`;
const SiteInfo = styled.div`
  float: right;
  font-size: 0.8rem;

  @media (max-width: 320px) {
    float: none;
    padding: 1rem 0;
  }
`;
const SCTimeSection = styled.section`
  font-family: 'ndot-47', 'Lato-Regular', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  margin: 1rem;
  gap: 0.3rem;

  @media (max-width: 320px) {
    flex-direction: column;
  }
`;

const SCTimeSpan = styled.span`
  color: #c7372f;
`;

const SCHr = styled.hr`
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: ${({ theme }) => theme.textColor};
  text-align: center;
  height: 1.5em;
  opacity: 0.5;

  &:before {
    content: '';
    background: linear-gradient(to right, transparent, ${({ theme }) => theme.textColor}, transparent);
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
    padding: 0 0.5em;
    line-height: 1.5em;
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.background};
    transition: background 0.5s ease-in-out;
  }
`;

const splash = keyframes`
  from {
    height: 0;
  }

  to {
    height: auto;
  }
`;

const SCAnimatedDot = styled.div`
  height: 0;
  overflow: hidden;
  color: #c7372f;
  animation: ${splash} 1s linear infinite;

  @media (max-width: 320px) {
    display: none;
  }
`;

const SCCopyRightLink = styled(Link)`
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;
`;
const SCModeContainer = styled.div`
  cursor: pointer;
  display: inline-block;
  margin-left: 1rem;
  vertical-align: middle;
`;

const SCReactionSection = styled.div`
  display: flex;
  justify-content: end;
  margin: 1rem;
`;

const SCGif = styled.img`
  border: 1px solid ${({ theme }) => theme.border};
  cursor: pointer;
`;

function Portfolio({ setIsDark, isDark }) {
  const calcTime = (city, offset) => {
    let d = new Date();
    let utc = d.getTime() + d.getTimezoneOffset() * 60000;
    let nd = new Date(utc + 3600000 * offset);
    return `${nd.getHours()}:${nd.getMinutes().toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}`;
  };

  const [gif, setGif] = React.useState(gifList[0]);

  return (
    <PortfolioContainer>
      <Header>
        <SCTitle>i dont what to put here yet...</SCTitle>
      </Header>
      <Navigation />
      <ContentSection>
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route path="/exp" element={<Exp />} />
          <Route path="/note" element={<Note />} />
          <Route path="/kudos" element={<Kudos />} />
        </Routes>
      </ContentSection>
      <SCTimeSection>
        🕑 Taipei Time : UTC+8 = <SCTimeSpan>{calcTime('Taipei', '+8')}</SCTimeSpan>
        <SCAnimatedDot>.</SCAnimatedDot>
      </SCTimeSection>
      <SCReactionSection>
        <SCGif src={gif} onClick={() => setGif(gifList[Math.floor(Math.random() * gifList.length)])} alt="gif" />
      </SCReactionSection>
      <SCHr onClick={() => {}} className="hr-text" data-content="https://calvinjeng.me" />
      <Footer>
        <SCFooterLink href="https://github.com/lockys" target="_blank">
          <FiGithub />
        </SCFooterLink>
        <SCFooterLink href="https://www.linkedin.com/in/calvinjeng/" target="_blank">
          <FiLinkedin />
        </SCFooterLink>
        <SCFooterLink href="mailto:lockys.tw@gmail.com" target="_blank">
          <FiMail />
        </SCFooterLink>
        <SiteInfo>
          <SCCopyRightLink to={'/kudos'}>©</SCCopyRightLink> {new Date().getFullYear()} Calvin Hao-Wei Jeng
          {!isDark ? (
            <SCModeContainer
              onClick={() => {
                setIsDark(true);
                localStorage.setItem('__isDark', 'true');
              }}>
              <MdDarkMode />
            </SCModeContainer>
          ) : (
            <SCModeContainer
              onClick={() => {
                setIsDark(false);
                localStorage.setItem('__isDark', 'false');
              }}>
              <MdLightMode />
            </SCModeContainer>
          )}
        </SiteInfo>
      </Footer>
    </PortfolioContainer>
  );
}

export default Portfolio;
