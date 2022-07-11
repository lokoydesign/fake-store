import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons' 

export default function SiteHeader() {
  return (
    <StyledHeader>
      <StyledLogo to="/">FakeStore</StyledLogo>
      <StyledSocialNav>
        <a href="#" title="Join us on Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#" title="Join us on Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
      </StyledSocialNav>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: var(--color-blue);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1em;

  @media (min-width: 82em) {
    padding-inline: calc((100% - 80em) / 2);
  }
`

const StyledLogo = styled(Link)`
  background-color: var(--color-white);
  margin: 0;
  padding: .5em;
  font-size: 1rem;
  font-weight: 800;
  border-radius: .25em;
  color: var(--color-blue);

  &:hover {
    text-decoration: none;
  }
`

const StyledSocialNav = styled.nav`
  display: flex;
  gap: 1em;
  font-size: 1.2rem;
  align-items: center;

  a {
    color: var(--color-white);
  }
`