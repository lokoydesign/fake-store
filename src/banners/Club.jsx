import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function ClubBanner() {
  return (
    <StyledBanner>
      <StyledBannerTitle>Fakestore club</StyledBannerTitle>
      <StyledBannerDescription>Join over 5000+ customers in getting exclusive offers and free shipping today!</StyledBannerDescription>
      <StyledBannerLink to="/club">Try now</StyledBannerLink>
    </StyledBanner>
  )
}

const StyledBanner = styled.div`
  background-color: var(--color-blue);
  color: var(--color-white);
  display: grid;
  margin-block: 4em;
  margin-inline: 1em;
  padding: 2em;
  max-width: 80em;
  gap: 1em;
  border-radius: .5em;
  grid-template-columns: minmax(0, 1fr);
  justify-items: start;
  grid-template-areas:
    "title"
    "description"
    "button"
  ;
 

  @media (min-width: 48em) {
    grid-template-columns: 1fr minmax(5em, auto);
    align-items: center;
    grid-template-areas:
      "title button"
      "description button"
    ;
  }

  @media (min-width: 82em) {
    margin-inline: auto;
  }
`

const StyledBannerTitle = styled.h3`
  margin: 0;
  font-size: 2rem;
  text-transform: uppercase;
  grid-area: title;
`


const StyledBannerDescription = styled.p`
  margin: 0;
  font-size: 1.2rem;
  grid-area: description;
`

const StyledBannerLink = styled(Link)`
  background-color: var(--color-white);
  color: var(--color-blue);
  padding: .75em 1em;
  border-radius: .25em;
  font-size: 1.2rem;
  font-weight: 700;
  grid-area: button;

  &:hover {
    text-decoration: none;
  }
`