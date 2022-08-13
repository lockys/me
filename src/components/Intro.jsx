import React from 'react'
import styled from 'styled-components'
import portfolioPhoto from '../assets/portfolio-photo.png'
import portfolioPhotoSayHi from '../assets/portfolio-say-hi.png'

const IntroContainer = styled.div`
  display: flex;
  gap: 1rem;
`

const ProfileImage = styled.img`
  width: 33%;
  border: .3rem solid #eee;
  transition: background-color .3s ease-in-out;
  border-radius: 0 0 0 5px;
  background-color: #08AEEA;
  cursor: pointer;

  &:hover {
    background-color: #8BC6EC;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
const IntroContent = styled.div`
  font-weight: lighter;
  border: .3rem solid #eee;
  color: #f9f9f9;
  background-color: #8BC6EC;
  background-image: linear-gradient(100deg, #08AEEA 0%, #2AF598 100%);
  border-radius: 0 0 5px 0;

  flex: 1;
  padding: 1rem;
  line-height: 1.5rem;
  font-size: .8rem;
  hyphens: auto;
`

const Intro = () => {
    const [portfolioImg, setPortfolioImage] = React.useState(portfolioPhoto)
    return (
        <IntroContainer>
            <ProfileImage src={portfolioImg}
                          onMouseEnter={() => {
                              setPortfolioImage(portfolioPhotoSayHi)
                          }}
                          onMouseOut={() => {
                              setPortfolioImage(portfolioPhoto)
                          }}
            />
            <IntroContent>
                Hello world! This is <u>Calvin Hao-Wei Jeng</u>, a software developer based in Taiwan.<br/><br/>
                -> I currently work for <u>DBS Bank</u> as a front-end developer. <br/>
                -> I write some JavaScript, CSS and HTML. <br/><br/> I got my BS
                and MS degree in <u>Computer Science</u> from National Tsing Hua university.
            </IntroContent>
        </IntroContainer>
    )
}

export default Intro