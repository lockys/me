import React from 'react';
import styled from 'styled-components';
import { SCRoundImage, SCTitle as _SCTitle } from './styled-comps';

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
  font-family: 'ndot-47', 'Lato-Regular', sans-serif;
  font-weight: normal;
`;

const Exp = () => {
  return (
    <SCExpContainer>
      <SCTitle>SKILLS</SCTitle>
      <ExpRow>
        <ExpContext>
          <ExpTitle>Technical skills</ExpTitle>
          <ExpContext>JavaScript, React.js, CSS, HTML</ExpContext>
          <ExpTitle>Languages</ExpTitle>
          <ExpContext>Chinese(Native), English(Fair)</ExpContext>
        </ExpContext>
      </ExpRow>
      <SCTitle>WORK EXPERIENCES</SCTitle>
      <ExpRow>
        <SCRoundImage src="https://media-exp1.licdn.com/dms/image/C4D0BAQEaBXOgNiu3sg/company-logo_100_100/0/1531757731989?e=1667433600&v=beta&t=3kqC6Mn06KyOf_GUf-Y-sVNf-h77DcsMG0iK77DlTag" />
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
        <SCRoundImage src="https://media-exp1.licdn.com/dms/image/C4E0BAQFoH9k8ssM14Q/company-logo_100_100/0/1562340511062?e=1667433600&v=beta&t=CYxfc97wi2hQ9QAPoyDlT2lLYcb7uvbF-1YD71O_zZY" />
        <ExpContext>
          <ExpTitle>Garmin corp.</ExpTitle>
          <ExpContext>
            Software engineer, 2016/11 - 2020/5, New Taipei
            <br />
            mostly focus on implementations of back-end system
          </ExpContext>
        </ExpContext>
      </ExpRow>
      <SCTitle>EDUCATION</SCTitle>
      <ExpRow>
        <SCRoundImage src="https://media-exp1.licdn.com/dms/image/C560BAQGT4WA5vJdeCQ/company-logo_100_100/0/1519856847096?e=1667433600&v=beta&t=lhoY8R_yZdZQcB0RVmCdkYH_JJ44uqJkRK5HrYE4COo" />
        <ExpContext>
          <ExpTitle>National Tsing Hua university</ExpTitle>
          <ExpContext>MS, 2014 - 2016, Hsinchu</ExpContext>
        </ExpContext>
      </ExpRow>
      <ExpRow>
        <SCRoundImage src="https://media-exp1.licdn.com/dms/image/C560BAQGT4WA5vJdeCQ/company-logo_100_100/0/1519856847096?e=1667433600&v=beta&t=lhoY8R_yZdZQcB0RVmCdkYH_JJ44uqJkRK5HrYE4COo" />
        <ExpContext>
          <ExpTitle>National Tsing Hua university</ExpTitle>
          <ExpContext>BS, 2010 - 2014, Hsinchu</ExpContext>
        </ExpContext>
      </ExpRow>
    </SCExpContainer>
  );
};

export default Exp;
