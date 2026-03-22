import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';


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
import designedByHumanBadge from './assets/designed-by-human-badge.svg';
import profilePhoto from './assets/portfolio-photo.png';

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

  @media (max-width: 768px) {
    display: none;
  }
`;
const SCMobileAvatar = styled.img`
  display: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  filter: grayscale(100%);

  @media (max-width: 768px) {
    display: block;
    margin: 1rem auto 0;
  }
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
    color: ${({ theme }) => theme.accentColor};
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
  color: ${({ theme }) => theme.accentColor};
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
  color: ${({ theme }) => theme.accentColor};
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

  &:hover {
    text-decoration: underline dotted;
  }
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

const SCBadge = styled.img`
  margin-left: 0.5rem;
  height: 31px;
  filter: ${({ theme }) => theme.wingFilter};
  transition: filter 0.5s ease-in-out;
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
    <PortfolioContainer data-testid="portfolio-container">
      <Header data-testid="header">
        <SCTitle data-testid="header-title">I dont know what to put here yet.</SCTitle>
        <SCMobileAvatar data-testid="mobile-avatar" src={profilePhoto} alt="Calvin Jeng" />
      </Header>
      <Navigation />
      <ContentSection data-testid="content-section">
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route path="/exp" element={<Exp />} />
          <Route path="/note" element={<Note />} />
          <Route path="/kudos" element={<Kudos />} />
        </Routes>
      </ContentSection>
      <SCTimeSection data-testid="time-section">
        🕑 Taipei Time : UTC+8 = <SCTimeSpan data-testid="time-value">{calcTime('Taipei', '+8')}</SCTimeSpan>
        <SCAnimatedDot>.</SCAnimatedDot>
      </SCTimeSection>
      <SCReactionSection data-testid="reaction-section">
        <SCGif data-testid="random-gif" src={gif} onClick={() => setGif(gifList[Math.floor(Math.random() * gifList.length)])} alt="gif" />
        <a href="https://notbyai.fyi" target="_blank" rel="noreferrer">
          <SCBadge data-testid="not-by-ai-badge" src={designedByHumanBadge} alt="Designed by Human, Not by AI" />
        </a>
      </SCReactionSection>
      <SCHr data-testid="site-divider" onClick={() => {}} className="hr-text" data-content="https://calvinjeng.io" />
      <Footer data-testid="footer">
        <SCFooterLink data-testid="link-github" href="https://github.com/lockys" target="_blank">
          <FiGithub />
        </SCFooterLink>
        <SCFooterLink data-testid="link-linkedin" href="https://www.linkedin.com/in/calvinjeng/" target="_blank">
          <FiLinkedin />
        </SCFooterLink>
        <SCFooterLink data-testid="link-email" href="mailto:lockys.tw@gmail.com" target="_blank">
          <FiMail />
        </SCFooterLink>
        <SiteInfo data-testid="site-info">
          <SCCopyRightLink to={'/kudos'}>©</SCCopyRightLink> {new Date().getFullYear()} Calvin Hao-Wei Jeng
          <SCModeContainer
            data-testid="theme-toggle"
            onClick={() => {
              const next = !isDark;
              setIsDark(next);
              localStorage.setItem('__isDark', String(next));
            }}>
            {isDark ? '明' : '暗'}
          </SCModeContainer>
        </SiteInfo>
      </Footer>
    </PortfolioContainer>
  );
}

export default Portfolio;
