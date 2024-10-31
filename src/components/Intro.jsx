import React from 'react';
import styled from 'styled-components';
import portfolioPhoto from '../assets/portfolio-photo.png';
import portfolioPhotoSayHi from '../assets/portfolio-say-hi.png';

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
  border: 0.3rem solid ${({ theme }) => theme.border};
  transition: background-color 0.3s ease-in-out;
  border-radius: 5px;
  background-color: #E2FFF2;
  cursor: pointer;

  &:hover {
    background-color: #F0FFF7;
  }

  @media (max-width: 768px) {
    width: 25%;
    border-radius: 50%;
  }
`;
const IntroContent = styled.div`
  border: 0.3rem solid ${({ theme }) => theme.border};
  color: #2A4D4C;
  background-color: #E2FFF2;

  border-radius: 5px;

  flex: 1;
  padding: 1rem;
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

const Intro = () => {
  const [portfolioImg, setPortfolioImage] = React.useState(portfolioPhoto);
  return (
    <IntroContainer>
      <ProfileImage
        src={portfolioImg}
        alt={'Portfolio image of Calvin Jeng'}
      />
      <IntroContent>
        Hello world! This is <SCUnderLine>Calvin Hao-Wei Jeng</SCUnderLine>, a software developer based in Taiwan. <SCUnderLine>@lockys</SCUnderLine> on Github.
        <br />
        <br />
        -> I currently work for <SCUnderLine>DBS Bank</SCUnderLine> as a front-end developer. <br />
        -> I write some JavaScript, CSS and HTML. <br />
        <br /> I got my BS and MS degree in <SCUnderLine>Computer Science</SCUnderLine> from National Tsing Hua university.
      </IntroContent>
    </IntroContainer>
  );
};

export default Intro;
