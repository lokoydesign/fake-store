import { Routes, Route } from 'react-router-dom'

import SiteHeader from './sections/SiteHeader'
import SiteNav from './sections/SiteNav'
import Copyright from './sections/Copyright'

import StoreFrontPage from './pages/StoreFront'

export default function App() {
  return (
    <>
      <SiteHeader />
      <SiteNav />
      <Routes>
        <Route path="*" element={<StoreFrontPage />} />
      </Routes>
      <Copyright />
    </>
  )
}
