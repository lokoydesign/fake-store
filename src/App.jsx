import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import SiteHeader from './sections/SiteHeader'
import SiteNav from './sections/SiteNav'
import SiteFooter from './sections/SiteFooter'
import Copyright from './sections/Copyright'

import StoreFrontPage from './pages/StoreFront'
import CategoryPage from './pages/Category'
import ProductPage from './pages/Product'
import CartPage from './pages/Cart'

export default function App() {
  const location = useLocation()

  useEffect(function() {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <SiteHeader />
      <SiteNav />
      <StyledMain>
        <Routes>
          <Route path="*" element={<StoreFrontPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </StyledMain>
      <SiteFooter />
      <Copyright />
    </>
  )
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin-block: 2em;
  min-height: 50vh;

  @media (min-width: 48em) {
    margin-block: 4em;
  }

  @media (min-width: 82em) {
    gap: 4em;
  }

  > * {
    margin-inline: 1em;
    width: calc(100% - 2em);
    max-width: 80em;

    @media (min-width: 82em) {
      margin-inline: auto;
    }
  }
`