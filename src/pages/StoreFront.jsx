import { useSelector } from 'react-redux'

import Layout from '../layouts/Main'

import FeaturedProducts from '../sections/FeaturedProducts'
import SummerSaleBanner from '../banners/SummerSale'
import ClubBanner from '../banners/Club'
import NewsletterBanner from '../banners/Newsletter'

export default function StoreFront() {
  const { categories } = useSelector(state => state.store)
  
  return (
    <Layout>
      <SummerSaleBanner />
      <FeaturedProducts size={8} />
      <ClubBanner />
      <FeaturedProducts title={categories[0]} category={categories[0]} />
      <NewsletterBanner />
      <FeaturedProducts title={categories[1]} category={categories[1]} />
    </Layout>
  )
}