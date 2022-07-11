import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { NavLink, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faHeart, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'

import { ENDPOINTS } from '../constants'

export default function SiteNav() {
  const [ isLoading, setIsLoading ] = useState(true)
  const [ categories, setCategories ] = useState(Array(4).fill(null))
  const [ isMenuVisible, setIsMenuVisible ] = useState(false)
  const cart = useSelector(state => state.cart)
  const location = useLocation()

  useEffect(function() {
    async function fetchAndSetCategories() {
      setIsLoading(true)

      try {
        const data = await fetch(ENDPOINTS.CATEGORIES).then(res => res.json())
      
        setCategories(data)
      
      } catch (err) { console.error(err) }
      
      setIsLoading(false)
    }

    fetchAndSetCategories()
  }, [])

  useEffect(() => setIsMenuVisible(false), [location])

  return (
    <StyledNavContainer>
      <StyledToggleIcon icon={faBars} onClick={() => setIsMenuVisible(true)} />
      
      <StyledNav isMenuVisible={isMenuVisible}>
        <StyledToggleIcon icon={faXmark} onClick={() => setIsMenuVisible(false)} />
        {!isLoading && <StyledNavLink to="/">Store</StyledNavLink>}
        {isLoading
          ? Array(10).fill(null).map((value, i) => <StyledLoadingMenuItem key={i} />)
          : categories.map((cat, i) => <StyledNavLink key={`category-${i}`}to={`/category/${encodeURIComponent(cat)}`}>{cat}</StyledNavLink>)}
        {!isLoading && <StyledSaleLink to="/sale">Sale</StyledSaleLink>}
      </StyledNav>

      <StyledStoreNav>
        <StyledNavIconLink to="/wishlist"><FontAwesomeIcon icon={faHeart} /></StyledNavIconLink>
        <StyledNavIconLink to="/account"><FontAwesomeIcon icon={faUser} /></StyledNavIconLink>
        <StyledNavCartLink to="/cart" count={cart.items.length}><FontAwesomeIcon icon={faCartShopping} /></StyledNavCartLink>
      </StyledStoreNav>
    </StyledNavContainer>
  )
}

const StyledNavContainer = styled.div`
  position: relative;
  display: flex;
  gap: 1em;
  padding: 1em;
  border-block-end: .128em solid var(--color-blue);
  justify-content: space-between;
  align-items: center;
  
  @media (min-width: 82em) {
    padding-inline: calc((100% - 80em) / 2);
  }
`

const StyledLoadingMenuItem = styled.span`
  background-color: var(--color-gray);
  width: 5em;
  height: 1rem;
  border-radius: .5em;
  cursor: wait;
`

const StyledToggleIcon = styled(FontAwesomeIcon)`
  font-size: 1.4rem;
  cursor: pointer;
  color: var(--color-black);

  @media (min-width: 48em) {
    display: none;
  }
`

const StyledNav = styled.nav`
  background-color: var(--color-white);
  display: ${props => props.isMenuVisible ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  gap: 2em;
  position: fixed;
  inset-block-start: 0;
  inset-inline-start: 0;
  width: 100vw;
  height: 100vh;
  padding: 1em;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 600;
  z-index: 100;
  overflow-y: auto;

  @media (min-width: 48em) {
    background-color: transparent;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1em;
    padding: 0;
    position: relative;
    inset: initial;
    width: initial;
    height: initial;
    font-size: 1rem;
  }
`

const StyledStoreNav = styled.nav`
  display: flex;
  gap: 1em;
  font-size: 1.4rem;
`

const StyledNavLink = styled(NavLink)`
  color: var(--color-black);

  &:hover,
  &.active {
    color: var(--color-blue);
  }

  &:hover {
    text-decoration: none;
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
    display: ${props => props.count > 0 ? 'block' : 'none'};
    background-color: var(--color-blue);
    color: var(--color-white);
    content: ${props => `"${props.count}"`};
    width: 2.5em;
    height: 2.5em;
    line-height: 1.5em;
    text-align: center;
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