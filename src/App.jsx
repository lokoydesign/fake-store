import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route, useLocation } from 'react-router-dom'

import { ENDPOINTS } from './constants'

import { setCategories } from './features/storeSlice'

import GlobalStyles from './Styles'

import SiteHeader from './sections/SiteHeader'
import SiteNav from './sections/SiteNav'
import SiteFooter from './sections/SiteFooter'
import Copyright from './sections/Copyright'

import NotFoundPage from './pages/NotFound'
import StoreFrontPage from './pages/StoreFront'
import CategoryPage from './pages/Category'
import ProductPage from './pages/Product'
import CartPage from './pages/Cart'
import CheckoutPage from './pages/Checkout'

export default function App() {
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(function() {
    fetch(ENDPOINTS.CATEGORIES)
      .then(res => res.json())
      .then(categories => dispatch(setCategories(categories)))
      .catch(console.error)
  }, [])

  useEffect(function() {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <GlobalStyles />
      <SiteHeader />
      <SiteNav />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<StoreFrontPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <SiteFooter />
      <Copyright />
    </>
  )
}
