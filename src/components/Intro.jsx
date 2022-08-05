import React from 'react'
import styled from 'styled-components'

const IntroContainer = styled.div`
  display: flex;
  gap: 1rem;
`

const ProfileImage = styled.img`
  width: 33%;
  border: .3rem solid #eee;
  box-shadow: rgba(0, 0, 0, .30) 0 2px 3px;
  filter: grayscale(100%);
  transition: filter .3s ease-in-out;

  &:hover {
    filter: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
const IntroContent = styled.div`
  font-weight: lighter;
  border: .3rem solid #eee;
  color: #f9f9f9;
  background-color: #0093E9;
  background-image: linear-gradient(288deg, #0093E9 0%, #80D0C7 100%);
  box-shadow: rgba(0, 0, 0, .30) 0 2px 3px;

  flex: 1;
  padding: 1rem;
  line-height: 1.5rem;
  font-size: .8rem;
  hyphens: auto;
`

const Intro = () => {
    return (
        <IntroContainer>
            <ProfileImage src={'https://avatars.githubusercontent.com/u/3911469?v=4'}/>
            <IntroContent>
                Hello world! This is Calvin Hao-Wei Jeng, a software developer based in Taiwan.<br/><br/>
                - I currently work for DBS Bank as a front-end developer. <br/>
                - I write some JavaScript, CSS and HTML. <br/><br/> In the mean time I got my BS
                and MS degree in Computer Science from National Tsing Hua university.
            </IntroContent>
        </IntroContainer>
    )
}

export default Intro