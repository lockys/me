import React from 'react';
import styled from 'styled-components';
import portfolioPhoto from '../assets/portfolio-photo.png';
import portfolioPhotoSayHi from '../assets/portfolio-say-hi.png';
import { introText } from './intro-i18n';

const IntroContainer = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProfileImage = styled.img`
  width: 33%;
  height: auto;
  transition: background-color 0.3s ease-in-out;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.highlightBg};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.highlightBgHover};
  }

  @media (max-width: 768px) {
    width: 25%;
    border-radius: 50%;
  }
`;
const IntroContent = styled.div`
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.highlightBg};
  position: relative;

  border-radius: 5px;

  flex: 1;
  padding: 1rem;
  padding-bottom: 2rem;
  line-height: 1.5rem;
  font-size: 0.9rem;
  hyphens: auto;

  @media (max-width: 768px) {
    border-radius: 0;
  }
`;
const SCUnderLine = styled.span`
  text-decoration: underline dotted;
  font-family: 'ndot-47', 'Lato-Regular', sans-serif;

  &:hover {
    text-decoration: none;
  }
`;
const SCLangToggle = styled.button`
  font-family: 'ndot-47', 'Lato-Regular', sans-serif;
  border: 1px solid ${({ theme }) => theme.border};
  background: transparent;
  color: ${({ theme }) => theme.textColor};
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.1rem 0.4rem;
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
`;

const Intro = () => {
  const [portfolioImg, setPortfolioImage] = React.useState(portfolioPhoto);
  const [lang, setLang] = React.useState(() => localStorage.getItem('__lang') || 'en');
  const t = introText[lang];

  const toggleLang = () => {
    const next = lang === 'en' ? 'zh' : 'en';
    setLang(next);
    localStorage.setItem('__lang', next);
  };

  return (
    <IntroContainer>
      <ProfileImage
        src={portfolioImg}
        alt={'Portfolio image of Calvin Jeng'}
      />
      <IntroContent>
        {t.greeting} <SCUnderLine>Calvin Hao-Wei Jeng</SCUnderLine>{t.description}<SCUnderLine>@lockys</SCUnderLine>{t.githubLabel}
        <br />
        <br />
        {t.work}<SCUnderLine>{t.company}</SCUnderLine>{t.workRole} <br />
        {t.skills} <br />
        <br /> {t.education}<SCUnderLine>{t.degree}</SCUnderLine>{t.educationFrom}
        <SCLangToggle onClick={toggleLang}>{lang === 'en' ? '中' : '英'}</SCLangToggle>
      </IntroContent>
    </IntroContainer>
  );
};

export default Intro;
