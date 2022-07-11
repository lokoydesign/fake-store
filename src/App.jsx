import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import SiteHeader from './sections/SiteHeader'
import SiteNav from './sections/SiteNav'
import SiteFooter from './sections/SiteFooter'
import Copyright from './sections/Copyright'

import StoreFrontPage from './pages/StoreFront'
import CategoryPage from './pages/Category'
import ProductPage from './pages/Product'
import CartPage from './pages/Cart'
import CheckoutPage from './pages/Checkout'

export default function App() {
  const location = useLocation()

  useEffect(function() {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <SiteHeader />
      <SiteNav />
      <Routes>
        <Route path="*" element={<StoreFrontPage />} />
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
