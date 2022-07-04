import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'

import { ENDPOINTS } from '../constants'

export default function SiteNav() {
  const [ categories, setCategories ] = useState([])

  useEffect(function() {
    fetch(ENDPOINTS.CATEGORIES)
      .then(res => res.json())
      .then(setCategories)
      .catch(console.error)
  })

  if (1 > categories.length) return

  return (
    <StyledNavContainer>
      <StyledNav>
        <StyledNavLink to="/">All products</StyledNavLink>
        {categories.map((cat, i) => <StyledNavLink key={`category-${i}`}to={`/category/${encodeURIComponent(cat)}`}>{cat}</StyledNavLink>)}
        <StyledSaleLink to="/sale">Sale</StyledSaleLink>
      </StyledNav>
      <StyledStoreNav>
        <StyledNavIconLink to="#"><FontAwesomeIcon icon={faHeart} /></StyledNavIconLink>
        <StyledNavIconLink to="#"><FontAwesomeIcon icon={faUser} /></StyledNavIconLink>
        <StyledNavCartLink to="#"><FontAwesomeIcon icon={faCartShopping} /></StyledNavCartLink>
      </StyledStoreNav>
    </StyledNavContainer>
  )
}

const StyledNavContainer = styled.div`
  display: flex;
  gap: 1em;
  padding: 1.5em 1em;
  border-block-end: .128em solid var(--color-blue);
  justify-content: space-between;

  @media (min-width: 82em) {
    padding-inline: calc((100% - 80em) / 2);
  }
`

const StyledNav = styled.nav`
  display: flex;
  gap: 1em;
  text-transform: uppercase;
  font-weight: 600;
`

const StyledStoreNav = styled.nav`
  display: flex;
  gap: 1em;
  font-size: 1.2rem;
`

const StyledNavLink = styled(NavLink)`
  color: var(--color-black);

  &.active {
    color: var(--color-blue);
  }
`

const StyledSaleLink = styled(StyledNavLink)`
  color: var(--color-red);
`

const StyledNavIconLink = styled(NavLink)`
  color: var(--color-black);
`

const StyledNavCartLink = styled(StyledNavIconLink)`
  position: relative;

  &::after {
    background-color: var(--color-blue);
    color: var(--color-white);
    content: '50';
    padding: .25em;
    font-size: .5rem;
    font-weight: 700;
    border-radius: 50%;
    position: absolute;
    inset-block-start: -25%;
    inset-inline-end: -25%;
    border: .25em solid var(--color-white);
  }
`