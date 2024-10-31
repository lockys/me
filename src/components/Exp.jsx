import React from 'react';
import styled from 'styled-components';
import { SCRoundImage, SCTitle as _SCTitle } from './styled-comps';
import nthuUrl from '../assets/nthu.jfif';
import garminUrl from '../assets/garmin.jfif';
import dbsUrl from '../assets/dbs.jfif';

const ExpRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`;
const ExpContext = styled.div`
  font-size: 0.8rem;
  line-height: 1.2rem;
`;
const ExpTitle = styled.h4`
  font-weight: bolder;
`;
const SCExpContainer = styled.div`
  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`;
const SCTitle = styled(_SCTitle)`
  font-family: 'Lato-Regular', sans-serif;
  font-weight: normal;
`;

const Exp = () => {
  return (
    <SCExpContainer>
      <SCTitle>(S)kills</SCTitle>
      <ExpRow>
        <ExpContext>
          <ExpTitle>Technical skills</ExpTitle>
          <ExpContext>JavaScript, React.js, CSS, HTML</ExpContext>
          <ExpTitle>Languages</ExpTitle>
          <ExpContext>Chinese(Native), English(Fair)</ExpContext>
        </ExpContext>
      </ExpRow>
      <SCTitle>(W)ork experiences</SCTitle>
      <ExpRow>
        <SCRoundImage src={dbsUrl} />
        <ExpContext>
          <ExpTitle>DBS Bank.</ExpTitle>
          <ExpContext>
            Front-end developer, 2021/5 - PRESET, Taipei
            <br />
            Develop features for the Taiwan DBS internet banking website.
          </ExpContext>
        </ExpContext>
      </ExpRow>
      <ExpRow>
        <SCRoundImage src={garminUrl} />
        <ExpContext>
          <ExpTitle>Garmin corp.</ExpTitle>
          <ExpContext>
            Software engineer, 2016/11 - 2020/5, New Taipei
            <br />
            mostly focus on implementations of back-end system
          </ExpContext>
        </ExpContext>
      </ExpRow>
      <SCTitle>(E)ducation</SCTitle>
      <ExpRow>
        <SCRoundImage src={nthuUrl} />
        <ExpContext>
          <ExpTitle>National Tsing Hua university</ExpTitle>
          <ExpContext>MS, 2014 - 2016, Hsinchu</ExpContext>
        </ExpContext>
      </ExpRow>
      <ExpRow>
        <SCRoundImage src={nthuUrl} />
        <ExpContext>
          <ExpTitle>National Tsing Hua university</ExpTitle>
          <ExpContext>BS, 2010 - 2014, Hsinchu</ExpContext>
        </ExpContext>
      </ExpRow>
    </SCExpContainer>
  );
};

export default Exp;
