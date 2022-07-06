import styled from 'styled-components'

import instagramLogo from '../assets/images/instagram.png'
import twitterLogo from '../assets/images/twitter.png'
import facebookLogo from '../assets/images/facebook.png'

export default function siteFooter() {
  return (
    <StyledFooter>
      <StyledTextWidget>
        <StyledWidgetTitle>About FakeStore</StyledWidgetTitle>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae soluta architecto earum deserunt laboriosam sit, mollitia eum reiciendis accusamus rem ipsum esse harum quis aspernatur cupiditate qui asperiores officiis modi?</p>
      </StyledTextWidget>

      <StyledListWidget>
        <StyledWidgetTitle>Information</StyledWidgetTitle>
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Our stores</a></li>
          <li><a href="#">FakeStore Club</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Order catalogue</a></li>
          <li><a href="#">Shipping fees</a></li>
        </ul>
      </StyledListWidget>
      
      <StyledListWidget>
        <StyledWidgetTitle>Customer service</StyledWidgetTitle>
        <ul>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Frequently asked questions</a></li>
          <li><a href="#">General terms</a></li>
          <li><a href="#">Payment terms</a></li>
        </ul>
      </StyledListWidget>
      
      <StyledSocialMediaWidget>
        <p>Join us on Social media</p>
        <div>
          <a href="#"><img src={instagramLogo} alt="Instagram logo" /></a>
          <a href="#"><img src={twitterLogo} alt="Twitter logo" /></a>
          <a href="#"><img src={facebookLogo} alt="Facebook logo" /></a>
        </div>
      </StyledSocialMediaWidget>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: var(--color-blue);
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2em;
  margin-block-start: 4em;
  padding: 2em 1em;

  @media (min-width: 64em) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 82em) {
    padding-inline: calc((100% - 80em) / 2);
  }

  a {
    color: var(--color-white);
  }
`

const StyledWidgetTitle = styled.h4`
  text-transform: uppercase;
  margin-block: 0 1em;
  font-weight: 600;
`

const StyledTextWidget = styled.div`
  @media (min-width: 64em) {
    max-width: 28%;
  }
  
  p {
    margin: 0;

    @media (min-width: 48em) {
      font-size: .85rem;
    }
  }
`

const StyledListWidget = styled.div`
  @media (min-width: 64em) {
    min-width: 10em;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: .5em;
  }
`

const StyledSocialMediaWidget = styled.div`
  background-color: var(--color-white);
  color: var(--color-blue);
  padding: 1em;
  border-radius: 2em;
  text-align: center;

  p {
    margin-block: 0 1em;
    font-size: 1.4rem;
    font-weight: 800;
    width: 10ch;
    margin-inline: auto;
  }

  > div {
    display: flex;
    gap: 1em;
    width: 80%;
    margin-inline: auto;
  }
`