import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import PageHeader from '../components/PageHeader'
import ProductCard from '../components/ProductCard'
import ProductCardsContainer from '../components/ProductCardsContainer'

import FeaturedProducts from '../sections/FeaturedProducts'
import SummerSaleBanner from '../banners/SummerSale'
import ClubBanner from '../banners/Club'

import { ENDPOINTS } from '../constants'

export default function CategoryPage() {
  const [ isLoading, setIsLoading ] = useState(false)
  const [ products, setProducts ] = useState([])
  const params = useParams()

  useEffect(function() {
    async function fetchAndSetProcucts() {
      setIsLoading(true)

      try {
        const URI = `${ENDPOINTS.CATEGORY}/${encodeURIComponent(params.category)}`
        const data = await fetch(URI).then(res => res.json())
      
        setProducts(data)
      
      } catch(err) { console.error(err) }
      
      setIsLoading(false)
    }

    fetchAndSetProcucts()
  }, [params.category])
  
  return (
    <>
      <PageHeader title={params.category}/>
      <ProductCardsContainer isLoading={isLoading} size={16}>
        {products.map((product, i) => <ProductCard key={product.id || i} {...product}/>)}
      </ProductCardsContainer>
      <ClubBanner />
      <FeaturedProducts />
      <SummerSaleBanner />
    </>
  )
}
