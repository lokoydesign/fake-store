import { useState, useEffect } from 'react'

import { ENDPOINTS } from '../constants'

import FeaturedProducts from '../sections/FeaturedProducts'
import SummerSaleBanner from '../banners/SummerSale'
import ClubBanner from '../banners/Club'

export default function StoreFront() {
  const [ categories, setCategories ] = useState([])

  useEffect(function() {
    fetch(ENDPOINTS.CATEGORIES)
      .then(res => res.json())
      .then(setCategories)
      .catch(console.error)
  }, [])

  return (
    <>
      <SummerSaleBanner />
      <FeaturedProducts size={8} />
      <ClubBanner />
      {categories.length > 0 && <FeaturedProducts title={categories[0]} category={categories[0]} />}
      {categories.length > 0 && <FeaturedProducts title={categories[1]} category={categories[1]} />}
    </>
  )
}